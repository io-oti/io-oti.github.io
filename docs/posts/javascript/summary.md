---
author: Io_oTI
date: 2024-07-12
publish: false
tag: 'javascript'
title: '实现一览'
---

## 原理

### 实现 bind()

```javascript
Function.prototype.bindNew = function (context, ...args) {
  return (...newArgs) => this.apply(context, [...args, ...newArgs])
}

// test
const test = {
  name: 'fy',
  showName: function (last: string) {
    console.log(this.name + ' is ' + last)
  },
}
test.showName('handsome') // fy is handsome
test.showName.bind({ name: 'Mr.fy' })('handsome')
test.showName.bindNew({ name: 'Mr.fy' })('handsome')
```

### 实现 apply()

```javascript
Function.prototype.myApply = function (context, args) {
  context.fn = this
  let res
  if (!args) {
    res = context.fn()
  } else {
    res = context.fn(...args)
  }
  return res
}

// test
let obj = {
  name: 'jack',
}
function test(arg1, arg2, arg3) {
  console.log(this.name) // jack
  console.log(arg1, arg2, arg3) // 1 2 3
}
test.myApply(obj, [1, 2, 3])
```

### 实现 call()

```javascript
Function.prototype.myCall = function (context, ...rest) {
  context.fn = this
  var result = context.fn(...rest)
  delete context.fn
  return result
}

// test
let obj = {
  name: 'jack',
}
function test(arg1, arg2, arg3) {
  console.log(this.name) // jack
  console.log(arg1, arg2, arg3) // 1 2 3
}
test.myCall(obj, 1, 2, 3)
```

### 实现 instanceof

```javascript
function myInstanceOf(left, right) {
  let prototype = right.prototype
  left = left.__proto__
  while (true) {
    if (!left) return false
    if (left == prototype) return true
    left = left.__proto__
  }
}

console.log(myInstanceOf([], Array)) // true
```

### 实现 new

```javascript
function myNew(fun, ...args) {
  let obj = {}
  obj.__proto__ = fun.prototype
  let res = fun.apply(obj, args)
  return res instanceof Object ? res : obj
}

function Animal(name) {
  this.name = name
}
let animal = myNew(Animal, 'dog')
console.log(animal.name) // dog
```

### 实现 jsonp

```javascript
var newscript = document.createElement('script')
newscript.src = 'https://www.adb.com?callback=fn'
document.body.appendChild(newscript)
function fn(data) {
  console.log(data)
}
```

### 实现 Promise

```javascript
const PENDING = Symbol()
const REJECTED = Symbol()
const FULLFILLED = Symbol()

const MyPromise = function (fn) {
  this.state = PENDING
  this.value = ''

  const resolve = (value) => {
    this.state = FULLFILLED
    this.value = value
  }

  const reject = (error) => {
    this.state = REJECTED
    this.value = error
  }

  this.then = (onFullFill, onReject) => {
    if (this.state == FULLFILLED) {
      onFullFill(this.value)
    } else {
      onReject(this.value)
    }
  }

  try {
    fn(resolve, reject)
  } catch (error) {
    reject(error)
  }
}

// test
let p = new MyPromise((resolve, reject) => {
  resolve('hello')
})
p.then((res) => {
  console.log(res) // hello
})
```

### 实现 Promise.all()

```javascript
function isPromise(obj) {
  return (
    !!obj &&
    (typeof obj === 'function' || typeof obj === 'object') &&
    typeof obj.then == 'function'
  )
}

function myPromiseAll(arr) {
  let res = []
  return new Promise((resolve, reject) => {
    for (let i = 0; i < arr.length; i++) {
      if (isPromise(arr[i])) {
        arr[i]
          .then((data) => {
            res[i] = data
            if (res.length === arr.length) {
              resolve(res)
            }
          })
          .catch((error) => {
            reject(error)
          })
      } else {
        res[i] = arr[i]
      }
    }
  })
}
```

### 实现 Promise.race()

```javascript
function myPromiseRace(arr) {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < arr.length; i++) {
      return arr[i].then(resolve, reject)
    }
  })
}
```

### 实现 EventEmitter 订阅监听模式

```javascript
class EventEmitter {
  constructor() {
    this.events = {}
  }
  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [callback]
    } else {
      this.events[eventName].push(callback)
    }
  }

  emit(eventName, ...args) {
    this.events[eventName].forEach((fn) => fn.apply(this, args))
  }

  once(eventName, callback) {
    const fn = () => {
      callback()
      this.remove(eventName, fn)
    }
    this.on(eventName, fn)
  }

  remove(eventName, callback) {
    this.events[eventName] = this.events[eventName].filter(
      (fn) => fn != callback
    )
  }
}
```

### setTimout 实现 setInterval

```javascript
function myInterval(fn, time) {
  let context = this
  setTimeout(() => {
    fn.call(context)
    myInterval(fn, time)
  }, time)
}
```

### 深拷贝

```javascript
function deepClone(obj) {
  // 先判断是对象还是数组
  let copy = obj instanceof Array ? [] : {}
  for (let key in obj) {
    // 判断是否是对象上的属性，而不是原型上的属性
    if (obj.hasOwnProperty(key)) {
      // obj[key] 是否是对象，如果是对象，递归遍历
      copy[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key]
    }
  }
  return copy
}

// test
console.log(deepClone({ name: 'jack', birth: { year: '1997', month: '10' } })) // {name: 'jack', birth: {…}}
```

