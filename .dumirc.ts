import { defineConfig } from 'dumi';
import path from 'path';

//github仓库名称
const repo = 'ez-modal-react-book';

const isProd = process.env.NODE_ENV === 'production';

const base = isProd ? `/${repo}/` : '/';
const publicPath = isProd ? `/${repo}/` : '/';

export default defineConfig({
  base,
  publicPath,
  locales: [
    { id: 'zh-CN', name: '中文' },
    { id: 'en-US', name: 'EN' },
  ],
  outputPath: 'docs-dist',
  favicons: ['logo.png'],
  logo: 'logo.png',
  themeConfig: {
    name: 'ez-modal-react',
    logo: 'logo.png',
    nav: {
      'zh-CN': [
        { title: '快速开始', link: '/guide/base' },
        { title: '例子', link: '/example' },
      ],
      'en-US': [
        { title: 'Quick Start', link: '/en-US/guide/base' },
        { title: 'Example', link: '/en-US/example' },
      ],
    },
    socialLinks: {
      github: 'https://github.com/raotaohub/ez-modal-react',
    },
    footer: 'ez-modal-react',
    nprogress: false,
  },
  alias: {
    'ez-modal-react': path.join(__dirname, './node_modules/ez-modal-react'),
  },
});
