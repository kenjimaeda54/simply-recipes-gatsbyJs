import React from "react"
import Footer from "../Footer"
import NavBar from "../Nav-bar"

export default function Layout({ children }) {
  return (
    <main>
      <NavBar />
      {children}
      <Footer />
    </main>
  )
}
