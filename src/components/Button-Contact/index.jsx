import React from "react"
import * as Styles from "./styles.module.css"

export default function ButtonContact({ children, ...rest }) {
  return (
    <button {...rest} className={Styles.contact}>
      {children}
    </button>
  )
}
