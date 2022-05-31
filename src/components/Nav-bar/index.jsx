import React from "react"
import { Link } from "gatsby"
import { FiAlignJustify } from "react-icons/fi"
import Logo from "../../assets/images/logo.svg"
import * as Styles from "./styles.module.css"

export default function NavBar() {
  return (
    <div className={Styles.container}>
      <section className={Styles.section}>
        <img alt="logo" src={Logo} width={200} />
        <nav>
          <ul className={Styles.list}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="About">About</Link>
            </li>
            <li>
              <Link to="Tags">Tags</Link>
            </li>
            <li>
              <Link to="Recipes">Recipes</Link>
            </li>
            <li>
              <Link to="Contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </section>
      <button className={Styles.contact}>
        <span>Contact</span>
      </button>
    </div>
  )
}
