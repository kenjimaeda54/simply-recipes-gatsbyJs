import React from "react"
import { graphql } from "gatsby"

//https://www.gatsbyjs.com/docs/reference/routing/file-system-route-api/
//essa rota sera automático a propriedade ContentfulRecipes.title  e importante
//repare que o grapql data layer existe allContentFulRecipes,allContentfulEntry...
//por isso ContentfulRecipes.title porque estou passando nas rotas o title e usando
//o allContentfulRecipes para os data layer
//se fosse to={/id } seria ContentFulRecipes.id
//contentful e para referenciar graphql,poderia ser qualquer nome

//por padrão o gatsby envia props para cada rota

export default function RecipeDetails({ data }) {
  console.log(data)

  return <div>ola</div>
}

//title vai ser inserido dinamico pelo context do props do gatsby
//cada pagina criado por gastby tem um contexto com algumas propriedades
//nesse caso o title esta sendo compartilhado pelo  e o graqpl
//nao esquece de export a constante
export const query = graphql`
  query getSingleRecipe($title: String) {
    allContentfulRecipes(filter: { title: { eq: $title } }) {
      nodes {
        title
        cookTime
        content {
          ingredients
          instructions
          tags
          tools
        }
        description {
          description
        }
        prepTime
        image {
          gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
        }
        servings
      }
    }
  }
`
