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
    const fadeEffect = ref('')

    const onChange = value => emit('update:modelValue', value)

    watch(
      () => props.modelValue,
      isExpand => {
        fadeEffect.value = isExpand ? 'fade-in' : 'fade-out'
      }
    )

    return () => (
      <div
        class={`collapse ${props.size}`}
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
        <div class={`collapse-content ${fadeEffect.value}`}>
          {slots.default?.()}
        </div>
      </div>
    )
  },
}
</script>

<style lang="scss" scoped>
.collapse {
  border: 1px solid transparent;
  transition: 0.3s;
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

  &[expand='true'] {
    height: calc-size(auto, size);
    border-color: var(--vp-c-gutter);

    .collapse-content {
      height: calc-size(auto, size);
    }
  }

  &:hover {
    border-color: var(--vp-c-gutter);

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
    height: 0;

    transition: height 0.3s;
    transition-behavior: allow-discrete;

    &.fade-in {
      animation: fadeIn 0.3s;
    }

    &.fade-out {
      animation: fadeOut 0.3s;
    }
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(-16px);
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
    transform: translateY(-16px);
  }
}
</style>
