<script lang="jsx">
import Profile from './components/Profile.vue'
import Posts from './components/Posts.vue'

export default {
  setup() {
    return () => (
      <div class="home-container">
        <Profile />
        <Posts />
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
    flex-direction: column;
    row-gap: 24px;
    width: min(100vw - 64px, 664px);
    min-height: calc(100vh - 64px - 89px);
    margin: 0 auto;
    padding-block: 24px;
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
