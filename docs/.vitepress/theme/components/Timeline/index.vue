<script lang="jsx">
export default {
  props: {
    events: {
      type: Array,
      default: () => [],
    },
    align: {
      type: String,
      default: 'left'
    }
  },
  setup(props) {
    return () => (
      <div class="timeline">
        {props.events.map(({ date, url, title, text }) => (
          <div
            class="event"
            data-date={typeof date === 'string' ? date : date.string}
          >
            <div class="content">
              <a
                class="title"
                href={url}
              >
                {title}
              </a>
              {text && <div class="text">{text}</div>}
            </div>
          </div>
        ))}
      </div>
    )
  },
}
</script>

<style lang="scss" scoped>
.timeline {
  width: 100%;

  .events {
    position: relative;
    display: flex;
    flex-direction: column;
    row-gap: 10px;

    &::before {
      position: absolute;
      top: 0;
      left: 50%;
      content: '';
      width: 2px;
      height: 100%;
      background: linear-gradient(
        to top,
        var(--vp-c-brand-1) 0%,
        var(--vp-c-brand-1) 100%
      );
      border-radius: 2px;
      transform: translateX(-50%);
    }
  }

  .event {
    position: relative;
    // left: 84px;
    display: flex;
    align-items: baseline;
    animation: fadeIn 0.3s both;

    &:nth-child(even) {
      .content {
        text-align: left;
      }
    }

    &::before {
      position: absolute;
      top: 8px;
      left: -3px;
      display: block;
      content: '';
      width: 8px;
      height: 8px;
      background: var(--vp-c-brand-1);
      border: 2px solid #ffffff;
      border-radius: 50%;
    }

    &::after {
      position: absolute;
      top: 8px;
      left: -1em;
      content: attr(data-date);
      width: max-content;
      color: var(--vp-c-text-3);
      font-size: 12px;
      line-height: 8px;
      text-indent: -100%;
    }

    .content {
      position: relative;
      padding-inline: 1em;
    }

    .date {
      color: transparent;
      font-size: 14px;
    }

    .title {
      // color: var(--vp-c-text-3);

      &:hover {
        color: var(--vp-c-brand-1);
      }
    }
  }
}

/* Tablet */
@media (max-width: 426px) {
  .timeline {
    .events {
      &::before {
        left: 50%;
        transform: translateX(-50%);
      }
    }

    .event {
      &:nth-child(even) {
        flex-direction: row-reverse;
      }

      &::before {
        left: 50%;
        transform: translateX(-50%);
      }

      &::after {
        position: relative;
        top: 0;
        left: 0;
        text-indent: 0;
        padding-inline: calc(1em + 4px);
      }

      .content {
        width: 50%;
        text-align: right;
        padding-inline: 1em;
      }
    }
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translatey(50%);
  }
  100% {
    opacity: 1;
    transform: translatey(0px);
  }
}
</style>
