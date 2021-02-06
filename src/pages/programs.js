import React from "react"
import { graphql } from "gatsby"
import Styled from "styled-components"
import Image from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
import Layout from "../components/layout"
import ContentBlock from "../components/contentBlock"
import SEO from "../components/seo"
import ProgramsList from "../components/programsList"

const BGSection = Styled(BackgroundImage)`
  box-sizing: border-box;
  position: relative;
  min-height: 30vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 0;
  margin: 0; 
  text-align: center;
  margin-top: 55px;
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
const ProgramsBlock = Styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 4vh;
  
`
const ProgramPage = ({ data }) => (
  <Layout>
    <SEO title={data.wordpressPage.title} />

    {data.wordpressPage.featured_media ? (
      <BGSection
        fluid={
          data.wordpressPage.featured_media.localFile.childImageSharp.fluid
        }
        style={{
          backgroundSize: data.wordpressPage.acf.featured_image_size,
          backgroundColor: data.wordpressPage.acf.banner_background_color,
        }}
        className={data.wordpressPage.acf.featured_image_size}
      >
        {data.wordpressPage.acf.show_title && (
          <h1 style={{ color: data.wordpressPage.acf.title_color }}>
            {data.wordpressPage.title}
          </h1>
        )}
      </BGSection>
    ) : (
      <>
        {data.wordpressPage.acf.show_title && (
          <DefaultHeader
            style={{
              backgroundColor: data.wordpressPage.acf.banner_background_color,
            }}
          >
            <div className="contentContainer">
              <Image
                fluid={data.wordpressWpMedia.localFile.childImageSharp.fluid}
              />
              <div className="title">
                <h1 style={{ color: data.wordpressPage.acf.title_color }}>
                  {data.wordpressPage.title}
                </h1>
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
      <ProgramsBlock>
        <ProgramsList />
      </ProgramsBlock>
    </ContentBlock>
  </Layout>
)

export default ProgramPage

export const query = graphql`
  query programQuery {
    wordpressPage(slug: { eq: "programs" }) {
      title
      content
      acf {
        title_color
        show_title
      }
      featured_media {
        localFile {
          childImageSharp {
            fluid(maxWidth: 1600) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
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
