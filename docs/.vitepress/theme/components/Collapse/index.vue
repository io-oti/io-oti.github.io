<script lang="jsx">
export default {
  props: {
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
    const onChange = value => emit('update:modelValue', value)

    return () =>
      h(
        <div
          class={`collapse ${props.size}`}
          open={props.modelValue}
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
.collapse {
  border: 1px solid transparent;
  transition: 0.4s;
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
    height: 100%;
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
    transition: 0.3s;
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
    transition: 0.3s;
  }

  &-content {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    transition: 0.5s;

    &.fade-in {
      animation: fadeIn 0.5s both;
    }

    &.fade-out {
      animation: fadeOut 0.5s both;
    }
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
</style>
