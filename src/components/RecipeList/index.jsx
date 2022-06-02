import React, { Fragment } from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as Styles from "./styles.module.css"

export default function RecipeList({ recipes = [] }) {
  return (
    <div className={Styles.container}>
      {recipes.map(it => {
        const { image, title, cookTime, content, id, prepTime } = it
        const dataImage = getImage(image) //isso evita erros caso nao econtrar igames
        return (
          <Link to={`/${title}`}>
            <article className={Styles.article}>
              <GatsbyImage
                className={Styles.img}
                image={dataImage}
                alt={title}
              />
              <div>
                <h3>{title}</h3>
                <span>Prep: {prepTime}min |</span>{" "}
                <span>Cook: {cookTime}min</span>
              </div>
            </article>
          </Link>
        )
      })}
    </div>
  )
}
