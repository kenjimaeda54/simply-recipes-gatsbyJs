import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../../components/Layout"
import { listTag } from "../../utils/listTag"
import * as Styles from "./styles.module.css"

export default function Recipes({ data }) {
  const allTags = listTag(data.allContentfulRecipes.nodes)
  return (
    <Layout>
      <div className={Styles.container}>
        {allTags.map(tag => {
          const [text, quantity] = tag
          const id = `${Math.round(Math.random() * 3000)}-${text}`
          return (
            <Link key={id} to={`/${text}`}>
              <article>
                <span className={Styles.text}>{text}</span>
                <span className={Styles.text}>{quantity} recipe</span>
              </article>
            </Link>
          )
        })}
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulRecipes {
      nodes {
        content {
          tags
        }
      }
    }
  }
`
