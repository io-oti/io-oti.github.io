---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

title: 槭林
titleTemplate: 连林人不觉 独树众乃奇

hero:
  name: 槭林
  tagline: 连林人不觉 独树众乃奇
  actions:
    - theme: brand
      text: Vue
      link: /vue/
    - theme: alt
      text: NodeJS
      link: /nodejs/
    - theme: alt
      text: Git Cheapsheets
      link: /git/
  # image:
  #   src: /maple.png
  #   alt: VitePress

features:
  - icon: <svg xmlns="http://www.w3.org/2000/svg" width="30" viewBox="0 0 256 220.8"><path fill="#41B883" d="M204.8 0H256L128 220.8 0 0h97.92L128 51.2 157.44 0h47.36Z"/><path fill="#41B883" d="m0 0 128 220.8L256 0h-51.2L128 132.48 50.56 0H0Z"/><path fill="#35495E" d="M50.56 0 128 133.12 204.8 0h-47.36L128 51.2 97.92 0H50.56Z"/></svg>
    title: Vue
    details: vue 笔记
  - icon: 🍁
    title: NodeJS
    details: nodejs 笔记
  - icon: 🍁
    title: Git Cheapsheets
    details: git 备忘录
---
<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #c21f30 30%, #f62e10);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #c21f30 50%, #f62e10 50%);
  --vp-home-hero-image-filter: blur(40px);
  --vp-c-indigo-1: #f62e10;
  --vp-c-indigo-2: #d81e06;
  --vp-c-indigo-3: #c21f30;
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(72px);
  }
}
</style>