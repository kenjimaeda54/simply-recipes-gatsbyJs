import React, { useState } from "react"
import { Link } from "gatsby"
import { FiAlignJustify } from "react-icons/fi"
import Logo from "../../assets/images/logo.svg"
import * as Styles from "./styles.module.css"
import ButtonContact from "../Button-Contact"

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
          <div nav="false">
            <ButtonContact onClick={handleShowNavMobile}>
              <FiAlignJustify size={24} />
            </ButtonContact>
          </div>
        </header>
        <nav>
          <ul className={Styles.list}>
            <li>
              <Link activeClassName={Styles.active} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link activeClassName={Styles.active} to="About">
                About
              </Link>
            </li>
            <li>
              <Link activeClassName={Styles.active} to="Tags">
                Tags
              </Link>
            </li>
            <li>
              <Link activeClassName={Styles.active} to="Recipes">
                Recipes
              </Link>
            </li>
          </ul>
        </nav>
        <nav show={showNavMobile} className={Styles.mobile}>
          <ul>
            <li>
              <Link activeClassName={Styles.active} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link activeClassName={Styles.active} to="About">
                About
              </Link>
            </li>
            <li>
              <Link activeClassName={Styles.active} to="Tags">
                Tags
              </Link>
            </li>
            <li>
              <Link activeClassName={Styles.active} to="Recipes">
                Recipes
              </Link>
            </li>
            <li nav="false">
              <ButtonContact>
                <Link className={Styles.buttonLink} to="Contact">
                  Contact
                </Link>
              </ButtonContact>
            </li>
          </ul>
        </nav>
      </section>
      <div nav="true">
        <ButtonContact>
          <span className={Styles.spanContact}>Contact</span>
        </ButtonContact>
      </div>
    </div>
  )
}
