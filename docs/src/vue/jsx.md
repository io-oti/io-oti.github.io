# JSX

## Content

```jsx
export default {
  data () {
    return {
      text: 'hello thmas'
    };
  },

  render () {
    return <div>{ this.text }</div>;
  }
};
```

## Attrs/Props

`vm.$attrs` 包含了父作用域中不作为 prop 被识别 (且获取) 的 attribute 绑定 (class 和 style 除外)。

`vm.$props` 当前组件接收到的 props 对象。Vue 实例代理了对其 props 对象 property 的访问。

```jsx
import Children form './children.vue'

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

  render () {
    return <children text={ this.text } props={{ name: this.name }} />;
  }
};
```

```jsx
export default {
  name: 'Children',

  props: {
    name: {
      type: String,
     default: 'world'
    },
  }

 render() {
    return <div>{ `${this.$attrs.text} ${this.name}` }</div>;
  }
}
```

## DomProps

```jsx
export default {
  data () {
    return {
      text: 'hello thmas',
      html: '<span>hello thmas</span>'
    };
  },

  render () {
    return <div>
      <!-- v-text -->
      <div domPropsInnerText={ this.text }></div>
      <div domProps={ innerText: this.text }></div>
      <!-- v-html -->
      <div domPropsInnerHTML={ this.html }></div>
      <div domProps={ innerHTML: this.html }></div>
    </div>;
  }
};
```

## On

包含了父作用域中的 (不含 `.native` 修饰器的) `v-on` 事件监听器。它可以通过 `v-on="$listeners"` 传入内部组件——在创建更高层次的组件时非常有用。


```jsx
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

  render () {
    return <div>
      <div onClick={ this.handleCount } on={this.$listeners}>{ this.count }</div>
      <!-- or -->
      <div on={{ click: this.handleCount, ...this.$listeners }}>{ this.count }</div>
    </div>;
  }
};
```

## ScopedSlots

```jsx
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

  methods: {
    suffix () {
      return <span>{this.name}</span>;
    };
  },

  render () {
    const scopedSlots = {
      default: <span>{this.text}</span>,
      suffix: this.suffix
    }

    return <children scopedSlots={ scopedSlots }></children>;
 }
};
```

```jsx
export default {
  name: 'Children',

  render () {
    return <div>
      { this.$scopedSlots.default() }
      { this.$scopedSlots.suffix() }
      <!-- or -->
      { this.$slots.default }
      { this.$slots.suffix }
    </div>;
  }
};
```

## Directives

```jsx
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

    return <div directives={ directives }></div>;
  }
};
```

## v-model

```jsx
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

  render () {
    return <div>
      <input v-model="value" />
      <!-- v-model -->
      <input value={ this.value } onInput={ this.handleInput } />
    </div>;
  }
};
```

