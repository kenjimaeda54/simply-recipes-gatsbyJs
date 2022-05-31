import React, { useState } from "react"
import { Link } from "gatsby"
import { FiAlignJustify } from "react-icons/fi"
import Logo from "../../assets/images/logo.svg"
import * as Styles from "./styles.module.css"

export default function NavBar() {
  const [showNavMobile, setShowNavMobile] = useState("false")

  const handleShowNavMobile = () =>
    setShowNavMobile(old => {
      old === "true" ? setShowNavMobile("false") : setShowNavMobile("true")
    })

  return (
    <div className={Styles.container}>
      <section className={Styles.section}>
        <img nav="true" alt="logo" src={Logo} width={200} />
        <header className={Styles.header}>
          <img alt="logo" src={Logo} width={200} />
          <button
            nav="false"
            onClick={handleShowNavMobile}
            className={Styles.contact}
          >
            <FiAlignJustify size={24} />
          </button>
        </header>
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
          </ul>
        </nav>
        <nav show={showNavMobile} className={Styles.mobile}>
          <ul>
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
              <button nav="false" className={Styles.contact}>
                <Link to="Contact">Contact</Link>
              </button>
            </li>
          </ul>
        </nav>
      </section>
      <button nav="true" className={Styles.contact}>
        <span>Contact</span>
      </button>
    </div>
  )
}
