/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

//https://www.gatsbyjs.com/docs/how-to/local-development/environment-variables/
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

//https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
//siteMetadata sao informações compartilhado no projeto todo, sao informações que podem ser pegues
//factivelmente no grapql ou para configuração de ambiente

//https://www.gatsbyjs.com/plugins/gatsby-source-filesystem
//filesystem
//se desejar consigo varias instancia com filesystem
//node consegue acessar os arquivos do projeto, em grapql usando allFile e  node consigo acessar os arquivos
module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description:
      "Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",
    data: [
      { name: "Fulano", age: "20" },
      { name: "Ciclano", age: "30" },
    ],
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `76tdifyvd8i6`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
}
