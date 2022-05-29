import React from "react"
import * as Styles from "./style.module.css"

export default function Footer() {
  return (
    <footer className={Styles.footer}>
      <p>
        &copy;{new Date().getFullYear()}
        <span className={Styles.span}> SimplyRecipes </span>
        Built with
        <a href="https://www.gatsbyjs.com/"> Gatbsy </a>{" "}
      </p>
    </footer>
  )
}
