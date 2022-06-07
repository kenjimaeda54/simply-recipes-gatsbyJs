import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import * as Styles from "./home.module.css"
import { AllRecipes } from "../components/AllRecipes"
import Seo from "../components/Seo"

export default function Home() {
  return (
    <Layout>
      <Seo titlePage="Home" descriptionPage="This home page" />
      <header className={Styles.header}>
        <StaticImage
          src="../assets/images/main.jpeg"
          alt="main image of the site"
          className={Styles.headerImage}
          layout="fullWidth"
        />
        <div className={Styles.title}>
          <h1>Simply Recipes</h1>
          <h3>No fluff, Just recipes</h3>
        </div>
      </header>
      <footer className={Styles.footer}>
        <AllRecipes />
      </footer>
    </Layout>
  )
}