## 函数

### 函数防抖

·

```javascript
function debounce(fn, wait) {
  let timeout = null
  return function () {
    let context = this
    let args = arguments
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => {
      fn.apply(context, args)
    }, wait)
  }
}
```

### 函数节流

```javascript
function throttle(fn, wait) {
  let pre = new Date()
  return function () {
    let context = this
    let args = arguments
    let now = new Date()
    if (now - pre >= wait) {
      fn.apply(context, args)
      pre = now
    }
  }
}
```

### 函数柯里化（实现 sum(1,2)(3)()）

```javascript
function sum(...args1) {
  let x = args1.reduce((prev, next) => {
    return prev + next
  })
  return function (...args2) {
    if (args2.length == 0) return x
    let y = args2.reduce((prev, next) => {
      return prev + next
    })
    return sum(x + y)
  }
}

console.log(sum(1, 2, 2, 5)(7)()) // 17
```

### compose 函数

```javascript
/**
 * 接收若干个函数作为参数，每个函数执行后的输出作为下一个函数的输入。
 * 执行方向是自右向左的，初始函数的参数在最右边。
 * @param  {...any} fns
 * @returns
 */
function compose(...fns) {
  return function (x) {
    return fns.reverse().reduce((arg, fn) => {
      return fn(arg)
    }, x)
  }
}

const add = (x) => x + 1
const multiply = (x) => x * 2
const minus = (x) => x - 1

console.log(compose(minus, multiply, add)(1)) // 3
```

### before 函数

```javascript
/**
 * 传入任意一个函数，只能调用指定的次数
 * @param {*} count 调用次数
 * @param {*} func 传入函数
 * @returns
 */
function before(count, func) {
  var temp = count
  return function () {
    if (temp > 0) {
      temp--
      const args = [...arguments]
      func.apply(this, args)
    }
  }
}

const log = (a) => console.log(a)

const log3 = before(3, log)

log3(2)
log3(1)
log3(3)
```

## 数组

### 数组扁平化

```javascript
var flatten = function (arr) {
  let res = []
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      res = res.concat(flatten(arr[i]))
    } else {
      res.push(arr[i])
    }
  }
  return res
}

console.log(flatten([1, [1, 2, [2, 4]], 3, 5])) // [1, 1, 2, 2, 4, 3, 5]
```

### 数组去重

```javascript
/**
 * 数组去重
 *
 * @param {(number | string)[]} array
 * @returns {(number | string)[]}
 */
function unique(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] === array[i]) {
        array.splice(j, 1)
        j--
      }
    }
  }
  return array
}
```

### 数组转对象

```javascript
const data = [
  {
    id: 1,
    parent: 2,
  },
  {
    id: 2,
    parent: null,
  },
  {
    id: 3,
    parent: 2,
  },
  {
    id: 4,
    parent: 1,
  },
  {
    id: 5,
    parent: 2,
  },
  {
    id: 6,
    parent: 4,
  },
  {
    id: 7,
    parent: 3,
  },
  {
    id: 8,
    parent: 3,
  },
]

/**
 * 将上面的数组转换为对象
 * @param {*} arr
 * @returns Object
 */
const array2Object = (arr) => {
  const findParent = (node) => {
    const [parent] = arr.filter((item) => item.id === node.parent)
    return parent
  }
  const [root] = arr.filter((item) => item.parent == null)
  const childNodes = arr.filter((item) => item.parent != null)
  for (let item of childNodes) {
    const parent = findParent(item)
    if (!parent.children) {
      parent.children = [item]
    } else {
      parent.children.push(item)
    }
  }
  return root
}

/**
 * 用 Map 优化事件复杂度
 * @param {*} arr
 */
const array2Object2 = (arr) => {
  const map = arr.reduce(
    (prev, next) => Object.assign(prev, { [next.id]: next }),
    {}
  )
  const [root] = arr.filter((item) => item.parent == null)
  const childNodes = arr.filter((item) => item.parent != null)

  for (let item of childNodes) {
    const parent = map[item.parent]
    if (!parent.children) {
      parent.children = [item]
    } else {
      parent.children.push(item)
    }
  }
  return root
}

console.log(array2Object2(data))
```

### 去除字符串首尾空格

```javascript
//正则表达式
function myTrim1(str) {
  return str.replace(/^\s+|\s+$/g, '')
}

//不使用正则表达式
function myTrim2(str) {
  let head = 0
  foot = str.length
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') head++
    else break
  }
  for (let j = str.length - 1; j > 0; j--) {
    if (str[j] === ' ') foot--
    else break
  }
  return str.substr(head, foot - head)
}
```

### 最长递增子序列

```javascript
function lis(array) {
  if (array.length === 0) return 0
  const arr = new Array(array.length).fill(1)
  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
      if (array[i] > array[j]) {
        arr[i] = Math.max(arr[i], arr[j] + 1)
      }
    }
  }
  let result = 1
  for (let i = 0; i < arr.length; i++) {
    result = Math.max(result, arr[i])
  }
  return result
}
```
