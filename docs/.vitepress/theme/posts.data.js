// https://vitepress.dev/guide/data-loading
import { createContentLoader } from "vitepress"

export default createContentLoader("posts/**/*.md", {
  transform(raw) {
    return raw
      .reduce((res, { frontmatter: { date, publish, ...z }, url }) => {
        if (!publish) return res

        res.push({ date: formatDate(date), url, ...z })

        return res
      }, [])
      .sort((a, b) => b.date.time - a.date.time)
  },
})

function formatDate(raw) {
  const date = new Date(raw)

  date.setUTCHours(12)

  return {
    time: +date,
    string: date.toLocaleDateString("zh-CN", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }),
  }
}
