module.exports = {
  resolve: `gatsby-transformer-remark`,
  options: {
    excerpt_separator: `<!-- end -->`,
    plugins: [
      `gatsby-plugin-sharp`,
      {
        resolve: `gatsby-remark-images`,
        options: {
          maxWidth: 800,
          backgroundColor: `transparent`
        }
      },
      {
        resolve: `gatsby-remark-responsive-iframe`,
        options: {
          wrapperStyle: `margin-bottom: 2em`
        }
      },
      `gatsby-remark-prismjs`,
      `gatsby-remark-copy-linked-files`,
      `gatsby-remark-smartypants`,
      `gatsby-remark-katex`
    ]
  }
};
