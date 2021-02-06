import React from "react"
import { graphql } from "gatsby"
import Styled from "styled-components"
import Image from "gatsby-image"
import Layout from "../components/layout"
import ContentBlock from "../components/contentBlock"
import SEO from "../components/seo"
import VolunteerBlock from "../components/volunteerBlock"

const DefaultHeader = Styled.div`
  background: #212121;
  width: 100%;
  color: #fff;
  min-height: 30vh;
  display: flex;
  align-items: center;
  margin-top: 55px;
  .contentContainer{
    width: calc(100% - 20px);
    max-width: 800px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
  .gatsby-image-wrapper{
    margin-top: 20px;
    width: 25vh;
    margin-bottom: 20px;
  }
  .title{
    width: 100%;
    text-align: center;
    h1{
      font-size: calc(4em + 1vw);
    }
  }
`
const VolunteerPage = ({ data }) => (
  <Layout>
    <SEO title={data.wordpressPage.title} />

    {data.wordpressPage.acf.show_title && (
      <DefaultHeader>
        <div className="contentContainer">
          <Image
            fluid={data.wordpressWpMedia.localFile.childImageSharp.fluid}
          />
          <div className="title">
            <h1>{data.wordpressPage.title}</h1>
          </div>
        </div>
      </DefaultHeader>
    )}

    <ContentBlock>
      <div
        style={{ maxWidth: `100vw` }}
        dangerouslySetInnerHTML={{
          __html: data.wordpressPage.content,
        }}
      />
      <VolunteerBlock opportunity={data.allWordpressWpVolunteerOpps.edges} />
    </ContentBlock>
  </Layout>
)

export default VolunteerPage

export const query = graphql`
  query volunteerQuery {
    wordpressPage(slug: { eq: "volunteer-opportunities" }) {
      title
      content
      acf {
        title_color
        show_title
      }
    }
    allWordpressWpVolunteerOpps {
      edges {
        node {
          acf {
            when
            description
          }
          slug
          title
        }
      }
    }
    wordpressWpMedia(slug: { eq: "logo" }) {
      localFile {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  }
`
