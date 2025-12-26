// 注: process.env.XX是Vercel的环境变量

const BLOG = {
  // --- 这里的两行是关键，必须在大括号内部 ---
  PREVIEW_POST_COUNT: 5, // 仅预生成 5 篇文章
  IS_REVALIDATE: true,   // 开启增量更新

  API_BASE_URL: process.env.API_BASE_URL || 'https://www.notion.so/api/v3',
  NOTION_PAGE_ID: process.env.NOTION_PAGE_ID || '02ab3b8678004aa69e9e415905ef32a5,en:7c1d570661754c8fbc568e00a01fd70e',
  THEME: process.env.NEXT_PUBLIC_THEME || 'simple',
  LANG: process.env.NEXT_PUBLIC_LANG || 'zh-CN',
  SINCE: process.env.NEXT_PUBLIC_SINCE || 2021,
  PSEUDO_STATIC: process.env.NEXT_PUBLIC_PSEUDO_STATIC || false,
  NEXT_REVALIDATE_SECOND: process.env.NEXT_PUBLIC_REVALIDATE_SECOND || 60,
  APPEARANCE: process.env.NEXT_PUBLIC_APPEARANCE || 'light',
  APPEARANCE_DARK_TIME: process.env.NEXT_PUBLIC_APPEARANCE_DARK_TIME || [18, 6],
  AUTHOR: process.env.NEXT_PUBLIC_AUTHOR || 'NotionNext',
  BIO: process.env.NEXT_PUBLIC_BIO || '一个普通的干饭人🍚',
  LINK: process.env.NEXT_PUBLIC_LINK || 'https://tangly1024.com',
  KEYWORDS: process.env.NEXT_PUBLIC_KEYWORD || 'Notion, 博客',
  BLOG_FAVICON: process.env.NEXT_PUBLIC_FAVICON || '/favicon.ico',
  BEI_AN: process.env.NEXT_PUBLIC_BEI_AN || '',
  BEI_AN_LINK: process.env.NEXT_PUBLIC_BEI_AN_LINK || 'https://beian.miit.gov.cn/',
  BEI_AN_GONGAN: process.env.NEXT_PUBLIC_BEI_AN_GONGAN || '',
  ENABLE_RSS: process.env.NEXT_PUBLIC_ENABLE_RSS || true,

  // 引入外部配置
  ...require('./conf/comment.config.js'),
  ...require('./conf/contact.config.js'),
  ...require('./conf/post.config.js'),
  ...require('./conf/analytics.config.js'),
  ...require('./conf/image.config.js'),
  ...require('./conf/font.config.js'),
  ...require('./conf/right-click-menu.js'),
  ...require('./conf/code.config.js'),
  ...require('./conf/animation.config.js'),
  ...require('./conf/widget.config.js'),
  ...require('./conf/ad.config.js'),
  ...require('./conf/plugin.config.js'),
  ...require('./conf/performance.config.js'),
  ...require('./conf/layout-map.config'),
  ...require('./conf/notion.config'),
  ...require('./conf/dev.config'),

  CUSTOM_EXTERNAL_JS: [''],
  CUSTOM_EXTERNAL_CSS: [''],
  CUSTOM_MENU: process.env.NEXT_PUBLIC_CUSTOM_MENU || true,
  CAN_COPY: process.env.NEXT_PUBLIC_CAN_COPY || true,
  LAYOUT_SIDEBAR_REVERSE: process.env.NEXT_PUBLIC_LAYOUT_SIDEBAR_REVERSE || false,
  GREETING_WORDS: process.env.NEXT_PUBLIC_GREETING_WORDS || 'Hi，我是一个程序员, 欢迎来到我的博客🎉',
  UUID_REDIRECT: process.env.UUID_REDIRECT || false
}

module.exports = BLOG
