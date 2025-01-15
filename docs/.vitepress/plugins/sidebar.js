import { readFileSync, readdirSync, statSync } from 'fs'
import { basename, extname } from 'path'
import matter from 'gray-matter'

// 插件名称常量
const PLUGIN_NAME = 'vite-plugin-vitepress-sidebar'
// 插件配置选项
let pluginOptions = {
  base: './docs',
  extname: '.md',
}

// 判断路径是否为目录
function isDirectory(path) {
  return statSync(path).isDirectory()
}

// 读取目录内容
function readDirectory(path) {
  const items = readdirSync(path)

  return resetIndex(items)
}

// 将 index.md 文件移动到数组的最前面
function resetIndex(items) {
  return items.reduce((res, item, idx) => {
    return item === 'index.md' ? [...res.splice(idx, 1), ...res] : res
  }, items)
}

// 将字符串的首字母大写，并将连字符替换为空格
function firstToUpperCase(str) {
  return typeof str === 'string'
    ? str.replace(/^(\w{1})|-/g, s => (s !== '-' ? s.toUpperCase() : ' '))
    : ''
}

// 判断文件是否为 Markdown 文件
function isMarkdown(filename) {
  return extname(filename) === pluginOptions.extname
}

// 读取文件内容
function readFile(path) {
  return readFileSync(path, 'utf-8')
}

// 递归读取目录结构并生成侧边栏数据
function recursivelyDir(path) {
  const prevPath = `${pluginOptions.base}${path}`
  const items = readDirectory(prevPath)

  return items.reduce((res, item) => {
    if (isDirectory(`${prevPath}/${item}`)) {
      const items = recursivelyDir(`${path}/${item}`)

      if (items.length > 0) {
        res.push({
          text: firstToUpperCase(basename(item, pluginOptions.extname)),
          items,
        })
      }
    }

    if (isMarkdown(item)) {
      const {
        data: { publish, title },
      } = matter(readFile(`${prevPath}/${item}`))

      if (!publish) return res

      res.push({ text: title, link: `${path}/${item}` })
    }

    return res
  }, [])
}

// 生成侧边栏数据
function genSidebar(paths) {
  return paths.reduce((res, path) => {
    res[`${path}`] = { items: recursivelyDir(path) }

    return res
  }, {})
}

// 导出插件函数
export default function (paths, options) {
  return {
    name: PLUGIN_NAME,
    enforce: 'post',
    configResolved(config) {
      const { srcDir, site } = config.vitepress

      pluginOptions = { ...pluginOptions, ...options, base: srcDir }
      site.themeConfig.sidebar = genSidebar(paths)

      return config
    },
  }
}
