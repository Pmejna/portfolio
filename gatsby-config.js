module.exports = {
  siteMetadata: {
    defaultTitle: `Pmejna portfolio`,
    description: `Przemyslaw Mejna web developer portfolio`,
    author: `pmejna@gmail.com`,
    url: `https://www.mejna.co.uk/`,
    image:`${__dirname}/src/assets/images/`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-layout`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-mejna-design`,
        short_name: `mejna`,
        start_url: `/`,
        background_color: `#0AFCD3`,
        theme_color: `#0AFCD3`,
        display: `minimal-ui`,
        icon: 'src/assets/images/Icon.png',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
