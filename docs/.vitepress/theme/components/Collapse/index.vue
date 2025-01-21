<script lang="jsx">
export default {
  props: {
    id: {
      type: [String, Number],
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    count: {
      type: Number,
      default: 0,
    },
    modelValue: {
      type: Boolean,
      default: true,
    },
    size: {
      validator: value => ['large', 'medium', 'small'].includes(value),
      default: 'large',
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit, slots }) {
    const sizes = reactive({ large: '116px', medium: '88px', small: '70px' })
    const height = ref(sizes[props.size])

    console.log('index.vue:', height.value);

    const collapseRef = useTemplateRef('collapse')

    const onChange = value => emit('update:modelValue', value)

    watchPostEffect(() => {
      if (!collapseRef.value) return

      if (props.modelValue) {
        if (document?.startViewTransition) {
          document.startViewTransition(() => {
            collapseRef.value.style.height = '100%'
          })
        } else {
          collapseRef.value.style.height = '100%'
        }
      } else {
        if (document?.startViewTransition) {
          document.startViewTransition(() => {
            collapseRef.value.style.height = height.value
          })
        } else {
          collapseRef.value.style.height = height.value
        }
      }
    })

    return () =>
      h(
        <div
          ref="collapse"
          class={`collapse ${props.size}`}
          open={props.modelValue}
          style={{ 'view-transition-name': `expanded-effect-${props.id}` }}
        >
          <div
            class="collapse-label"
            onclick={() => onChange(!props.modelValue)}
          >
            <div class="collapse-title">{props.label}</div>
            <div class="collapse-count rounded-triangle">
              {slots.count ? slots.count() : props.count}
            </div>
          </div>
          <div
            class={`collapse-content ${
              props.modelValue ? 'fade-in' : 'fade-out'
            }`}
          >
            {slots.default?.()}
          </div>
        </div>
      )
  },
}
</script>

<style lang="scss" scoped>
$height: v-bind(height);

.collapse {
  border: 1px solid transparent;
  overflow: hidden;

  &.large {
    height: 116px;
    border-radius: 16px;

    .collapse-label {
      padding: 20px;
      font-size: 96px;
      line-height: 76px;
    }

    .collapse-content {
      padding: 0px 20px 20px;
    }
  }

  &.medium {
    height: 88px;
    border-radius: 12px;

    .collapse-label {
      padding: 16px;
      font-size: 46px;
      line-height: 56px;
    }

    .collapse-title {
      -webkit-text-stroke-width: 1px;
    }

    .collapse-content {
      padding: 0px 16px 16px;
    }
  }

  &.small {
    height: 70px;
    border-radius: 8px;

    .collapse-label {
      padding: 12px;
      font-size: 36px;
      line-height: 46px;
    }

    .collapse-title {
      -webkit-text-stroke-width: 1px;
    }

    .collapse-content {
      padding: 0px 12px 12px;
    }
  }

  &[open='true'] {
    background-color: var(--vp-c-bg-soft);
  }

  &:hover {
    background-color: var(--vp-c-bg-soft);

    .collapse-title {
      -webkit-text-stroke-color: var(--vp-c-text-2);
    }

    .collapse-count {
      background-color: var(--vp-c-purple-soft);
      transform: scale(1);
    }
  }

  &-label {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: transparent;
    font-weight: 700;
    list-style: none;
    cursor: pointer;
  }

  &-title {
    flex: 1;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: var(--vp-c-text-3);
    text-transform: uppercase;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  &-count {
    width: 36px;
    height: 36px;
    color: var(--vp-c-purple-1);
    font-family: sans-serif;
    font-size: 18px;
    font-weight: normal;
    line-height: 36px;
    text-align: center;
    transform: scale(0);
  }

  &-content {
    display: flex;
    flex-direction: column;
    row-gap: 10px;

    &.fade-in {
      animation: fadeIn 0.3s ease-in-out both;
    }

    &.fade-out {
      animation: fadeOut 0.3s ease-in-out both;
    }
  }
}

::view-transition-old(expanded-effect) {
  .collapse {
    animation: expand 0.3s ease-in-out both;
  }
}

::view-transition-new(expanded-effect) {
  .collapse {
    animation: collapse 0.3s ease-in-out both;
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translatey(20px);
  }
  100% {
    opacity: 1;
    transform: translatey(0px);
  }
}

@keyframes fadeOut {
  0% {
    opacity: 1;
    transform: translatey(0px);
  }
  100% {
    opacity: 0;
    transform: translatey(20px);
  }
}

@keyframes expand {
  from {
    height: var(height);
  }
  to {
    height: 100%;
  }
}

@keyframes collapse {
  from {
    height: 100%;
  }
  to {
    height: var(height);
  }
}
</style>
