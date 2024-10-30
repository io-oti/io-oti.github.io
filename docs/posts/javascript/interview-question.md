---
author: Io_oTI
date: 2024-07-12
draft: true
tag: 'javascript'
title: '前端面试手写题'
---

# 前端面试手写题

整理前端面试常见的手写题，面试出现概率极高，建议每个都过自己过一遍。

你也可以提交 PR，提供你面试遇到的题目。

代码汇总请参照 [summary.md](./summary.md) 。

| **高频** | **中频** | **低频** |
| :------: | :------: | :------: |
|   ★★★    |    ★★    |    ★     |

## JavaScript 原理实现

- [ ] [实现 bind()](../../playground/javascript/basic/bind.js) ★★
- [ ] [实现 apply()](../../playground/javascript/basic/apply.js) ★★
- [ ] [实现 call()](../../playground/javascript/basic/call.js) ★★
- [ ] [实现 instanceof](../../playground/javascript/basic/instanceof.js) ★
- [ ] [实现 new](../../playground/javascript/basic/new.js) ★
- [ ] [实现 Promise](../../playground/javascript/basic/promise.js) ★★★
- [ ] [实现 Promise.all()](../../playground/javascript/basic/promiseAll.js) ★★★
- [ ] [实现 Promise.race()](../../playground/javascript/basic/promiseRace.js) ★
- [ ] [实现 Proxy](../../playground/javascript/basic/proxy.js) ★★
- [ ] [实现 EventEmitter 订阅监听模式](../../playground/javascript/basic/subscribe.js) ★★
- [ ] [setTimout 实现 setInterval](../../playground/javascript/basic/interval.js) ★
- [ ] [深拷贝](../../playground/javascript/basic/deepclone.js) ★★★

## 布尔

## 数值

- [ ] [计算圆周率](../../playground/javascript/basic/number/pi.js) ★

## 字符串

- [ ] [去除字符串首尾空格](../../playground/javascript/basic/string/trim.js) ★
- [ ] [下划线驼峰互转](../../playground/javascript/basic/string/camel.js) ★

## 对象

### 数组

- [ ] [数组扁平化](../../playground/javascript/basic/object/array/flatten.js) ★★★
- [ ] [数组去重](../../playground/javascript/basic/object/array/unique.js) ★★★
- [ ] [数组转对象](../../playground/javascript/basic/object/array/array2Object.js) ★

### 函数

- [ ] [函数防抖](../../playground/javascript/basic/object/function/debounce.js) ★★★
- [ ] [函数节流](../../playground/javascript/basic/object/function/throttle.js) ★★★
- [ ] [函数柯里化（实现 `sum(1,2)(3)()`）](../../playground/javascript/basic/object/function/curry.js) ★★★
- [ ] [compose 函数](../../playground/javascript/basic/object/function/compose.js) ★★
- [ ] [before 函数](../../playground/javascript/basic/object/function/before.js) ★

## 算法

算法需要掌握基本的数据结构，例如栈、队列、链表、树、排序算法等等，建议去 [LeetCode](https://leetcode-cn.com/) 上刷题。不过不要为了刷题而刷题，最重要的是归纳与总结，**刷十道不如一道刷十遍。**

- [ ] [归并排序](../../playground/javascript/basic/mergeSort.js) ★★
- [ ] [插入排序](../../playground/javascript/basic/insertionSort.js) ★
- [ ] [快速排序](../../playground/javascript/basic/quickSort.js) ★★★
- [ ] [选择排序](../../playground/javascript/basic/selectionSort.js) ★
- [ ] [希尔排序](../../playground/javascript/basic/shellSort.js) ★
- [ ] [堆排序](../../playground/javascript/basic/heapSort.js) ★
- [ ] [二分查找](../../playground/javascript/basic/binarySearch.js) ★
- [ ] [最长递增子序列](../../playground/javascript/basic/lis.js) ★★★
- [ ] [最长公共子串](../../playground/javascript/basic/longestCommonPrefix.js) ★★
- [ ] [城市数据找父节点](../../playground/javascript/basic/city.js) ★
- [ ] [查找缺失的数](../../playground/javascript/basic/missingNumber.js) ★

### leet code

分享一下自己整理的 LeetCode 上必刷的题，比较具有代表性。

- [ ] LeetCode 001 Two Sum
- [ ] LeetCode 015 3Sum(可能会问 LeetCode18.4Sum 思路)
- [ ] LeetCode 020 Valid Parentheses
- [ ] LeetCode 021 Merge Two Sorted Lists
- [ ] LeetCode 025 Reverse Nodes in k-group
- [ ] LeetCode 053 Maximum Subarra
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
