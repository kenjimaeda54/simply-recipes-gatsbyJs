import React from "react"
import Layout from "../../components/Layout"
import * as Styles from "./style.module.css"

export default function Contact() {
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
        <form className={Styles.form}>
          <label htmlFor="name">Your Name</label>
          <input id="name" type="text" name="name" />
          <label htmlFor="email">Your email</label>
          <input id="email" type="email" name="email" />
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message"></textarea>
          <button type="submit">Submit</button>{" "}
        </form>
      </section>
    </Layout>
  )
}
