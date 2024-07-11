<script lang="jsx">
import { computed, ref, withKeys } from "vue"

export default {
  props: {
    pageNumb: {
      type: [Number, String],
      default: 1,
    },
    pageSize: {
      type: [Number, String],
      default: 10,
    },
    total: {
      type: [Number, String],
      default: 0,
    },
  },
  emits: ["update:pageNumb", "update:pageSize"],
  setup (props, { emit }) {
    const enter = ref('')

    const current = computed(() => {
      return `${props.pageNumb} / ${props.total}`
    })

    const onChangePage = (numb = 1) => {
      if (numb && numb < props.total && numb >= 1) {
        enter.value = ''
        emit("update:pageNumb", numb)
      } else {
        emit("update:pageNumb", 1)
      }
    }

    const onChangeSize = (size = 10) => {
      emit("update:pageSize", size)
    }

    const onPrevPage = () => {
      if (props.pageNumb <= 1) return
      emit("update:pageNumb", props.pageNumb - 1)
    }

    const onNextPage = () => {
      emit("update:pageNumb", props.pageNumb + 1)
    }

    return () => (
      <div class="paginator">
        <a
          class="paginator__prev"
          onclick={onPrevPage}
        >
          Prev
        </a>
        <input
          type="number"
          value={enter.value}
          class="paginator__input"
          placeholder={current.value}
          min={1}
          max={props.total}
          onKeyup={withKeys((e) => onChangePage(e.target.value), ["enter"])}
        />
        <a
          class="paginator__next"
          onclick={onNextPage}
        >
          Next
        </a>
      </div>
    )
  },
}
</script>

<style lang="scss" scoped>
.paginator {
  display: flex;
  justify-content: space-between;
  margin: 20px 0;

  &__prev,
  &__next {
    color: var(--color-text);
    font-size: 16px;

    &:hover {
      font-weight: bold;
    }
  }

  &__input {
    width: 100px;
    text-align: center;
    border: 1px solid var(--vp-c-border);
    border-radius: var(--border-size-1);
    outline: none;
    transition: border-color 0.25s;

    &:hover,
    &:focus {
      border-color: var(--vp-c-brand-1);
    }

    &:invalid {
      border-color: var(--warning-border);
    }
  }
}
</style>
