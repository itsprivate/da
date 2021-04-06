const siteMetadata = {
  siteUrl: "https://data.buzzing.cc",
  author: `Buzzing.cc`,
  locale: "zh",
  title: "数据之美",
  shortTitle: "数据之美",
  description: "用数字读懂世界，关于数据可视化，统计相关的一切信息",
  keywords: [
    "buzzing",
    "数据之美",
    "Index",
    "data",
    "突发新闻",
    "指数",
    "统计",
  ],
  telegram: "@buzzingcc",
  telegram_chat_id: "-1001406368978",
  menuLinks: [
    // {
    //   name: "每周精选",
    //   url: "/issues",
    // },
    // {
    //   name: "RSS",
    //   url: "/rss.xml",
    //   prefetch: false,
    // },
  ],
  subscriptions: [
    {
      name: "Twitter @buzzingcc",
      url: "https://twitter.com/buzzingcc",
      external: true,
    },
    {
      name: "Telegram @buzzingcc",
      url: "https://t.me/buzzingcc",
      external: true,
    },
    {
      name: "RSS",
      url: "/rss.xml",
      prefetch: false,
    },
  ],
  social: [
    {
      name: `Data Is Beautiful`,
      url: `https://www.reddit.com/r/dataisbeautiful`,
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
      title: `Buzzing on Data`,
      shortTitle: "BuzzData",
      description: `See what's buzzing on data in your native language`,
      keywords: ["buzzing", "data", "charts"],
      menuLinks: [
        // {
        //   name: "Weekly Selection",
        //   url: "/en/issues",
        // },
      ],
    },
    {
      locale: "zh-Hant",
      title: "數據之美",
      shortTitle: "數據之美",
      description: "用數字讀懂世界，關於數據可視化，統計相關的一切信息",
      keywords: [
        "buzzing",
        "數據之美",
        "Index",
        "data",
        "突發新聞",
        "指數",
        "統計",
      ],
      menuLinks: [
        // {
        // name: "每週精選",
        // url: "/zh-Hant/issues",
        // },
      ],
    },
    {
      locale: "ja",
      title: "データの美しさ",
      shortTitle: "データの美しさ",
      description: "数字を使用して世界、データの視覚化と統計に関するすべての情報を理解する",
      keywords: ["buzzing", "データの美しさ",],
      menuLinks: [
     
      ],
    }
  ],
};

module.exports = {
  siteMetadata,
};
