const siteMetadata = {
  siteUrl: "https://news.buzzing.cc",
  author: `Buzzing`,
  locale: "zh",
  title: "谷歌全球新闻头条",
  shortTitle: "全球头条",
  description: "用中文浏览谷歌全球新闻(西方媒体)头条",
  keywords: ["buzzing", "西方媒体", "国外新闻", "世界新闻", "突发新闻"],
  menuLinks: [
    // {
    //   name: "每周精选",
    //   url: "/issues",
    // },
    {
      name: "RSS",
      url: "/rss.xml",
      prefetch: false,
    },
  ],
  social: [
    {
      name: `Google News`,
      url: `https://news.google.com/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNRGx1YlY4U0FtVnVHZ0pWVXlnQVAB`,
      external: true,
    },
    {
      name: `Buzzing`,
      url: `https://www.buzzing.cc/`,
      external: true,
    },
  ],
  localize: [
    {
      locale: "en",
      title: `Buzzing on World News`,
      shortTitle: "BuzzNews",
      description: `See what's buzzing on Google World News Headline in your native language`,
      keywords: ["buzzing", "Breaking News"],
      menuLinks: [
        // {
        //   name: "Weekly Selection",
        //   url: "/en/issues",
        // },
        {
          name: "RSS",
          url: "/en/rss.xml",
          prefetch: false,
        },
      ],
    },
    {
      locale: "zh-Hant",
      title: "谷歌全球新聞頭條",
      shortTitle: "全球頭條",
      description: "用中文瀏覽谷歌全球新聞(西方媒體)頭條",
      keywords: ["buzzing", "西方媒體", "國外新聞", "世界新聞", "突發新聞"],
      menuLinks: [
        // {
        // name: "每週精選",
        // url: "/zh-Hant/issues",
        // },
        {
          name: "RSS",
          url: "/zh-Hant/rss.xml",
          prefetch: false,
        },
      ],
    },
  ],
};

module.exports = {
  siteMetadata,
};
