module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    {
      resolve: `gatsby-source-mongodb`,
       options: {
        dbName: `gatsby`,
        collection: `books`,
        // dbName: `testDB`,
        // collection: `meals`,
        // server: { address: 'cluster0.cemek.mongodb.net', port: 27017},
        server: { address: 'cluster0-shard-00-01.cemek.mongodb.net', port: 27017},
        // server: { address: 'cluster0.cemek.mongodb.net', port: 43532},
        // server: { address: 'localhost', port: 43532},
        // server: { address: 'localhost', port: 27017},
        auth: { user: 'jfigueroapcs', password: '2Xs4d4s1' },
        extraParams: { replicaSet: 'Cluster0-shard-0', ssl: true, authSource: `admin`, retryWrites: true }
      }     
    },
    {
      resolve: 'gatsby-source-storyblok',
      options: {
        accessToken: 'nizsTnv3TMLLOourUCO9rQtt',
        homeSlug: 'home',
        version: process.env.NODE_ENV === 'production' ? 'published' : 'draft'
      }
    },

    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
      name: 'content',
      path: `${__dirname}/src/content/`,
    },
    },
    'gatsby-transformer-remark',
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
