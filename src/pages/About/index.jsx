import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import ButtonContact from "../../components/Button-Contact"
import Layout from "../../components/Layout"
import * as Styles from "./styles.module.css"

//plugin imagem
//https://www.gatsbyjs.com/plugins/gatsby-plugin-image
//https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-plugin-image/
export default function About() {
  return (
    <Layout>
      <section className={Styles.section}>
        <article className={Styles.article}>
          <h2>I'm baby coloring book poke taxidermy</h2>
          <p>
            Taxidermy forage glossier letterpress heirloom before they sold out
            you probably haven't heard of them banh mi biodiesel chia.
          </p>
          <p>
            Taiyaki tumblr flexitarian jean shorts brunch, aesthetic salvia
            retro.
          </p>
          <p>
            <ButtonContact>
              <Link className={Styles.contactLink} to="Contact">
                Contact
              </Link>
            </ButtonContact>
          </p>
        </article>
        {/*as e o elemento que eele vai referenciar,placeholder e fundo quando imagem esta carregando
           default e constraint   */}
        <StaticImage
          src="../../assets/images/about.jpeg"
          alt="Person pull salt bawl"
          placeholder="blurred"
          className={Styles.img}
          as="section"
        />
      </section>
    </Layout>
  )
}
