---
author: Io_oTI
date: 2023-09-27
tag: 'vue'
title: 'Vue 2 渲染函数用法'
---

# Vue 2 渲染函数用法

将 h 作为 createElement 的别名是 Vue 生态系统中的一个通用惯例，实际上也是 JSX 所要求的。从 Vue 的 Babel 插件的 3.4.0 版本开始，在以 ES2015 语法声明的含有 JSX 的任何方法和 getter 中 (不是函数或箭头函数中) 自动注入 const h = this.$createElement，这样你就可以去掉 (h) 参数了。对于更早版本的插件，如果 h 在当前作用域中不可用，应用会抛错。

## 语法

`createElement(tagName, property, children)`

## 参数

### tagName

Type: `{ String | Object | Function }`

一个 HTML 标签名、组件选项对象，或者 resolve 了上述任何一种的一个 async 函数。必填项。

### property

Type: `{ Object }`

一个与模板中 attribute 对应的数据对象。可选。

```javascript
{
  // 与 `v-bind:class` 的 API 相同，
  // 接受一个字符串、对象或字符串和对象组成的数组
  'class': {
    foo: true,
    bar: false
  },
  // 与 `v-bind:style` 的 API 相同，
  // 接受一个字符串、对象，或对象组成的数组
  style: {
    color: 'red',
    fontSize: '14px'
  },
  // 普通的 HTML attribute
  attrs: {
    id: 'foo'
  },
  // 组件 prop
  props: {
    myProp: 'bar'
  },
  // DOM property
  domProps: {
    innerHTML: 'baz'
  },
  // 事件监听器在 `on` 内，
  // 但不再支持如 `v-on:keyup.enter` 这样的修饰器。
  // 需要在处理函数中手动检查 keyCode。
  on: {
    click: this.clickHandler
  },
  // 仅用于组件，用于监听原生事件，而不是组件内部使用
  // `vm.$emit` 触发的事件。
  nativeOn: {
    click: this.nativeClickHandler
  },
  // 自定义指令。注意，你无法对 `binding` 中的 `oldValue`
  // 赋值，因为 Vue 已经自动为你进行了同步。
  directives: [
    {
      name: 'my-custom-directive',
      value: '2',
      expression: '1 + 1',
      arg: 'foo',
      modifiers: {
        bar: true
      }
    }
  ],
  // 作用域插槽的格式为
  // { name: props => VNode | Array<VNode> }
  scopedSlots: {
    default: props => createElement('span', props.text)
  },
  // 如果组件是其它组件的子组件，需为插槽指定名称
  slot: 'name-of-slot',
  // 其它特殊顶层 property
  key: 'myKey',
  ref: 'myRef',
  // 如果你在渲染函数中给多个元素都应用了相同的 ref 名，
  // 那么 `$refs.myRef` 会变成一个数组。
  refInFor: true
}
```

### children

Type: `{ String | Array }`

子级虚拟节点 (VNodes)，由 `createElement()` 构建而成，也可以使用字符串来生成“文本虚拟节点”。可选。

## 示例

### 内容 - Content

```javascript{8-10}
export default {
  data () {
    return {
      text: 'hello thmas'
    };
  },

  render (h) {
    return h('div', {}, this.text);
  }
};
```

### 属性 - Attrs/Props

`vm.$attrs` 包含了父作用域中不作为 prop 被识别 (且获取) 的 attribute 绑定 (class 和 style 除外)。

`vm.$props` 当前组件接收到的 props 对象。Vue 实例代理了对其 props 对象 property 的访问。

:::code-group

```javascript{21-23} [Parent.vue]
import Children from './Children.vue'

export default {
  name: 'Parent',

  components: {
    Children
  },

  props: {
    ...Children.props
  }

  data () {
    return {
      text: 'holle',
      name: 'thmas'
    }
  }

  render(h) {
    return h('children', { text: this.text, props: { name: this.name } });
  }
}
```

```javascript{9-11} [Children.vue]
export default {
 name: 'Children',

 props: {
    name: String,
    default: 'world'
  }

  render (h) {
    return h('div', {}, `${this.$attrs.text} ${this.name}`);
  }
};
```

:::

#### DomProps

```javascript{9-14}
export default {
  data () {
    return {
      text: 'hello thmas',
      html: '<span>hello thmas</span>'
    };
  },

  render (h) {
    return h('div', {}, [
      h('div', { domProps: { innerText: this.text } }),
      h('div', { domProps: { innerHTML: this.html } })
    ]);
  }
};
```

### 事件 - On

`vm.$listeners` 包含了父作用域中的 (不含 `.native` 修饰器的) `v-on` 事件监听器。

```javascript{14-16}
export default {
 data () {
    return {
      count: 0
    };
  },

  methods: {
    handleCount () {
      this.count++;
    }
  },

  render (h) {
    return h('div', { on: { click: this.handleCount, ...this.$listeners }}, this.count);
  }
};
```

### 插槽 - Slots

`vm.$slots` 用来访问被[插槽分发](https://cn.vuejs.org/v2/guide/components.html#通过插槽分发内容)的内容。每个[具名插槽](https://cn.vuejs.org/v2/guide/components-slots.html#具名插槽)有其相应的 property (例如：`v-slot:foo` 中的内容将会在 `vm.$slots.foo` 中被找到)。`default` property 包括了所有没有被包含在具名插槽中的节点，或 `v-slot:default` 的内容。

`vm.$scopedSlots` 用来访问[作用域插槽](https://cn.vuejs.org/v2/guide/components-slots.html#作用域插槽)。对于包括 `默认 slot` 在内的每一个插槽，该对象都包含一个返回相应 VNode 的函数。

:::code-group

```javascript{17-24} [Children.vue]
import Children from './Children.vue'

export default {
  name: 'Parent',

  components: {
    Children
  },

  data () {
    return {
      text: 'hi',
      name: 'thmas'
    }
  },

  render (h) {
    const scopedSlots = {
      default: h('span', {}, this.text),
      suffix: h('span', {}, this.name)
    }

    return h('children', { scopedSlots })
  }
}
```

```javascript{4-12} [Children.vue]
export default {
  name: 'Children',

  render (h) {
    return h('div', {}, [
      this.$scopedSlots.default(),
      this.$scopedSlots.suffix()
      // or
      this.$slots.default,
      this.$slots.suffix
    ]);
  }
};
```

:::

### 指令 - Directives

```javascript{8-14}
export default {
 data () {
    return {
      permissionCode: '0'
    };
  },

  render () {
    const directives = [
      { name: 'permission', value: this.permissionCode }
    ]

    return h('div', { directives });
  }
};
```

#### v-model

```javascript{14-21}
export default {
  data () {
    return {
     value: 'hello'
    };
  },

  methods: {
    handleInput (e) {
      this.value = e.target.value;
    }
  },

  render (h) {
    return h('div', [
      h('input', {
        attrs: { value: this.value },
        on: { input: this.handleInput }
      })
    ]);
  }
};
```
