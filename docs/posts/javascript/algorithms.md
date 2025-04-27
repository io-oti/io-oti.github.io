---
author: Io_oTI
date: 2025-02-08
publish: false
tag: 'javascript'
title: '算法'
---

## 检索

### 二分查找

```js
function binarySearch(array, target) {
  let low = 0
  let height = array.length - 1

  while (low <= height) {
    const middle = Math.floor((low + height) / 2)
    if (target === array[middle]) return middle
    else if (target > array[middle]) low = middle + 1
    else height = middle - 1
  }

  return -1
}
```

## 排序

### 快速排序

```js
function quicksort(arr) {
  if (arr.length <= 1) return arr

  let pivotIndex = arr.length >> 1
  let pivot = arr.splice(pivotIndex, 1)[0]
  let left = []
  let right = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }

  return quicksort(left).concat(pivot, quicksort(right))
}

console.log(quicksort([4, 3, 5, 2, 1, 6])) //  [1, 2, 3, 4, 5, 6]
```

### 归并排序

```js
function merge(left, right) {
  let res = []

  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      res.push(left.shift())
    } else {
      res.push(right.shift())
    }
  }

  return res.concat(left).concat(right)
}

function mergeSort(arr) {
  if (arr.length == 1) return arr

  const middle = Math.floor(arr.length / 2)
  const left = arr.slice(0, middle)
  const right = arr.slice(middle)

  return merge(mergeSort(left), mergeSort(right))
}

console.log(mergeSort([3, 2, 4, 5, 1, 6])) // [1, 2, 3, 4, 5, 6]
```

### 插入排序

```js
function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let j = i - 1
    const temp = array[i]

    while (j >= 0 && array[j] > temp) {
      array[j + 1] = array[j]
      j--
    }

    array[j + 1] = temp
  }

  return array
}
```

### 选择排序

```js
function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let minIndex = i

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j
      }
    }

    const temp = array[i]

    array[i] = array[minIndex]
    array[minIndex] = temp
  }

  return array
}
```

### 希尔排序

```js
function shellSort(array) {
  const len = array.length
  let gap = Math.floor(len / 2)

  for (gap; gap > 0; gap = Math.floor(gap / 2)) {
    for (let i = gap; i < len; i++) {
      let j = i - gap
      const temp = array[i]
      while (j >= 0 && array[j] > temp) {
        array[j + gap] = array[j]
        j -= gap
      }
      array[j + gap] = temp
    }
  }

  return array
}
```

### 堆排序

```js
function heapSort(array) {
  for (let i = Math.floor(array.length / 2 - 1); i >= 0; i--) {
    adjustHeap(array, i, array.length)
  }

  for (let j = array.length - 1; j > 0; j--) {
    const temp = array[0]

    array[0] = array[j]
    array[j] = temp
    adjustHeap(array, 0, j)
  }

  return array
}

function adjustHeap(array, i, length) {
  for (let j = 2 * i + 1; j < length; j = 2 * j + 1) {
    const temp = array[i]

    if (j + 1 < length && array[j] < array[j + 1]) {
      j++
    }

    if (temp < array[j]) {
      array[i] = array[j]
      array[j] = temp
      i = j
    } else break
  }
}
```

## 动态规划

## LeetCode

LeetCode 上具有代表性的题:

- [ ] LeetCode 001 Two Sum
- [ ] LeetCode 015 3Sum(可能会问 LeetCode18.4Sum 思路)
- [ ] LeetCode 020 Valid Parentheses
- [ ] LeetCode 021 Merge Two Sorted Lists
- [ ] LeetCode 025 Reverse Nodes in k-group
- [ ] LeetCode 053 Maximum Subarray
- [ ] LeetCode 066 Plus One(等介于:高精度加加法)
- [ ] LeetCode 098 Validate Binary Search Tree
- [ ] LeetCode 110 Balanced Binary Tree
- [ ] LeetCode 134 Gas Station
- [ ] LeetCode 136 Single Number
- [ ] LeetCode 137 Single Number II
- [ ] LeetCode 146 LRU Cache(变形题:带有过期时间的 LRU 缓存)（Map + 链表）
- [ ] LeetCode 206 Reverse Linked List（递归、迭代）
- [ ] LeetCode 215 Kth Largest Element in an Array(等价于:快速排序)
- [ ] LeetCode 232 Implement Queue using Stacks(每次将新来的元素放到栈底，stack.push())
- [ ] LeetCode 328 Odd Even Linked List
- [ ] LeetCode 415 Add Strings(等价于:大数加法)
- [ ] LeetCode 470 rand70rand100
- [ ] LeetCode 496 Next Greater Element I(时间复杂度 O(n)(单调栈，使用 Map 映射 stack 的指定位置)
- [ ] LeetCode 716 Max Stack(两个栈实现最大栈,要求 pop,push, get max 都为 0(1)
- [ ] LeetCode 860 Lemonade Change
