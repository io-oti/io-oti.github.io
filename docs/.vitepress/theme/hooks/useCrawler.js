class Animation {
  constructor(canvas) {
    this.canvas = canvas
    this.context = canvas.getContext('2d')
    this.crawler = null
    this.running = false
    this.requestID = undefined
    this.position = { x: 0, y: 0 }
    this.defaultOption = {
      size: 1,
      legs: 2,
      tail: 10,
    }

    this.init()
  }

  init() {
    window.addEventListener('mousemove', event => {
      this.position = { x: event.clientX, y: event.clientY }
    })
  }

  start(option = {}) {
    this.crawler = this.setupCrawler({
      ...this.defaultOption,
      ...option,
    })
    this.running = true
    this.draw()
  }

  stop() {
    window.cancelAnimationFrame(this.requestID)
    this.running = false
    this.crawler = null
    this.clearCanvas()
  }

  setupCrawler({ size, legs, tail }) {
    this.crawler = new Crawler(
      ...Object.values({
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
        angle: 0,
        fAccel: size * 10,
        fFric: size * 2,
        fRes: 0.5,
        fThresh: 16,
        rAccel: 0.5,
        rFric: 0.085,
        rRes: 0.5,
        rThresh: 0.3,
      })
    )

    let spinal = this.crawler

    // Neck
    for (let i = 0; i < 6; i++) {
      spinal = new Segment(spinal, size * 4, 0, (Math.PI * 2) / 3, 1.1)

      for (let ii = -1; ii <= 1; ii += 2) {
        let node = new Segment(spinal, size * 3, ii, 0.1, 2)

        for (let iii = 0; iii < 3; iii++) {
          node = new Segment(node, size * 0.1, -ii * 0.1, 0.1, 2)
        }
      }
    }

    // Torso and legs
    for (let i = 0; i < legs; i++) {
      if (i > 0) {
        // Vertebrae and ribs
        for (let ii = 0; ii < 6; ii++) {
          spinal = new Segment(spinal, size * 4, 0, 1.571, 1.5)
          for (let iii = -1; iii <= 1; iii += 2) {
            let node = new Segment(spinal, size * 3, iii * 1.571, 0.1, 1.5)
            for (let iv = 0; iv < 3; iv++) {
              node = new Segment(node, size * 3, -iii * 0.3, 0.1, 2)
            }
          }
        }
      }

      // Legs and shoulders
      for (let ii = -1; ii <= 1; ii += 2) {
        let node = new Segment(spinal, size * 12, ii * 0.785, 0, 8) // Hip

        node = new Segment(node, size * 16, -ii * 0.785, 6.28, 1) // Humerus
        node = new Segment(node, size * 16, ii * 1.571, Math.PI, 2) // Forearm

        // fingers
        for (let iii = 0; iii < 4; iii++) {
          new Segment(node, size * 4, (iii / 3 - 0.5) * 1.571, 0.1, 4)
        }
        new LegSystem(node, 3, size * 12, this.crawler, 4)
      }
    }

    // Tail
    for (let i = 0; i < tail; i++) {
      spinal = new Segment(spinal, size * 4, 0, (Math.PI * 2) / 3, 1.1)

      for (let ii = -1; ii <= 1; ii += 2) {
        let node = new Segment(spinal, size * 3, ii, 0.1, 2)

        for (let iii = 0; iii < 3; iii++) {
          node = new Segment(
            node,
            (size * 3 * (tail - i)) / tail,
            -ii * 0.1,
            0.1,
            2
          )
        }
      }
    }

    return this.crawler
  }

  clearCanvas() {
    this.context.clearRect(0, 0, window.innerWidth, window.innerHeight)
  }

  draw() {
    if (!this.running) return

    const r = 4

    this.clearCanvas()
    this.crawler.follow(this.position.x, this.position.y)

    this.context.beginPath()
    this.context.arc(
      this.crawler.x,
      this.crawler.y,
      r,
      Math.PI / 4 + this.crawler.absAngle,
      (7 * Math.PI) / 4 + this.crawler.absAngle
    )
    this.context.moveTo(
      this.crawler.x + r * Math.cos((7 * Math.PI) / 4 + this.crawler.absAngle),
      this.crawler.y + r * Math.sin((7 * Math.PI) / 4 + this.crawler.absAngle)
    )
    this.context.lineTo(
      this.crawler.x + r * Math.cos(this.crawler.absAngle) * 2 ** 0.5,
      this.crawler.y + r * Math.sin(this.crawler.absAngle) * 2 ** 0.5
    )
    this.context.lineTo(
      this.crawler.x + r * Math.cos(Math.PI / 4 + this.crawler.absAngle),
      this.crawler.y + r * Math.sin(Math.PI / 4 + this.crawler.absAngle)
    )
    this.context.shadowColor = 'transparent'
    this.context.strokeStyle = 'rgba(76, 78, 105, 1)'
    this.context.stroke()

    for (let i = 0; i < this.crawler.children.length; i++) {
      this.crawler.children[i].draw.call(
        this.crawler.children[i],
        this.context,
        true
      )
    }

    this.requestID = window.requestAnimationFrame(this.draw.bind(this))
  }
}

