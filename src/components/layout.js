import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import Styled from "styled-components"
import Header from "./header"
// import DirectionModal from "./directionModal"
import "./layout.css"
import "./menu.css"

const Footer = Styled.footer`
  background: #000;
  color: #fff;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 468px){
    flex-wrap: wrap;
  }
  .footerLogoContainer{
    width: 100px;
  }
  p{
    margin: 0;
    line-height: 2;
    font-size: 1.4em;
  }
  .directions{
    cursor: pointer;
    p:hover{
      text-decoration: underline;
    }
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
      wordpressWpApiMenusMenusItems(slug: { eq: "menu-header" }) {
        items {
          title
          object_slug
          object_id
          wordpress_children {
            title
            object_slug
            object_id
            url
            object
          }
        }
      }
      footerLogo: wordpressWpMedia(slug: { eq: "logo" }) {
        localFile {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <Header
        siteTitle={data.site.siteMetadata.title}
        siteDesc={data.site.siteMetadata.description}
        menu={data.wordpressWpApiMenusMenusItems.items}
      />
      <div>
        <div
          className="page-content"
          style={{
            flex: `auto`,
            display: `flex`,
            flexFlow: `row wrap`,
            justifyContent: `space-between`,
            alignItems: `flex-start`,
          }}
        >
          <main style={{ flex: 1 }}>{children}</main>
        </div>
        <Footer>
          <div className="footerLogoContainer">
            <Image fluid={data.footerLogo.localFile.childImageSharp.fluid} />
          </div>
          <div>
            <p>©{new Date().getFullYear()} Westwoods Community Church</p>
            {/* <DirectionModal /> */}
            <p>7700 W. Woodard Drive | Lakewood | CO | 80227 | 303.279.1616</p>
          </div>
        </Footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
