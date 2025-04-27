---
author: Io_oTI
date: 2025-04-24
publish: false
tag: 'javascript'
title: 'Functional Programming'
---

## 基本概念

### 高阶函数（Higher-order Function）

以函数为参数或/和返回值的函数。

```js
const filter = (predicate, xs) => xs.filter(predicate)
const is = (type) => (x) => Object(x) instanceof type

console.log(filter(is(Number), [0, '1', 2, null])) // [0, 2]
```

### 闭包（Closure）

闭包是一个作用域，它会捕获函数的局部变量，因此即使执行过程已经移出了定义它的那个代码块，也可以访问它们。也就是说，它们允许在声明变量的代码块已经执行完成之后，还是可以引用这个作用域。

```js
const addTo = x => y => x + y
const addToFive = addTo(5)

console.log(addToFive(3)) // 8
```

### 偏函数（Partial Function）

"部分地"应用一个函数，即预设原始函数的部分参数来创建一个新的函数。

```js
const add = (x, y) =>  x + y
const addFive = add.bind(null, 5)

console.log(addFive(3)) // 8
```

### 柯里化（Currying）

将一个多元函数转变为一元函数的过程。 每当函数被调用时，它仅仅接收一个参数并且返回带有一个参数的函数，直到传递完所有的参数。

```js
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b

curriedSum(3)(4)         // 7

const add2 = curriedSum(2)

add2(10)     // 12
```

### 组合（Compose）

把两个函数放在一起形成第三个函数的行为，一个函数的输入是另一个函数的输出。

```js
const compose = (f, g) => (a) => f(g(a))    // 定义
const floorAndToString = compose((val) => val.toString(), Math.floor) // 使用

floorAndToString(12.12)   // '12'
```

## Reference

- [函数式编程指南](https://github.com/llh911001/mostly-adequate-guide-chinese)
- [函数式编程术语](https://github.com/shfshanyue/fp-jargon-zh?tab=readme-ov-file)
