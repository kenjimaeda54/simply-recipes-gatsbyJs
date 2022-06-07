import React from "react"
import { graphql, Link } from "gatsby"
import { BsClockHistory, BsClock, BsPeople } from "react-icons/bs"
import slugify from "slugify"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import * as Styles from "./contentful.module.css"
import Seo from "../components/Seo"

//https://www.gatsbyjs.com/docs/reference/routing/file-system-route-api/
//essa rota sera automático a propriedade ContentfulRecipes.title  e importante
//repare que o grapql data layer existe allContentFulRecipes,allContentfulEntry...
//por isso ContentfulRecipes.title porque estou passando nas rotas o title e usando
//o allContentfulRecipes para os data layer
//se fosse to={/id } seria ContentFulRecipes.id
//contentful e para referenciar graphql,poderia ser qualquer nome

//por padrão o gatsby envia props para cada rota

export default function RecipeDetails({ data }) {
  const { nodes } = data.allContentfulRecipes
  return (
    <Layout>
      {nodes.map(it => {
        const {
          content: { ingredients, instructions, tags, tools },
          description: { description },
          image,
          cookTime,
          prepTime,
          servings,
          title,
        } = it
        const pathImage = getImage(image)
        const id = Math.round(Math.random * 1000)
        return (
          <div className={Styles.container} key={id}>
            <Seo titlePage={title} descriptionPage={description} />
            <section className={Styles.sectionLeft}>
              <GatsbyImage
                alt={title}
                className={Styles.image}
                image={pathImage}
              />
              <div className={Styles.instruction}>
                <h3 className={Styles.subtitle}>Instructions </h3>
                {instructions.map((title, index) => (
                  <div key={`${index}-${id}`}>
                    <article>
                      <span>STEP {index + 1}</span>
                      <div className={Styles.line} />
                    </article>
                    <p>{title}</p>
                  </div>
                ))}
              </div>
            </section>
            <section className={Styles.sectionRight}>
              <h2 className={Styles.title}> {title}</h2>
              <p>{description}</p>
              <article className={Styles.prepare}>
                <div>
                  <BsClock size={23} />
                  <span>Prep Time</span>
                  <p>{prepTime} min. </p>
                </div>
                <div>
                  <BsClockHistory size={23} />
                  <span>Cook Time</span>
                  <p> {cookTime} min.</p>
                </div>
                <div>
                  <BsPeople size={23} />
                  <span>Serving</span>
                  <p> {servings}</p>
                </div>
              </article>
              <div className={Styles.tags}>
                <span>Tags:</span>
                {tags.map((it, index) => {
                  const slug = slugify(it, { lower: true })
                  return (
                    <div key={`${index}-${id}`} className={Styles.buttonTag}>
                      <Link to={`/tags/${slug}`}>{it}</Link>
                    </div>
                  )
                })}
              </div>
              <article className={Styles.ingredients}>
                <h3 className={Styles.subtitle}>Ingredients</h3>
                {ingredients.map((it, index) => (
                  <div key={`${index}-${id}`}>
                    <p>{it} </p>
                  </div>
                ))}
              </article>
              <div className={Styles.tools}>
                <h3 className={Styles.subtitle}>Tools</h3>
                {tools.map((it, index) => (
                  <div key={`${index}-${id}`}>
                    <p>{it}</p>{" "}
                  </div>
                ))}
              </div>
            </section>
          </div>
        )
      })}
    </Layout>
  )
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
