<script lang="jsx">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Keyboard } from 'swiper/modules'

import 'swiper/css'

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    pageSize: {
      type: [Number, String],
      default: 10,
    },
    data: {
      type: Array,
      default: () => [],
    },
  },
  setup(props, { slots }) {
    const total = computed(() => Math.ceil(props.data.length / props.pageSize))

    const pages = computed(() => {
      const result = []

      for (let i = 0; i < total.value; i++) {
        const page = props.data.slice(
          i * props.pageSize,
          (i + 1) * props.pageSize
        )

        result.push(page)
      }

      return result
    })

    return () => (
      <div class="paginator">
        <swiper
          class="paginator-pages"
          slidesPerView={1}
          spaceBetween={24}
          keyboard={{ enabled: true }}
          modules={[Keyboard]}
        >
          {pages.value.map((page) => (
            <swiper-slide class="paginator-page">
              {page.map((post) => slots.default(post))}
            </swiper-slide>
          ))}
        </swiper>
      </div>
    )
  },
}
</script>

<style lang="scss" scoped>
.paginator {
  width: min(100vw - 64px, 900px);
  margin: 0 auto;
  padding: 36px;

  &-page {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
  }
}
</style>
