---
author: Io_oTI
date: 2024-07-12
draft: false
tag: 'vue'
title: 'Vue 3 JSX 用法'
---

# Vue 3 JSX 语法

## 安装

安装插件

```bash
npm install @vue/babel-plugin-jsx -D
```

配置 Babel

```js
{
  "plugins": ["@vue/babel-plugin-jsx"]
}
```

## 示例

### 内容 - Content

函数式组件

```jsx
const App = () => <div></div>;
```

在 render 中使用

```jsx
const App = {
  render() {
    return <div>Vue 3.0</div>;
  },
};
```

```jsx
import { withModifiers, defineComponent } from 'vue';

const App = defineComponent({
  setup() {
    const count = ref(0);

    const inc = () => {
      count.value++;
    };

    return () => (
      <div onClick={withModifiers(inc, ['self'])}>{count.value}</div>
    );
  },
});
```

Fragment

```jsx
const App = () => (
  <>
    <span>I'm</span>
    <span>Fragment</span>
  </>
);
```

### 属性 - Attrs/Props

```jsx
const App = () => <input type="email" />;
```

动态绑定:

```jsx
const placeholderText = 'email';
const App = () => <input type="email" placeholder={placeholderText} />;
```

### 事件 - On

#### 鼠标事件

```jsx
const App = () => (
  <button
    onclick={() => {})}
    onMouseoverOnceCapture={() => {}}
  />
)
```

#### 键盘事件

```jsx
import { withKeys } from "vue";

const App = () => (<input onKeyup={withKeys(() => {}, ["enter"])} />)
```

### 插槽 - Slots

> 注意: 在 `jsx` 中，应该使用 **`v-slots`** 代替 _`v-slot`_

```jsx
const A = (props, { slots }) => (
  <>
    <h1>{slots.default ? slots.default() : 'foo'}</h1>
    <h2>{slots.bar?.()}</h2>
  </>
);

const App = {
  setup() {
    const slots = {
      bar: () => <span>B</span>,
    };
    return () => (
      <A v-slots={slots}>
        <div>A</div>
      </A>
    );
  },
};

// or

const App = {
  setup() {
    const slots = {
      default: () => <div>A</div>,
      bar: () => <span>B</span>,
    };
    return () => <A v-slots={slots} />;
  },
};

// 或者，当 `enableObjectSlots` 不是 `false` 时，您可以使用对象插槽
const App = {
  setup() {
    return () => (
      <>
        <A>
          {{
            default: () => <div>A</div>,
            bar: () => <span>B</span>,
          }}
        </A>
        <B>{() => 'foo'}</B>
      </>
    );
  },
};
```

### 指令 - Directives

#### v-if

```jsx
import { ref } from 'vue'

const App = {
  setup() {
    const isExist = ref(false)

    return () => (<>{ isExist.value ? <button>Button</button> : null}</>)
  }
}
```

#### v-show

```jsx
const App = {
  data() {
    return { visible: true };
  },
  render() {
    return <input v-show={this.visible} />;
  },
};
```

#### v-model

> 注意：如果想要使用 `arg`, 第二个参数需要为字符串

```jsx
<input v-model={val} />
```

```jsx
<input v-model:argument={val} />
```

```jsx
<input v-model={[val, ['modifier']]} />
// 或者
<input v-model_modifier={val} />
```

```jsx
<A v-model={[val, 'argument', ['modifier']]} />
// 或者
<input v-model:argument_modifier={val} />
```

会编译成：

```js
h(A, {
  argument: val,
  argumentModifiers: {
    modifier: true,
  },
  'onUpdate:argument': ($event) => (val = $event),
});
```

#### v-models (从 1.1.0 开始不推荐使用)

> 注意: 你应该传递一个二维数组给 v-models。

```jsx
<A v-models={[[foo], [bar, 'bar']]} />
```

```jsx
<A
  v-models={[
    [foo, 'foo'],
    [bar, 'bar'],
  ]}
/>
```

```jsx
<A
  v-models={[
    [foo, ['modifier']],
    [bar, 'bar', ['modifier']],
  ]}
/>
```

会编译成：

```js
h(A, {
  modelValue: foo,
  modelModifiers: {
    modifier: true,
  },
  'onUpdate:modelValue': ($event) => (foo = $event),
  bar: bar,
  barModifiers: {
    modifier: true,
  },
  'onUpdate:bar': ($event) => (bar = $event),
});
```

#### 自定义指令

只有 argument 的时候推荐使用

```jsx
const App = {
  directives: { custom: customDirective },
  setup() {
    return () => <a v-custom:arg={val} />;
  },
};
```

```jsx
const App = {
  directives: { custom: customDirective },
  setup() {
    return () => <a v-custom={[val, 'arg', ['a', 'b']]} />;
  },
};
```

## 兼容性

要求：

- **Babel 7+**
- **Vue 3+**

## 参考

- [@vue/babel-plugin-jsx](https://www.npmjs.com/package/@vue/babel-plugin-jsx)
