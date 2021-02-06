import React from "react"
import { graphql } from "gatsby"
import Styled from "styled-components"
import Image from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
import Layout from "../components/layout"
import ContentBlock from "../components/contentBlock"
import SEO from "../components/seo"
import MCContainer from "../components/mcBlock"

const HeaderSection = Styled(BackgroundImage)`
  position: relative;
  min-height: 30vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px 0;
  padding: 0; 
  text-align: center;
  background-size: cover; 
  margin-top: 55px; 
  &.contain{
    max-width: calc(100vw - 40px);
    min-height: calc(30vh - 60px);
    margin: 85px auto 30px;
    &:before{
      max-width: calc(100vw - 40px);
    }
  }
  h1{
    font-size: calc(4em + 1vw);
    text-shadow:
		-1px -1px 0 #000,
		1px -1px 0 #000,
		-1px 1px 0 #000,
		1px 1px 0 #000;
  }
`

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
    width: 12vw;
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
const MCPage = ({ data }) => (
  <Layout>
    <SEO title={data.wordpressPage.title} />
    {data.wordpressPage.featured_media ? (
      <HeaderSection
        fluid={
          data.wordpressPage.featured_media.localFile.childImageSharp.fluid
        }
        style={{
          backgroundSize: data.wordpressPage.acf.featured_image_size,
        }}
        className={data.wordpressPage.acf.featured_image_size}
      >
        {data.wordpressPage.acf.show_title && (
          <h1 style={{ color: data.wordpressPage.acf.title_color }}>
            {data.wordpressPage.title}
          </h1>
        )}
      </HeaderSection>
    ) : (
      <>
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
      </>
    )}
    <ContentBlock>
      <div
        style={{ maxWidth: `100vw` }}
        dangerouslySetInnerHTML={{
          __html: data.wordpressPage.content,
        }}
      />
      <MCContainer mc={data.allWordpressWpMc.edges} />
    </ContentBlock>
  </Layout>
)

export default MCPage

export const query = graphql`
  query MCQuery {
    wordpressPage(slug: { eq: "missional-communities" }) {
      title
      slug
      content
      template
      featured_media {
        localFile {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
      acf {
        featured_image_size
        title_color
        show_title
      }
    }
    allWordpressWpMc(sort: { fields: acf___night_of_the_week, order: ASC }) {
      edges {
        node {
          acf {
            area
            leader_email
            leader_email_2
            leader_phone_number
            leader_phone_number_2
            meeting_time
            night_of_the_week
          }
          title
          id
          wordpress_id
        }
      }
    }
  }
`