// Necessary classes
class Segment {
  constructor(parent, size, angle, range, stiffness) {
    this.isSegment = true
    this.parent = parent // Segment which this one is connected to
    if (typeof parent.children == 'object') {
      parent.children.push(this)
    }
    this.children = [] // Segments connected to this segment
    this.size = size // Distance from parent
    this.relAngle = angle // Angle relative to parent
    this.defAngle = angle // Default angle relative to parent
    this.absAngle = parent.absAngle + angle // Angle relative to x-axis
    this.range = range // Difference between maximum and minimum angles
    this.stiffness = stiffness // How closely it conforms to default angle
    this.updateRelative(false, true)
  }

  updateRelative(iter, flex) {
    this.relAngle =
      this.relAngle -
      2 *
        Math.PI *
        Math.floor((this.relAngle - this.defAngle) / 2 / Math.PI + 1 / 2)
    if (flex) {
      this.relAngle = Math.min(
        this.defAngle + this.range / 2,
        Math.max(
          this.defAngle - this.range / 2,
          (this.relAngle - this.defAngle) / this.stiffness + this.defAngle
        )
      )
    }

    this.absAngle = this.parent.absAngle + this.relAngle
    this.x = this.parent.x + Math.cos(this.absAngle) * this.size
    this.y = this.parent.y + Math.sin(this.absAngle) * this.size

    if (iter) {
      for (let i = 0; i < this.children.length; i++) {
        this.children[i].updateRelative(iter, flex)
      }
    }
  }

  draw(context, iter) {
    context.beginPath()
    context.moveTo(this.parent.x, this.parent.y)
    context.lineTo(this.x, this.y)
    context.stroke()

    if (iter) {
      for (let i = 0; i < this.children.length; i++) {
        this.children[i].draw.call(this.children[i], context, true)
      }
    }
  }

  follow(iter) {
    const x = this.parent.x
    const y = this.parent.y
    const dist = ((this.x - x) ** 2 + (this.y - y) ** 2) ** 0.5

    this.x = x + (this.size * (this.x - x)) / dist
    this.y = y + (this.size * (this.y - y)) / dist
    this.absAngle = Math.atan2(this.y - y, this.x - x)
    this.relAngle = this.absAngle - this.parent.absAngle
    this.updateRelative(false, true)

    if (iter) {
      for (let i = 0; i < this.children.length; i++) {
        this.children[i].follow(true)
      }
    }
  }
}

class LimbSystem {
  constructor(end, length, speed, crawler) {
    this.end = end
    this.length = Math.max(1, length)
    this.crawler = crawler
    this.speed = speed
    crawler.systems.push(this)
    this.nodes = []
    let node = end

    for (let i = 0; i < length; i++) {
      this.nodes.unshift(node)
      node = node.parent
      if (!node.isSegment) {
        this.length = i + 1
        break
      }
    }

    this.hip = this.nodes[0].parent
  }

  moveTo(x, y) {
    this.nodes[0].updateRelative(true, true)
    const dist = ((x - this.end.x) ** 2 + (y - this.end.y) ** 2) ** 0.5
    let len = Math.max(0, dist - this.speed)

    for (let i = this.nodes.length - 1; i >= 0; i--) {
      const node = this.nodes[i]
      const ang = Math.atan2(node.y - y, node.x - x)

      node.x = x + len * Math.cos(ang)
      node.y = y + len * Math.sin(ang)
      x = node.x
      y = node.y
      len = node.size
    }
    for (let i = 0; i < this.nodes.length; i++) {
      const node = this.nodes[i]

      node.absAngle = Math.atan2(node.y - node.parent.y, node.x - node.parent.x)
      node.relAngle = node.absAngle - node.parent.absAngle

      for (let ii = 0; ii < node.children.length; ii++) {
        const childNode = node.children[ii]

        if (!this.nodes.includes(childNode)) {
          childNode.updateRelative(true, false)
        }
      }
    }
  }

  update() {
    this.moveTo(this.position.x, this.position.y)
  }
}

