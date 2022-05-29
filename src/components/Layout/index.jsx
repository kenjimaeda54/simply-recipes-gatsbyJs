import React from "react"
import Footer from "../Footer"
import NavBar from "../Nav-bar"
//precisa importar em algum arquivo que se repete para pegar css global
import "../../global/index.css"
import "../../global/theme.css"
import * as Styles from "./style.module.css"

export default function Layout({ children }) {
  return (
    <main className={Styles.container}>
      <content>
        <NavBar />
        {children}
      </content>
      <Footer />
    </main>
  )
}
