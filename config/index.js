const siteMetadata = {
  siteUrl: "https://reddit.buzzing.cc",
  author: `Reddit`,
  locale: "zh",
  title: "Reddit 热门",
  shortTitle: "Reddit热门",
  description: "用中文浏览Reddit热门内容",
  keywords: ["buzzing"],
  menuLinks: [
    {
      name: "每周精选",
      url: "/issues",
    },
    {
      name: "RSS",
      url: "/rss.xml",
      prefetch: false,
    },
  ],
  social: [
    {
      name: `Reddit`,
      url: `https://www.reddit.com/`,
      external: true,
    },
  ],
  localize: [
    {
      locale: "en",
      title: `Buzzing on Reddit`,
      shortTitle: "BuzzReddit",
      description: `See what's buzzing on Reddit in your native language`,
      keywords: ["buzzing"],
      menuLinks: [
        {
          name: "Weekly Selection",
          url: "/issues",
        },
        {
          name: "RSS",
          url: "/rss.xml",
          prefetch: false,
        },
      ],
      social: [
        {
          name: `Reddit`,
          url: `https://www.reddit.com/`,
          external: true,
        },
      ],
    },
  ],
};

module.exports = {
  siteMetadata,
};
