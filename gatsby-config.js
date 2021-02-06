module.exports = {
  siteMetadata: {
    title: `DevFolio by BootstrapMade`,
    description: `Gatsbyjs Version of BootstrapMade's DevFolio Template`,
    author: `@chesteralan`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/data`,
      },
    },
    `gatsby-plugin-netlify-cms`,
    {
    resolve: 'gatsby-source-blogger',
    options: {
      apiKey: 'AIzaSyDZBmrClumizZ73Zb2JXAs4u-D7Nzj4Kr8',
      blogId: '137150095672623397'
      }
    },
  ],
}
