import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import RecipeList from "../components/RecipeList"
import * as Styles from "./styles.module.css"

export default function TagsPage(prop) {
  const recipe = prop.data.allContentfulRecipes.nodes
  const titleTag = prop.pageContext.tag
  return (
    <Layout>
      <h3 className={Styles.subtitle}>{titleTag}</h3>
      <RecipeList recipes={recipe} />
    </Layout>
  )
}

export const query = graphql`
  query recipeByTag($tag: String) {
    allContentfulRecipes(
      sort: { fields: title, order: ASC }
      filter: { content: { tags: { eq: $tag } } }
    ) {
      nodes {
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
        title
        prepTime
        cookTime
        id
      }
    }
  }
`
