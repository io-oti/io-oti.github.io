<script lang="jsx">
import Avatar from '@/components/Icons/Avatar.vue'
import profile from './profile.json'

export default {
  setup() {
    const active = ref('0')

    const onChangeTab = value => {
      active.value = value
    }

    return () => (
      <div
        class="profile"
        data-active={active.value}
      >
        <div class="profile-header">
          <Avatar class="avatar" />
          <div class="brief">
            <h1 class="name">{profile.name}</h1>
            {profile.post && <h2 class="post">{profile.post}</h2>}
          </div>
        </div>
        <div class="profile-body">
          {profile.sections.reduce((res, section, index) => {
            const isActive = active.value == index

            if (section.about) {
              res.push(
                <div class={`profile-body-section ${isActive ? 'active' : ''}`}>
                  <div class="profile-body-label">{section.label}</div>
                  {section.about && <div class="about">{section.about}</div>}
                </div>
              )
            }
            if (section.timeline) {
              res.push(
                <div class={`profile-body-section ${isActive ? 'active' : ''}`}>
                  <div class="profile-body-label">{section.label}</div>
                  <div class="timeline">
                    {section.timeline.map(time => (
                      <div
                        class="timeline-item"
                        data-year={time.year}
                      >
                        <div class="timeline-item-title">{time.corp}</div>
                        <div class="timeline-item-desc">{time.work}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            }
            if (section.contact) {
              res.push(
                <div class={`profile-body-section ${isActive ? 'active' : ''}`}>
                  <div class="profile-body-label">{section.label}</div>
                  <div class="contact">
                    {section.contact.map(item => (
                      <div class="contact-item">
                        <img
                          src={item.src}
                          alt={item.type}
                        />
                        <span>{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )
            }

            return res
          }, [])}
        </div>
        <div class="profile-footer">
          {profile.sections.map((section, index) => (
            <button
              type="button"
              class={`tab-btn${active.value == index ? ' active' : ''}`}
              onClick={() => onChangeTab(index)}
            >
              {section.label}
            </button>
          ))}
        </div>
      </div>
    )
  },
}
</script>

<style lang="scss" scoped>
.profile {
  display: flex;
  flex-direction: column;
  width: min(100%, 365px);
  background-color: var(--vp-c-bg-soft);
  border-radius: 16px;
  overflow: hidden;
  transition: 0.3s ease-in;

  &[data-active='1'] {
    .profile-header {
      height: 90px;

      .avatar {
        top: 20px;
        left: 20px;
        width: 50px;
        height: 50px;
        transform: none;
      }

      .brief {
        bottom: 20px;
        left: 90px;
        padding: 4px 0;
        text-align: left;
        transform: none;
      }

      .name {
        margin-bottom: 6px;
        font-size: 20px;
      }

      .post {
        font-size: 12px;
        line-height: 1;
      }
    }
  }

  &-header {
    position: relative;
    width: 100%;
    height: 200px;
    overflow: hidden;
    transition: 0.3s ease-in;

    .avatar {
      position: absolute;
      top: 24px;
      left: 50%;
      width: 100px;
      height: 100px;
      border: 1px solid var(--vp-c-border);
      border-radius: 70% 30% 30% 70% / 30% 30% 70% 70%;
      transition: 0.3s ease-in;
      transform: translateX(-50%) translateY(0);
      animation: edge 4s both infinite;
    }

    .brief {
      position: absolute;
      bottom: 0;
      left: 50%;
      text-align: center;
      transition: 0.3s ease-in;
      transform: translateX(-50%) translateY(0);
    }

    .name {
      margin-bottom: 12px;
      font-size: 24px;
      font-weight: bold;
      transition: 0.3s ease-in;
    }

    .post {
      color: var(--vp-c-text-3);
      font-size: 16px;
      transition: 0.3s ease-in;
    }
  }

  &-body {
    flex: 1;
    transition: 0.3s;

    &-section {
      display: none;

      &.active {
        display: block;
        padding: 20px;
        animation: fadeIn 0.6s both;
      }
    }

    &-label {
      margin-bottom: 20px;
      font-size: 14px;
      font-weight: bold;
    }

    .about {
      color: var(--vp-c-text-3);
      font-size: 14px;
    }

    .timeline {
      position: relative;

      &:after {
        position: absolute;
        top: 2px;
        left: 43px;
        content: '';
        width: 2px;
        height: 100%;
        background: linear-gradient(
          to top,
          transparent 0%,
          var(--vp-c-brand-1) 100%
        );
      }

      &-item {
        position: relative;
        padding-bottom: 20px;
        padding-left: 60px;
        z-index: 1;

        &:last-child {
          padding-bottom: 4px;
        }

        &:after {
          position: absolute;
          top: 2px;
          left: 40px;
          content: attr(data-year);
          width: 8px;
          height: 8px;
          color: var(--vp-c-text-3);
          font-size: 12px;
          line-height: 0.6;
          text-indent: -40px;
          background-color: var(--vp-c-brand-1);
          border: 2px solid #fff;
          border-radius: 50%;
        }

        &-title {
          margin-bottom: 5px;
          font-size: 14px;
          font-weight: 500;
          line-height: 1;
        }

        &-desc {
          color: var(--vp-c-text-3);
          font-size: 14px;
          line-height: 1.5;
        }
      }
    }

    .contact {
      &-item {
        display: flex;
        align-items: center;
        color: var(--vp-c-text-3);
        font-size: 14px;
        line-height: 1.6;
        cursor: pointer;

        & + .contact-item {
          margin-top: 16px;
        }

        img {
          flex-shrink: 0;
          width: 32px;
          height: 32px;
          margin-right: 12px;
          padding-right: 12px;
          border-right: 1px solid var(--vp-c-text-3);
          transition: 0.3s;
        }
      }
    }
  }

  &-footer {
    position: relative;
    width: 100%;

    .tab-btn {
      width: calc(100% / 3);
      padding: 16px 0px;
      border-bottom: 2px solid transparent;
      transition: 0.3s;

      &:hover {
        color: var(--vp-c-brand-1);
      }

      &.active {
        border-bottom: 2px solid var(--vp-c-brand-1);
      }
    }
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translatey(44px);
  }
  100% {
    opacity: 1;
  }
}

@keyframes edge {
  0% {
    border-radius: 70% 30% 30% 70% / 30% 30% 70% 70%;
  }
  40% {
    border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%;
  }
  50% {
    border-radius: 30% 70% 70% 30% / 70% 70% 30% 30%;
  }
  60% {
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  }
  100% {
    border-radius: 70% 30% 30% 70% / 30% 30% 70% 70%;
  }
}

/* Tablet */
@media (max-width: 768px) {
  .profile {
    width: 100%;
  }
}
</style>
