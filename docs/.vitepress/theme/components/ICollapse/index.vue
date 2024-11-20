<script lang="jsx">
export default {
  props: {
    label: {
      type: String,
      default: '',
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

    return () => (
      <div
        class="collapse"
        open={props.modelValue}
      >
        <div
          class={`collapse-label ${props.size}`}
          onclick={() => onChange(!props.modelValue)}
        >
          {props.label}
        </div>
        <div className="collapse-content">{slots.default?.()}</div>
      </div>
    )
  },
}
</script>

<style lang="scss" scoped>
.collapse {
  height: 116px;
  border: 1px solid transparent;
  border-radius: 16px;
  transition: 0.4s;
  overflow: hidden;

  &[open='true'] {
    height: 100%;
    border: 1px solid var(--vp-c-gutter);

    .collapse-content {
      animation: fadeIn 0.4s both;
    }
  }

  &[open='false'] {
    .collapse-content {
      animation: fadeOut 0.4s both;
    }
  }

  &:hover {
    border: 1px solid var(--vp-c-gutter);
  }

  &-label {
    padding: 20px;
    color: transparent;
    font-weight: 700;
    list-style: none;
    transition: 0.3s;
    cursor: pointer;
    -webkit-text-stroke: 2px var(--vp-c-text-3);

    &.large {
      font-size: 96px;
      line-height: 76px;
    }
    &.medium {
      font-size: 48px;
      line-height: 46px;
    }
    &.small {
      font-size: 36px;
      line-height: 36px;
    }

    &:hover {
      -webkit-text-stroke-color: var(--vp-c-text-2);
    }
  }

  &-content {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    padding: 0px 20px 20px;
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translatey(0px);
  }
  1% {
    opacity: 0;
    transform: translatey(-20px);
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
  99% {
    opacity: 0;
    transform: translatey(-20px);
  }
  100% {
    opacity: 0;
    transform: translatey(0px);
  }
}
</style>
