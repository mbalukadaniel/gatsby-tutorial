module.exports = {
  siteMetadata: {
    title: "Kivyatu's Personal Blog",
    description: "Personal blog build using Gatsby!",
    author: "Daniel Mbaluka",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: `${__dirname}/blog`,
      },
    },
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Kivyatu's Blog",
        short_name: "Kivyatu",
        start_url: "/",
        background_color: "$6b37bf",
        display: "standalone",
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-offline",
    "gatsby-plugin-react-helmet",
  ],
};
