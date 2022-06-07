import React from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    site {
      siteMetadata {
        description
        title
      }
    }
  }
`

export default function Seo({ titlePage, descriptionPage }) {
  const {
    site: {
      siteMetadata: { title, description },
    },
  } = useStaticQuery(query)
  const descriptionContent = descriptionPage ?? description

  return (
    <Helmet
      htmlAttributes={{ lang: "en" }}
      title={`${titlePage} | ${title} `}
      meta={[{ name: "description", content: descriptionContent }]}
    />
  )
}
