import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import TagList from "../TagList"
import RecipesList from "../RecipeList"

const query = graphql`
  {
    allContentfulRecipes(sort: { fields: title, order: ASC }) {
      nodes {
        title
        id
        cookTime
        prepTime
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

export function AllRecipes() {
  const {
    allContentfulRecipes: { nodes },
  } = useStaticQuery(query)
  return (
    <>
      <TagList />
      <RecipesList recipes={nodes} />
    </>
  )
}
