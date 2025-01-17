import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import autoImport from 'unplugin-auto-import/vite'
import components from 'unplugin-vue-components/vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import sidebar from '../plugins/sidebar'
import rss from '../plugins/rss'
import path from 'path'

export default {
  server: {
    host: true,
    fs: {
      allow: ['/pages/'],
    },
  },
  plugins: [
    autoImport({
      imports: ['vue'],
      resolvers: [ElementPlusResolver()],
      eslintrc: {
        enabled: true,
        filepath: './.eslintrc-auto-import.js',
        globalsPropValue: false,
      },
    }),
    components({
      resolvers: [ElementPlusResolver()],
    }),
    vueJsx(),
    sidebar([
      '/posts/dev-tools/vite',
      '/posts/dev-tools/webpack',
      '/posts/git',
      '/posts/javascript',
      '/posts/miniprogram',
      '/posts/nodejs',
      '/posts/nginx',
      '/posts/vue',
      '/posts/web/css',
      '/posts/os/windows',
    ]),
    rss({
      link: 'https://io-oti.github.io',
      files: 'posts/**/*.md',
      image: '/icons/maple.png',
      favicon: '/icons/maple.svg',
    }),
  ],
  resolve: {
    // 设置别名
    alias: [
      { find: '~', replacement: path.resolve(__dirname, '../') },
      { find: '@', replacement: path.resolve(__dirname, '../theme') },
      // {
      //   find: /^.*\/VPPage\.vue$/,
      //   replacement: fileURLToPath(
      //     new URL('./theme/pages/Profile/index.vue', import.meta.url)
      //   ),
      // },
    ],
    // https://cn.vitejs.dev/config/#resolve-extensions
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
}