class LegSystem extends LimbSystem {
  constructor(end, length, speed, crawler) {
    super(end, length, speed, crawler)
    this.goalX = end.x
    this.goalY = end.y
    // 0 stand still, 1 move forward,2 move towards foothold
    this.step = 0
    this.forwardness = 0

    // For foot goal placement
    this.reach =
      0.9 *
      ((this.end.x - this.hip.x) ** 2 + (this.end.y - this.hip.y) ** 2) ** 0.5
    let relAngle =
      this.crawler.absAngle -
      Math.atan2(this.end.y - this.hip.y, this.end.x - this.hip.x)
    relAngle -= 2 * Math.PI * Math.floor(relAngle / 2 / Math.PI + 1 / 2)
    this.swing = -relAngle + ((2 * (relAngle < 0) - 1) * Math.PI) / 2
    this.swingOffset = this.crawler.absAngle - this.hip.absAngle
  }

  update() {
    this.moveTo(this.goalX, this.goalY)
    if (this.step == 0) {
      const dist =
        ((this.end.x - this.goalX) ** 2 + (this.end.y - this.goalY) ** 2) ** 0.5

      if (dist > 1) {
        this.step = 1
        this.goalX =
          this.hip.x +
          this.reach *
            Math.cos(this.swing + this.hip.absAngle + this.swingOffset) +
          ((2 * Math.random() - 1) * this.reach) / 2
        this.goalY =
          this.hip.y +
          this.reach *
            Math.sin(this.swing + this.hip.absAngle + this.swingOffset) +
          ((2 * Math.random() - 1) * this.reach) / 2
      }
    } else if (this.step == 1) {
      const theta =
        Math.atan2(this.end.y - this.hip.y, this.end.x - this.hip.x) -
        this.hip.absAngle
      const dist =
        ((this.end.x - this.hip.x) ** 2 + (this.end.y - this.hip.y) ** 2) ** 0.5
      const forwardness2 = dist * Math.cos(theta)
      const dF = this.forwardness - forwardness2

      this.forwardness = forwardness2

      if (dF * dF < 1) {
        this.step = 0
        this.goalX = this.hip.x + (this.end.x - this.hip.x)
        this.goalY = this.hip.y + (this.end.y - this.hip.y)
      }
    }
  }
}

class Crawler {
  constructor(
    x,
    y,
    angle,
    fAccel,
    fFric,
    fRes,
    fThresh,
    rAccel,
    rFric,
    rRes,
    rThresh
  ) {
    this.x = x // Starting position
    this.y = y
    this.absAngle = angle // Staring angle
    this.fSpeed = 0 // Forward speed
    this.fAccel = fAccel // Force when moving forward
    this.fFric = fFric // Friction against forward motion
    this.fRes = fRes // Resistance to motion
    this.fThresh = fThresh // minimum distance to target to keep moving forward
    this.rSpeed = 0 // Rotational speed
    this.rAccel = rAccel // Force when rotating
    this.rFric = rFric // Friction against rotation
    this.rRes = rRes // Resistance to rotation
    this.rThresh = rThresh // Maximum angle difference before rotation
    this.children = []
    this.systems = []
  }

  follow(x, y) {
    const dist = ((this.x - x) ** 2 + (this.y - y) ** 2) ** 0.5
    const angle = Math.atan2(y - this.y, x - this.x)
    // Update forward
    let accel = this.fAccel

    if (this.systems.length > 0) {
      let sum = 0

      for (let i = 0; i < this.systems.length; i++) {
        sum += this.systems[i].step == 0
      }
      accel *= sum / this.systems.length
    }
    this.fSpeed += accel * (dist > this.fThresh)
    this.fSpeed *= 1 - this.fRes
    this.speed = Math.max(0, this.fSpeed - this.fFric)

    // Update rotation
    let dif = this.absAngle - angle
    dif -= 2 * Math.PI * Math.floor(dif / (2 * Math.PI) + 1 / 2)

    if (Math.abs(dif) > this.rThresh && dist > this.fThresh) {
      this.rSpeed -= this.rAccel * (2 * (dif > 0) - 1)
    }

    this.rSpeed *= 1 - this.rRes

    if (Math.abs(this.rSpeed) > this.rFric) {
      this.rSpeed -= this.rFric * Math.sign(this.rSpeed)
    } else {
      this.rSpeed = 0
    }

    // Update position
    const angleChange = this.rSpeed
    this.absAngle = (this.absAngle + angleChange) % (2 * Math.PI)
    this.x += this.speed * Math.cos(this.absAngle)
    this.y += this.speed * Math.sin(this.absAngle)
    this.absAngle += Math.PI

    for (let i = 0; i < this.children.length; i++) {
      this.children[i].follow(true, true)
    }

    for (let i = 0; i < this.systems.length; i++) {
      this.systems[i].update(x, y)
    }
    this.absAngle -= Math.PI
  }
}

export function useCrawler(canvas) {
  return { crawler: new Animation(canvas) }
}
