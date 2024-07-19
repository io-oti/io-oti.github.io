// https://vitepress.dev/guide/data-loading
import { createContentLoader } from "vitepress"

export default createContentLoader("posts/**/*.md", {
  excerpt: true,
  // includeSrc: true,
  // render: true,
  transform(raw) {
    return raw
      .map(({ excerpt, frontmatter: { date, ...z }, url }) => {
        return { date: formatDate(date), excerpt, url, ...z }
      })
      .sort((a, b) => b.date.time - a.date.time)
  },
})

function formatDate(raw) {
  const date = new Date(raw)

  date.setUTCHours(12)

  return {
    time: +date,
    string: date.toLocaleDateString("cn-zh", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    }),
  }
}
