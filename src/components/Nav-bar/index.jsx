import React from "react"
import { Link } from "gatsby"

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
