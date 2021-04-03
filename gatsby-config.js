/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [{
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `src`,
      path: `${__dirname}/src/`,
    },
  }, {
    resolve: `gatsby-source-strapi`,
    options: {
      apiURL: `https://pacific-brook-53088.herokuapp.com`,
      queryLimit: 1000, // Default to 100
      contentTypes: [`recognition`],
      //If using single types place them in this array.
      singleTypes: [],
      // Possibility to login with a strapi user, when content types are not publically available (optional).
      loginData: {
        identifier: "",
        password: "",
      },
    }
  }
  ],
  pathPrefix: "/gatsby-hello-world",
  siteMetadata: {
    title: `Title from siteMetadata`,
  },
}
