// 注: process.env.XX是Vercel的环境变量，配置方式见：https://docs.tangly1024.com/article/how-to-config-notion-next#c4768010ae7d44609b744e79e2f9959a

const BLOG = {
  // --- 关键配置：限制预生成数量，防止 600 多篇文章导致构建报错 ---
  PREVIEW_POST_COUNT: 5, // 仅预生成 5 篇文章，其余动态生成
  IS_REVALIDATE: true,   // 开启增量更新模式
  
  API_BASE_URL: process.env.API_BASE_URL || 'https://www.notion.so/api/v3', 
  NOTION_PAGE_ID:
    process.env.NOTION_PAGE_ID ||
    '02ab3b8678004aa69e9e415905ef32a5,en:7c1d570661754c8fbc568e00a01fd70e',
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

  ...require('./conf/comment.config.js'), 
  ...require('./conf/contact.config.js'), 
  ...require('./conf/post.config.js'), 
  ...require('./conf/analytics.config.js'), 
  ...require('./conf/image.config.js'), 
  ...require('./conf/font.config.js'), 
  ...require('./conf/right-click-menu.js'), 
  ...require('./conf/code.config.js'),
