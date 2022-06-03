import { Link } from "gatsby"
import React, { Fragment } from "react"
import { listTag } from "../../utils/listTag"
import * as Styles from "./styles.module.css"

export default function TagList({ recipes }) {
  const allTags = listTag(recipes)
  return (
    <>
      {allTags.map((it, index) => {
        const [text, quantity] = it
        const id = `${Math.round(Math.random() * 3000)}-${text}`
        return (
          <Link key={id} to={`/${text}`}>
            <div className={Styles.container}>
              <span className={Styles.text}>{text}</span>
              <span className={Styles.text}>({quantity})</span>
            </div>
          </Link>
        )
      })}
    </>
  )
}
