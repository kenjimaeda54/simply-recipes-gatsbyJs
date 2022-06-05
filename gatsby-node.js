const path = require("path")
const slugify = require("slugify")
//https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
//outra abordagem de criar paginas dinâmicas

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query getTags {
      allContentfulRecipes {
        nodes {
          content {
            tags
          }
        }
      }
    }
  `)
  result.data.allContentfulRecipes.nodes.forEach(it => {
    it.content.tags.forEach(tag => {
      createPage({
        path: `/tags/${slugify(tag, { lower: true })}`,
        //__dirname é o diretório atual e interessante usar porque
        //pega o caminho absoluto
        component: path.resolve(__dirname, "src/templates/TagPage.jsx"),
        context: {
          tag,
        },
      })
    })
  })
}
