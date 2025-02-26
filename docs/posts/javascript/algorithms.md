---
author: Io_oTI
date: 2025-02-08
publish: false
tag: 'javascript'
title: '算法'
---

# {{ $frontmatter.title }}

## 检索

### 二分查找

```javascript
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

```javascript
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

```javascript
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
  var middle = Math.floor(arr.length / 2)
  var left = arr.slice(0, middle)
  var right = arr.slice(middle)
  return merge(mergeSort(left), mergeSort(right))
}

console.log(mergeSort([3, 2, 4, 5, 1, 6])) // [1, 2, 3, 4, 5, 6]
```

### 插入排序

```javascript
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

```javascript
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

```javascript
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

```javascript
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

## 动态编程
