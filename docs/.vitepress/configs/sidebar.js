import { readFileSync, readdirSync, statSync } from 'fs'
import { basename, extname } from 'path'

const BASE_PATH = './docs'
const EXT_NAME = '.md'

// 判断是否是文件夹
const isDirectory = (path) => statSync(path).isDirectory()

// 读取文件夹
const readDirectory = (path) => {
  const items = readdirSync(path)

  return resetIndex(items)
}

// 重置 index.md 位置
const resetIndex = (items) => {
  return items.reduce((res, item, idx) => {
    return item === 'index.md' ? [...res.splice(idx, 1), ...res] : res
  }, items)
}

// 首字母转大写
const firstToUpperCase = (str) => {
  return typeof str === 'string'
    ? str.replace(/^(\w{1})/, (s) => s.toUpperCase())
    : ''
}

// 判断是否是 markdown 文件
const isMarkdown = (filename) => extname(filename) === EXT_NAME

// 读取文件
const readFile = (path) => readFileSync(path, { encoding: 'utf-8' })

// 获取标题
const getTitle = (path) => {
  const content = readFile(path);
  const titles = content.match(/[#](.*)/g);

  return titles !== null ? titles[0].replace(/\#+/g, "") : ''
}

// 递归文件夹中读取文件
const recursionDir = (path) => {
  const prevPath = `${BASE_PATH}/${path}`
  const items = readDirectory(prevPath)

  return items.reduce((res, item) => {
    if (isDirectory(`${prevPath}/${item}`)) {
      res.push({
        text: firstToUpperCase(basename(item, EXT_NAME)),
        items: recursionDir(`${path}/${item}`),
      })
    }

    if (isMarkdown(item)) {
      res.push({
        text: getTitle(`${prevPath}/${item}`),
        link: `${path}/${item}`
      })
    }

    return res
  }, [])
}

export function genSidebar (...paths) {
  return paths.reduce((res, path) => {
    res[`/${path}/`] = { items: recursionDir(path) }

    return res
  }, {})
}