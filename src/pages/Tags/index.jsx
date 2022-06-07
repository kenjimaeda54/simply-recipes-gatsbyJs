import React from "react"
import { graphql, Link } from "gatsby"
import slugify from "slugify"
import Layout from "../../components/Layout"
import { listTag } from "../../utils/listTag"
import * as Styles from "./styles.module.css"
import Seo from "../../components/Seo"

export default function Recipes({ data }) {
  const allTags = listTag(data.allContentfulRecipes.nodes)
  return (
    <Layout>
      <Seo titlePage="Tags" />
      <div className={Styles.container}>
        {allTags.map(tag => {
          const [text, quantity] = tag
          const id = `${Math.round(Math.random() * 3000)}-${text}`
          const slug = slugify(text, { lower: true })
          return (
            <Link key={id} to={`/tags/${slug}`}>
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
