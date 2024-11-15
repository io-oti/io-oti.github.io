<script lang="jsx">
export default {
  setup() {
    const name = ref('Io_oTI')
    const desc = ref('Front-end Developer')
    const options = reactive({
      value: '0',
      tabs: [
        {
          label: 'ABOUT',
          about:
            'Hey, I am Io_oTI, a front developer. Just a person who is balding.',
        },
        {
          label: 'EXPERIENCE',
          timeline: [
            {
              year: '2024',
              corp: 'Front-end Developer at Unknown hotel',
              work: 'Developed wechat miniprogram.',
            },
            {
              year: '2020',
              corp: 'Front-end Developer at Unknown company',
              work: 'Developed management backend system.',
            },
            {
              year: '2015',
              corp: 'Software Engineer at FNST',
              work: 'DevOps openstack cinder driver program.',
            },
          ],
        },
        {
          label: 'CONTACT',
          contact: [
            {
              type: 'address',
              src: '/icons/icon-address.svg',
              value: 'Shenzhen, China',
            },
            {
              type: 'email',
              src: '/icons/icon-email.svg',
              value: 'io_oti[at]outlook.com',
            },
            {
              type: 'wechat',
              src: '/icons/icon-wechat.svg',
              value: 'wizard_ok',
            },
          ],
        },
      ],
    })

    const onChangeTab = value => {
      options.value = value
    }

    return () => (
      <div
        class="profile"
        data-active={options.value}
      >
        <div class="profile-header">
          <img
            src="/icons/maple.svg"
            class="avatar"
            alt="avatar"
          />
          <h1 class="name">{name.value}</h1>
          {desc.value && <h2 class="desc">{desc.value}</h2>}
        </div>
        <div class="profile-body">
          {options.tabs.reduce((res, tab, index) => {
            if (options.value == index) {
              res.push(
                <>
                  <div class="profile-body-label">{tab.label}</div>
                  {tab.about && <div class="about">{tab.about}</div>}
                  {tab.timeline && (
                    <div class="timeline">
                      {tab.timeline.map(time => (
                        <div
                          class="timeline-item"
                          data-year={time.year}
                        >
                          <div class="timeline-item-title">{time.corp}</div>
                          <div class="timeline-item-desc">{time.work}</div>
                        </div>
                      ))}
                    </div>
                  )}
                  {tab.contact && (
                    <div class="contact">
                      {tab.contact.map(item => (
                        <div class="contact-item">
                          <img
                            src={item.src}
                            alt={item.type}
                          />
                          <span>{item.value}</span>
                        </div>
                      ))}
                      <button class="contact-me">WORK TOGETHER</button>
                    </div>
                  )}
                </>
              )
            }
            return res
          }, [])}
        </div>
        <div class="profile-footer">
          {options.tabs.map((tab, index) => (
            <button
              type="button"
              class={`tab-btn${options.value == index ? ' active' : ''}`}
              onClick={() => onChangeTab(index)}
            >
              {tab.label}
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
  background: var(--vp-c-bg);
  border-radius: 16px;
  border: 1px solid var(--vp-c-gutter);
  overflow: hidden;
  transition: 0.3s;

  &-header {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;

    .avatar {
      width: 100px;
      height: 100px;
      margin: 24px 0;
      border-radius: 50%;
      border: 1px solid var(--vp-c-gutter);
    }

    .name {
      margin-bottom: 12px;
      font-size: 24px;
      font-weight: bold;
    }

    .desc {
      color: var(--vp-c-text-3);
      font-size: 16px;
    }
  }

  &-body {
    flex: 1;
    padding: 20px;
    transition: 0.3s;

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
          rgba(134, 214, 243, 0) 0%,
          var(--vp-c-brand-1) 100%
        );
      }

      &-item {
        position: relative;
        padding-right: 20px;
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
          background: var(--vp-c-brand-1);
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

      &-me {
        width: 100%;
        margin-top: 20px;
        padding: 12px 16px;
        color: #ffffff;
        font-size: 14px;
        font-weight: bold;
        background: linear-gradient(
          to right,
          var(--vp-c-brand-3) 0%,
          var(--vp-c-brand-1) 96%
        );
        border: 0;
        border-radius: 5px;
        outline: none;
        cursor: pointer;
        transition: 0.3s;
      }
    }
  }

  &-footer {
    position: relative;
    width: 100%;

    // &::after {
    //   position: absolute;
    //   bottom: 0;
    //   left: 0;
    //   display: block;
    //   content: '';
    //   width: calc(100% / 3);
    //   height: 4px;
    //   background: var(--vp-c-brand-1);
    //   transition: 0.3s;
    // }

    .tab-btn {
      width: calc(100% / 3);
      padding: 16px 0px;
      border-bottom: 4px solid transparent;
      transition: 0.3s;

      &:hover,
      &.active {
        border-bottom: 4px solid var(--vp-c-brand-1);
      }
    }
  }
}

/* Tablet */
@media (max-width: 768px) {
  .profile {
    width: 100%;
  }
}
</style>
