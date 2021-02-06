import React from "react"
import { graphql } from "gatsby"
import Styled from "styled-components"
import Image from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
import Layout from "../components/layout"
import ContentBlock from "../components/contentBlock"
import SEO from "../components/seo"
import Contact from "../components/contactForm"

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
const ChurchInfo = Styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 801px){
    flex-wrap: wrap;
  }
  .churchInfo{
    width: 100%;
    padding: 20px;
  }
`

const ChurchMap = Styled.iframe`
  width: 100%;
  height: 350px;
  border: none;
`
const ContactPage = ({ data }) => (
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
      <ChurchInfo>
        <Contact />
        <div className="churchInfo">
          <p>
            <strong>Our address is:</strong>
          </p>
          <p>
            7700 Woodard Drive
            <br />
            Lakewood, CO 80227
          </p>
          <ChurchMap
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3070.8329214253686!2d-105.08480848435231!3d39.675972808278864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876b81ad73d8223d%3A0xef2d6fab8083844!2sWestwoods%20Community%20Church!5e0!3m2!1sen!2sus!4v1575133644798!5m2!1sen!2sus"
            allowFullScreen
          ></ChurchMap>
        </div>
      </ChurchInfo>
    </ContentBlock>
  </Layout>
)

export default ContactPage

export const query = graphql`
  query contactQuery {
    wordpressPage(slug: { eq: "contact-us" }) {
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
