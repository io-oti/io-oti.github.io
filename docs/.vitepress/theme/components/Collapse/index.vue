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
      default: 'large',
      validator: value => ['large', 'medium', 'small'].includes(value),
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit, slots }) {
    const enableTransitions = () =>
      'startViewTransition' in document &&
      window.matchMedia('(prefers-reduced-motion: no-preference)').matches

    const contentRef = useTemplateRef('collapseContent')

    const onChange = value => emit('update:modelValue', value)

    watch(
      () => props.modelValue,
      isExpand => {
        if (!contentRef.value) return

        if (!enableTransitions) {
          contentRef.value.style.display = isExpand ? 'flex' : 'none'
          return
        }

        document.startViewTransition(() => {
          contentRef.value.style.display = isExpand ? 'flex' : 'none'
        })
      }
    )

    return () =>
      h(
        <div
          class={`collapse ${props.size}`}
          style={{ 'view-transition-name': `expanded-effect-${props.id}` }}
          expand={props.modelValue}
        >
          <div
            class="collapse-label"
            onclick={() => onChange(!props.modelValue)}
          >
            <div class="collapse-title">{props.label}</div>
            <div class="collapse-count rounded-triangle">
              {slots.count?.() || props.count}
            </div>
          </div>
          <div
            ref="collapseContent"
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
.collapse {
  &.large {
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

  &[expand='true'] {
    background-color: var(--vp-c-bg-soft);

    .collapse-content {
      display: flex;
    }
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
    display: none;
    flex-direction: column;
    row-gap: 10px;

    &.fade-in {
      animation: fadeIn 0.3s both;
    }

    &.fade-out {
      animation: fadeOut 0.3s both;
    }
  }
}

::view-transition-old(expanded-effect)
::view-transition-new(expanded-effect) {
  animation: none;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeOut {
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-20px);
  }
}
</style>
