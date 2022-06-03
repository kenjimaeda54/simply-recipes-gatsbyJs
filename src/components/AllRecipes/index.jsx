import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import TagList from "../TagList"
import RecipesList from "../RecipeList"
import * as Styles from "./styles.module.css"

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
    <div className={Styles.container}>
      <section>
        <p className={Styles.title}>Recipes</p>
        <TagList recipes={nodes} />
      </section>
      <section>
        <RecipesList recipes={nodes} />
      </section>
    </div>
  )
}
