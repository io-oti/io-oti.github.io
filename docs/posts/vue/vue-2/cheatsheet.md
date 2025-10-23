---
author: Io_oTI
date: 2023-09-27
publish: true
tag: 'vue'
title: 'Vue 2 备忘录'
---

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
export default {
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
export default {
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
export default {
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
export default {
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
export default {
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
export default {
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
export default {
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

`key` 属性主要用在 Vue 的虚拟 DOM 算法，在新旧 nodes 对比时辨识 VNodes。如果不使用 key，Vue 会使用一种最大限度减少动态元素并且尽可能的尝试就地修改/复用相同类型元素的算法。而使用 key 时，它会基于 key 的变化重新排列元素顺序，并且会移除 key 不存在的元素。

```vue{5}
<template>
  <ul id="example-1">
    <li
      v-for="item in items"
      :key="item.message"
    >
      {{ item.message }}
    </li>
  </ul>
</template>

<script>
var example1 = new Vue({
  el: '#example-1',
  data: {
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ]
  }
})
</script>
```

### ref

`ref` 被用来给元素或子组件注册引用信息。引用信息将会注册在父组件的 `$refs` 对象上。

父组件：

```vue
<template>
  <base-input ref="usernameInput"></base-input>
</template>

<script>
export default {
  methods: {
    focusUsernameInput() {
      this.$refs.usernameInput.focus()
    }
  }
}
</script>
```

子组件：

```vue
<template>
  <input ref="input"></input>
</template>

<script>
export default {
  methods: {
    // 用来从父级组件聚焦输入框
    focus: function () {
      this.$refs.input.focus()
    }
  }
}
</script>
```

### is

用于[动态组件](https://v2.cn.vuejs.org/v2/guide/components.html#%E5%8A%A8%E6%80%81%E7%BB%84%E4%BB%B6)且基于[DOM 内模板的限制](https://v2.cn.vuejs.org/v2/guide/components.html#%E8%A7%A3%E6%9E%90-DOM-%E6%A8%A1%E6%9D%BF%E6%97%B6%E7%9A%84%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9)来工作。

```vue
<template>
  <div id="dynamic-component-demo" class="demo">
    <button
      v-for="tab in tabs"
      v-bind:key="tab"
      v-bind:class="['tab-button', { active: currentTab === tab }]"
      v-on:click="currentTab = tab"
    >
      {{ tab }}
    </button>
    <component v-bind:is="currentTabComponent" class="tab"></component>
  </div>
</template>

<script>
  Vue.component("tab-home", {
    template: "<div>Home component</div>"
  });
  Vue.component("tab-posts", {
    template: "<div>Posts component</div>"
  });
  Vue.component("tab-archive", {
    template: "<div>Archive component</div>"
  });
  new Vue({
    el: "#dynamic-component-demo",
    data: {
      currentTab: "Home",
      tabs: ["Home", "Posts", "Archive"]
    },
    computed: {
      currentTabComponent: function() {
        return "tab-" + this.currentTab.toLowerCase();
      }
    }
  });
</script>
```

有些 HTML 元素，诸如 `<ul>`、`<ol>`、`<table>` 和 `<select>`，对于哪些元素可以出现在其内部是有严格限制的。而有些元素，诸如 `<li>`、`<tr>` 和 `<option>`，只能出现在其它某些特定的元素内部。

```vue
<template>
  <!-- 这样做是有必要的，因为 `<my-row>` 放在一个 -->
  <!-- `<table>` 内可能无效且被放置到外面 -->
  <table>
    <tr is="my-row"></tr>
  </table>
</template>
```

## 组件

### template

```vue
<template v-if="loginType === 'username'">
  <label>Username</label>
  <input placeholder="输入用户名" key="username-input">
</template>
<template v-else>
  <label>Email</label>
  <input placeholder="输入邮箱" key="email-input">
</template>
```

### component

```vue
<template>
  <component :is="TabComponent" />
</template>

<script>
import TabComponent from './TabComponent'

export default {
  components: {
    TabComponent
  },
  data() {
    return {
      text: 'hello',
    }
  },
}
</script>
```

### transition

`<transition>` 元素作为单个元素/组件的过渡效果。`<transition>` 只会把过渡效果应用到
其包裹的内容上，而不会额外渲染 DOM 元素，也不会出现在可被检查的组件层级中。

```vue
<template>
  <button @click="show = !show">
    切换渲染
  </button>
  <transition name="slide-fade">
    <p v-if="show">切换内容</p>
  </transition>
</template>

<script>
  export default {
    data: function() {
      return {
        show: true
      };
    }
  };
</script>

<style scoped>
  /* 可以设置不同的进入和离开动画 */
  /* 设置持续时间和动画函数 */
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  /* .slide-fade-leave-active 用于 2.1.8 以下版本 */
  .slide-fade-enter, .slide-fade-leave-to {
    transform: translateX(10px);
    opacity: 0;
  }
</style>
```

### transition-group

`<transition-group>` 元素作为多个元素/组件的过渡效果。`<transition-group>` 渲染一个真实的 DOM 元素。默认渲染 `<span>`，可以通过 `tag` attribute 配置哪个元素应该被渲染。

```vue
<template>
  <button v-on:click="add">添加</button>
  <button v-on:click="remove">删除</button>
  <transition-group name="list" tag="p">
    <span v-for="item in items" v-bind:key="item" class="list-item">
      {{ item }}
    </span>
  </transition-group>
</template>

<script>
  export default {
    data: function() {
      return {
        items: [1,2,3,4,5,6,7,8,9],
        nextNum: 10
      };
    },
    methods: {
      randomIndex: function () {
        return Math.floor(Math.random() * this.items.length)
      },
      add: function () {
        this.items.splice(this.randomIndex(), 0, this.nextNum++)
      },
      remove: function () {
        this.items.splice(this.randomIndex(), 1)
      },
    }
  };
</script>

<style scoped>
  .list-item {
    display: inline-block;
    margin-right: 10px;
  }
  .list-enter-active, .list-leave-active {
    transition: all 1s;
  }
  /* .list-leave-active 适用于 2.1.8 以下版本 */
  .list-enter, .list-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }
</style>
```

### keep-alive

`<keep-alive>` 包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们。和 `<transition>` 相似，`<keep-alive>` 是一个抽象组件：它自身不会渲染一个 DOM 元素，也不会出现在组件的父组件链中。

```vue
<template>
  <!-- 基本 -->
  <keep-alive>
    <component :is="view"></component>
  </keep-alive>

  <!-- 多个条件判断的子组件 -->
  <keep-alive>
    <comp-a v-if="a > 1"></comp-a>
    <comp-b v-else></comp-b>
  </keep-alive>

  <!-- 和 `<transition>` 一起使用 -->
  <transition>
    <keep-alive>
      <component :is="view"></component>
    </keep-alive>
  </transition>
</template>
```

### slot

`<slot>` 元素作为组件模板之中的内容分发插槽。`<slot>` 元素自身将被替换。

```vue
<template>
  <alert-box>
    发生了不好的事情。
  </alert-box>
</template>

<script>

export default {
  components: {
    'alert-box': {
      template: `
        <div class="demo-alert-box">
          <strong>Error!</strong>
          <slot></slot>
        </div>
      `
    }
  }
}
</script>
```

## 参考

- [Vue 2 API](https://v2.cn.vuejs.org/v2/api/)
- [Quick Reference](https://ref.eryajf.net/docs/vue2.html)
