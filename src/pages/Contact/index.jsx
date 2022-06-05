import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/Layout"
import * as Styles from "./styles.module.css"
import RecipeList from "../../components/RecipeList"

export default function Contact({ data }) {
  const {
    allContentfulRecipes: { nodes },
  } = data //sempre ao fazer um graphql, em uma page ja e inserido o data de forma automatica

  return (
    <Layout>
      <section className={Styles.section}>
        <article className={Styles.article}>
          <h2>Want To Get In Touch?</h2>
          <p>
            Four dollar toast biodiesel plaid salvia actually pickled banjo
            bespoke mlkshk intelligentsia edison bulb synth.
          </p>
          <p>Cardigan prism bicycle rights put a bird on it deep v.</p>
          <p>
            Hashtag swag health goth air plant, raclette listicle fingerstache
            cold-pressed fanny pack bicycle rights cardigan poke.
          </p>
        </article>
        <form
          action="https://formspree.io/f/xjvlzboe"
          method="POST"
          className={Styles.form}
        >
          <label htmlFor="name">Your Name</label>
          <input id="name" type="text" name="name" />
          <label htmlFor="email">Your email</label>
          <input id="email" type="email" name="email" />
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message"></textarea>
          <button type="submit">Submit</button>
        </form>
      </section>
      <footer className={Styles.footer}>
        <h3>Look at this Awesomesouce!</h3>
        <div className={Styles.recipes}>
          <RecipeList recipes={nodes} />
        </div>
      </footer>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulRecipes(
      sort: { order: ASC, fields: title }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        title
        cookTime
        prepTime
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`
