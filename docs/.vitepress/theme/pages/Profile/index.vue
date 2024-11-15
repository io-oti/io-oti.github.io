<script lang="jsx">
import Profile from './components/Profile.vue'
import Posts from './components/Posts.vue'

export default {
  setup() {
    return () => (
      <div class="home-container">
        <div class="home-wrap">
          <Profile />
          <Posts />
        </div>
      </div>
    )
  },
}
</script>

<style lang="scss" scoped>
.home {
  &-container {
    display: flex;
    align-items: center;
    width: min(100vw - 64px, 1024px);
    min-height: calc(100vh - 104px - 89px);
    margin: 20px auto;
  }

  &-wrap {
    display: flex;
    flex-wrap: wrap;
    gap: 32px;
  }
}

/* Mobile */
@media (max-width: 426px) {
  .home {
    &-container {
      width: calc(100vw - 40px);
    }

    &-wrap {
      gap: 20px;
    }
  }
}
</style>
