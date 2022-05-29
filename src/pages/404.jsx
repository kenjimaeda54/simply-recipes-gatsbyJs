import React from "react"
import Layout from "../components/Layout"
import * as Styles from "./404.module.css"

export default function Error() {
  return (
    <Layout>
      <main className={Styles.container}>
        <div>
          <h1 className={Styles.title}>404</h1>
          <h3 className={Styles.subtitle}>page not found</h3>
        </div>
      </main>
    </Layout>
  )
}
