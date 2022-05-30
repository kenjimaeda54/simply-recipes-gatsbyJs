import React from "react"
import { Link } from "gatsby"
import { FiAlignJustify } from "react-icons/fi"
import Logo from "../../assets/images/logo.svg" 

export default function NavBar() {
  return (
    <nav>
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
          <Link to="Contact">Contact</Link>
        </li>
      </ul>
    </nav>
  )
}
