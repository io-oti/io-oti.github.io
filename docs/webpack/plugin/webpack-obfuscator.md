# webpack-obfuscator

JavaScript-Obfuscator 是一款功能强大的免费 JavaScript 模糊处理程序，包含多种功能，可为源代码提供保护。Webpack-Obfuscator 是 JavaScript-Obfuscator 的 webpack 插件。

npmjs: [webpack-obfuscator](https://www.npmjs.com/package/webpack-obfuscator)

repository: [webpack-obfuscator](https://github.com/javascript-obfuscator/webpack-obfuscator)

## 安装

```bash
$ npm install --save-dev javascript-obfuscator webpack-obfuscator
```

## 使用

```javascript
// 导入 webpack-obfuscator 依赖
const WebpackObfuscator = require('webpack-obfuscator')

// vue-cli configuration
module.exports = {
  configureWebpack: {
    plugins: [
      new WebpackObfuscator({
        // 压缩代码
        compact: true,
        // 是否启用控制流扁平化(降低1.5倍的运行速度)
        controlFlowFlattening: true,
        // 应用概率;在较大的代码库中，建议降低此值，因为大量的控制流转换可能会增加代码的大小并降低代码的速度。
        controlFlowFlatteningThreshold: 0.5,
        // 随机的死代码块(增加了混淆代码的大小)
        deadCodeInjection: true,
        // 死代码块的影响概率
        deadCodeInjectionThreshold: 0.1,
        // 此选项几乎不可能使用开发者工具的控制台选项卡
        debugProtection: false,
        // 如果选中，则会在“控制台”选项卡上使用间隔强制调试模式，从而更难使用“开发人员工具”的其他功能。
        debugProtectionInterval: false,
        // 通过用空函数替换它们来禁用console.log，console.info，console.error和console.warn。这使得调试器的使用更加困难。
        disableConsoleOutput: true,
        // 标识符的混淆方式 hexadecimal(十六进制) mangled(短标识符)
        identifierNamesGenerator: 'mangled',
        log: false,
        numbersToExpressions: true,
        // 混淆后的代码,不能使用代码美化,同时需要配置 cpmpat:true;
        renameGlobals: false,
        // 混淆后的代码,不能使用代码美化,同时需要配置 cpmpat:true;
        selfDefending: true,
        simplify: true,
        splitStrings: true,
        splitStringsChunkLength: 10,
        // 删除字符串文字并将它们放在一个特殊的数组中
        stringArray: true,
        stringArrayCallsTransform: true,
        stringArrayCallsTransformThreshold: 0.5,
        stringArrayEncoding: ['base64'],
        stringArrayIndexShift: true,
        stringArrayRotate: true,
        stringArrayShuffle: true,
        stringArrayWrappersCount: 2,
        stringArrayWrappersChainedCalls: true,
        stringArrayWrappersParametersMaxCount: 4,
        stringArrayWrappersType: 'function',
        stringArrayThreshold: 0.5,
        transformObjectKeys: true,
        // 允许启用/禁用字符串转换为unicode转义序列。Unicode转义序列大大增加了代码大小，并且可以轻松地将字符串恢复为原始视图。建议仅对小型源代码启用此选项。
        unicodeEscapeSequence: false,
      }),
    ],
  },
}
```
