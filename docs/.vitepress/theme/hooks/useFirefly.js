const defaultOption = {
  count: 25,
  color: 'rgba(236, 196, 94, 1)',
  speed: 1,
  radius: 2,
}

class Animation {
  constructor(canvas) {
    this.canvas = canvas
    this.context = this.canvas.getContext('2d')
    this.fireflies = []
    this.running = false
    this.requestID = undefined
  }

  start(option) {
    const mergeOption = { ...defaultOption, ...option }

    this.fireflies = Array.from(
      { length: mergeOption.count },
      () => new Firefly(mergeOption)
    )
    this.running = true
    this.draw()
  }

  stop() {
    window.cancelAnimationFrame(this.requestID)
    this.running = false
    this.fireflies = []
    this.context.clearRect(0, 0, window.innerWidth, window.innerHeight)
  }

  draw() {
    if (!this.running) return

    this.context.clearRect(0, 0, window.innerWidth, window.innerHeight)

    for (let i = 0; i < this.fireflies.length; i++) {
      const firefly = this.fireflies[i]

      firefly.fly()
      firefly.flicker()

      this.context.beginPath()
      this.context.arc(firefly.x, firefly.y, firefly.radius, 0, Math.PI * 2)
      this.context.closePath()
      this.context.fillStyle = firefly.color
      this.context.shadowBlur = firefly.radius * 5
      this.context.shadowColor = 'yellow'
      this.context.fill()
    }

    this.requestID = window.requestAnimationFrame(this.draw.bind(this))
  }
}

class Firefly {
  constructor(option) {
    this.x = random(window.innerWidth, option.radius, true)
    this.y = random(window.innerHeight, option.radius, true)
    this.radius = random(option.radius + 0.5, option.radius - 0.5)
    this.veer = false
    this.angle = random(360, 0, true)
    this.rate = random(30 / 1000, 6 / 1000)
    this.speed = random(option.speed, option.speed / 8)
    this.opacity = random(1, 0.001)
    this.flare = this.opacity > 0.5
    this.color = option.color
  }

  fly() {
    if (this.angle >= 360 || this.angle <= 0 || Math.random() * 360 < 6) {
      this.veer = !this.veer
    }

    // this.speed -= this.veer ? -.01 : .01;
    this.angle -= this.veer ? -this.speed : this.speed
    this.x += Math.sin((Math.PI / 180) * this.angle) * this.speed
    this.y += Math.cos((Math.PI / 180) * this.angle) * this.speed

    if (this.x < 0) this.x += window.innerWidth
    if (this.x > window.innerWidth) this.x -= window.innerWidth
    if (this.y < 0) this.y += window.innerHeight
    if (this.y > window.innerHeight) this.y -= window.innerHeight
  }

  flicker() {
    if (this.opacity >= 1 || this.opacity <= 0.001) {
      this.flare = !this.flare
    }

    this.opacity -= this.flare ? -this.rate : this.rate
    this.color = setOpacity(this.color, this.opacity.toFixed(3))
  }
}

function random(max, min, isInt) {
  return isInt
    ? Math.floor(Math.random() * (max - min) + min)
    : Number((Math.random() * (max - min) + min).toFixed(3))
}

function setOpacity(color, opacity) {
  const colors = color.match(/^rgba\((\d+),\s*(\d+),\s*(\d+),\s*(\S+)\)$/)

  return `rgba(${colors[1]}, ${colors[2]}, ${colors[3]}, ${opacity})`
}

export function useFirefly(canvas) {
  return { firefly: new Animation(canvas) }
}
