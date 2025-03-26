---
author: Io_oTI
date: 2024-07-12
publish: true
tag: 'nodejs'
title: 'SheetJS'
---

适用于 web 浏览器和服务器读取、编辑和导出电子表格。

## 安装

```bash
npm install xlsx
```

## 使用

```javascript
import * as XLSX from 'xlsx/xlsx.mjs'

const reader = new FileReader()

reader.readAsDataURL(file.raw)
reader.onload = () => {
  const data = reader.result
  const workbook = XLSX.read(data, {
    type: 'binary',
  })
  const wsname = workbook.SheetNames[0] // 取第一张表
  const ws = XLSX.utils.sheet_to_json(workbook.Sheets[wsname])

  console.log('表格数据', workbook, workbook.SheetNames[0], ws)
}
```

## 参考

- [sheetjs.com](https://sheetjs.com/)
- [sheetjs - github](https://github.com/SheetJS/sheetjs)
- [xlsx - npmjs](https://www.npmjs.com/package/xlsx)
