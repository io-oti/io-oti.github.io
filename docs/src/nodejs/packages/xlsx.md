# XLSX


[主页](https://sheetjs.com/)


## 安装


```bash
npm i xlsx
```


## 食用


```javascript
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
