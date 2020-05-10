import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const Component = ({ title, description, keywords }) => {
  const data = useStaticQuery(graphql`
    query SiteMetadataQuery {
      site {
        siteMetadata {
          title
          description
          keywords
          author
        }
      }
    }
  `)

  const siteTitle = data.site.siteMetadata.title
  const siteDescription = data.site.siteMetadata.description
  const siteKeywords = data.site.siteMetadata.keywords
  const siteAuthor = data.site.siteMetadata.author

  const pageDescription = description || siteDescription || siteTitle
  const pageTitle = title ? `${title} - ${siteTitle}` : `${siteTitle}`
  const pageKeywords = keywords !== '' ? keywords : siteKeywords

  return (
    <>
      <Helmet
        htmlAttributes={`ja`}
        title={pageTitle}
        meta={[
          { name: 'description', content: {pageDescription} },
          { name: 'keywords', content: {pageKeywords} },
          { property: `og:title`, content: {pageTitle} },
          { property: `og:description`, content: {pageDescription} },
          { property: `og:type`, content: `website`, },
          { name: `twitter:card`, content: `summary`, },
          { name: `twitter:creator`, content: {siteAuthor} },
          { name: `twitter:title`, content: {pageTitle} },
          { name: `twitter:description`, content: {pageDescription} },
        ]}
      />
    </>
  )
}

export default Component