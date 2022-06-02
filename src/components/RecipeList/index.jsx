import React, { Fragment } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as Styles from "./styles.module.css"

export default function RecipeList({ recipes = [] }) {
  return (
    <div className={Styles.container}>
      {recipes.map(it => {
        const { image, title, cookTime, content, id, prepTime } = it
        const dataImage = getImage(image) //isso evita erros caso nao econtrar igames
        return (
          <Fragment key={id}>
            <GatsbyImage className={Styles.img} image={dataImage} alt={title} />
            <article className={Styles.article}>
              <h3>{title}</h3>
              <span>Prep: {prepTime}min |</span>{" "}
              <span>Cook: {cookTime}min</span>
            </article>
          </Fragment>
        )
      })}
    </div>
  )
}
