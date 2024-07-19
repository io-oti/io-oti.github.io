<script lang="jsx">
import { computed, ref, withKeys } from "vue";
import ArrowLeft from "@/components/Icons/ArrowLeft.vue";
import ArrowRight from "@/components/Icons/ArrowRight.vue";

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
  setup(props, { emit }) {
    const enter = ref("");

    const current = computed(() => {
      return `${props.pageNumb} / ${props.total}`;
    });

    const onChangePage = (e) => {
      const pageNumb = Number(e.target.value);

      if (pageNumb && 1 <= pageNumb && pageNumb <= props.total) {
        emit("update:pageNumb", pageNumb);
      }
      e.target.value = "";
    };

    const onChangeSize = (size = 10) => {
      emit("update:pageSize", size);
    };

    const onPrevPage = (e) => {
      if (e.target.value) return;
      if (props.pageNumb <= 1) return;
      emit("update:pageNumb", props.pageNumb - 1);
    };

    const onNextPage = (e) => {
      if (e.target.value) return;
      if (props.pageNumb >= props.total) return;
      emit("update:pageNumb", props.pageNumb + 1);
    };

    return () => (
      <div class="paginator">
        <ArrowLeft
          class="paginator__prev"
          onClick={onPrevPage}
        />
        <input
          type="number"
          value={enter.value}
          class="paginator__input"
          placeholder={current.value}
          min={1}
          max={props.total}
          onKeyup={withKeys(onPrevPage, ["left"])}
          onKeyup={withKeys(onChangePage, ["enter"])}
          onKeyup={withKeys(onNextPage, ["right"])}
        />
        <ArrowRight
          class="paginator__next"
          onClick={onNextPage}
        />
      </div>
    );
  },
};
</script>

<style lang="scss" scoped>
.paginator {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 24px;

  &__input {
    width: 100px;
    margin: 0 12px;
    text-align: center;
    background: var(--vp-c-bg-alt);
    border: 1px solid transparent;
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

  &__prev,
  &__next {
    fill: var(--vp-c-text-3);
    cursor: pointer;
    transition: all 0.3 ease;

    &:hover {
      fill: var(--vp-c-brand-1);
    }
  }

  &__prev:hover {
    transform: translateX(-2px);
  }

  &__next:hover {
    transform: translateX(2px);
  }
}
</style>
