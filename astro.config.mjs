import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  // 部署到 GitHub Pages 时的配置
  site: 'https://Vir-code-bit.github.io',
  base: '/blog_pages',
  integrations: [tailwind(), mdx()],
  markdown: {
    shikiConfig: {
      theme: 'github-light', // 配合 MD3 的浅色主题
    },
  },
});
