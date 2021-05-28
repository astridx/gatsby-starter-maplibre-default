module.exports = {
  siteMetadata: {
    siteUrl: `https://astridx.github.io/gatsbystarter/gatsby-starter-maplibre-default/`,
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby Maplibre project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `Astrid Günther`,
    mapboxToken: process.env.GATSBY_MAPBOX_API_TOKEN,
    maptilerToken: process.env.GATSBY_MAPTILER_TOKEN,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
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
        name: `gatsby-starter-maplibre-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
