---
author: Io_oTI
date: 2023-09-27
tag: 'vue'
title: 'Vue 2 备忘录'
---

# Vue 2 备忘录

## 指令

### v-text

```vue
<template>
  <div>
    <div>{{ text }}</div>
    <div v-text="text"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: 'hello',
    }
  },
}
</script>
```

### v-html

```vue
<template>
  <div v-html="html"></div>
</template>

<script>
exprot default {
  data () {
    return {
      html: '<span>hello</span>'
    };
  }
};
</script>
```

### v-show

```vue
<template>
  <div v-show="isShow">hello</div>
</template>

<script>
exprot default {
  data () {
    return {
      isShow: false
    };
  }
};
</script>
```

### v-if / v-else / v-else-if

```vue
<template>
  <div>
    <div v-if="type === 0">{{ type }}</div>
    <div v-else-if="type === 1">{{ type }}</div>
    <div v-else>{{ type }}</div>
  </div>
</template>

<script>
exprot default {
  name: 'Syntax',

  props: {
    type: {
      type: String,
      default: 0
    }
  }
};
</script>
```

### v-for

- 不要使用对象或数组之类的非基本类型值作为 `v-for` 的 `key`。请用字符串或数值类型的值。

- 在遍历对象时，会按 `Object.keys() 的结果遍历，但是不能保证它的结果在不同的 JavaScript 引擎下都一致。

::: code-group

```vue [Array]
<template>
  <div>
    <div v-for="(item, index) in items" :key="index">
      {{ `${index}. ${item.key}: ${item.value}` }}
    </div>
    <div v-for="(item, index) of items" :key="index">
      {{ `${index}. ${item.key}: ${item.value}` }}
    </div>
  </div>
</template>

<script>
exprot default {
  data () {
    return {
      items: [
        { key: 'item1', value: '1' },
        { key: 'item2', value: '2' },
        { key: 'item3', value: '3' }
      ]
    };
  }
};
</script>
```

```vue [Object]
<template>
  <div>
    <div v-for="(value, key, index) in items" :key="key">
      {{ `${index}. ${key}: ${value}` }}
    </div>
    <div v-for="(value, key, index) of items" :key="key">
      {{ `${index}. ${key}: ${value}` }}
    </div>
  </div>
</template>

<script>
exprot default {
  data () {
    return {
      items: {
        item1: '1',
        item2: '2',
        item3: '3'
      },
    };
  }
};
</script>
```

:::

### v-on

```vue
<template>
  <div>
    <button v-on:click="handleCount">{{ count }}</button>
    <button v-on="{ click: handleCount, change: handleChange }">
      {{ count }}
    </button>
    <button @click="handleCount">{{ count }}</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    }
  },

  methods: {
    handleCount() {
      this.count++
    },
    handleChange() {
      console.log('hello')
    },
  },
}
</script>
```

### v-bind

```vue
<template>
  <div>
    <!-- attrs -->
    <input placeholder="msg" />
    <!-- props -->
    <input v-bind:placeholder="msg" />
    <input :placeholder="msg" />
    <!-- class -->
    <div :class="{ 'some-selector': hasClass, 'some-selector2': true }"></div>
    <div :class="[{ 'some-selector': hasClass }, 'some-selector2']"></div>
    <!-- style -->
    <div :style="{ color: someColor, fontSize: `${someSize}px` }"></div>
    <div :style="[styleObject, { fontSize: `${someSize}px` }]"></div>
  </div>
</template>

<script>
exprot default {
  data () {
    return {
      msg: 'hello',
      hasClass: true,
      someColor: 'red',
      someSize: 12,
      styleObject: {
        color: 'red'
      }
    };
  }
};
</script>

<style>
.some-selector {
  color: red;
}

.some-selector2 {
  font-size: 12px;
}
</style>
```

### v-slot

```vue
<template>
  <div></div>
</template>

<script>
exprot default {
  data () {
    return {
      msg: 'hello',
    }
  },

  methods: {
    action (h) {
      return h('div', this.count++)
    }
  },

  render (h) {
    return h('div', {}, [
      h('div', { scopedSlots: {default: this.msg, action: this.action(h) }}),
    ]);
  }
}
</script>
```

### v-model

```vue
<template>
  <input v-model="value" />
</template>

<script>
export default {
  data() {
    value: 'hello'
  },
}
</script>
```

### v-pre

跳过这个元素和它的子元素的编译过程。可以用来显示原始 Mustache 标签。跳过大量没有指令的节点会加快编译。

```vue
<template>
  <span v-pre>{{ this will not be compiled }}</span>
</template>
```

### v-cloak

这个指令保持在元素上直到关联实例结束编译。和 CSS 规则如 `[v-cloak] { display: none }` 一起用时，这个指令可以隐藏未编译的 Mustache 标签直到实例准备完毕。

```vue
<template>
  <div v-cloak>{{ message }}</div>
</template>
```

### v-once

只渲染元素和组件**一次**。随后的重新渲染，元素/组件及其所有的子节点将被视为静态内容并跳过。这可以用于优化更新性能。

```vue
<template>
  <button v-once>This will never change</button>
</template>
```

## 特殊属性

### key

### ref

### is

### slot

### slot-scope

### scope

## 组件

### template

### component

### transition

### transition-group

### keep-alive

### slot
