import React, { Component } from "react"
import { graphql } from "gatsby"
import Styled from "styled-components"
import Image from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
import Layout from "../components/layout"
import ContentBlock from "../components/contentBlock"
import SEO from "../components/seo"
import StyledSection from "../components/sectionBlock"
import KzFooter from "../components/kzfooter"
import WowFooter from "../components/wowFooter"
import RentalFooter from "../components/rentalFooter"

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
  &.contain{
    &:before{
      height: 80% !important;
      top: 10% !important;
      @media(max-width: 500px){
        width: 90% !important;
        left: 5% !important;
      }
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
export default class Page extends Component {
  render() {
    const { data } = this.props
    return (
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
                  backgroundColor:
                    data.wordpressPage.acf.banner_background_color,
                }}
              >
                <div className="contentContainer">
                  <Image
                    fluid={
                      data.wordpressWpMedia.localFile.childImageSharp.fluid
                    }
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
        {data.wordpressPage.template !== "with_sections.php" ? (
          <ContentBlock>
            <div
              dangerouslySetInnerHTML={{
                __html: data.wordpressPage.content,
              }}
            />
          </ContentBlock>
        ) : (
          <div className={data.wordpressPage.slug}>
            <StyledSection
              title={data.wordpressPage.acf.section_1_header}
              text={data.wordpressPage.acf.section_1_text}
              section_image={
                data.wordpressPage.acf.section_1_image !== null &&
                data.wordpressPage.acf.section_1_image !== undefined
                  ? data.wordpressPage.acf.section_1_image.localFile
                      .childImageSharp
                  : null
              }
              image_align={data.wordpressPage.acf.section_1_image_position}
              font_color={data.wordpressPage.acf.section_1_font_color}
              bgColor={data.wordpressPage.acf.section_1_background_color}
              title_alignment={data.wordpressPage.acf.section_1_title_align}
              text_alignment={data.wordpressPage.acf.section_1_text_align}
            />

            {data.wordpressPage.acf.section_2_header && (
              <StyledSection
                title={data.wordpressPage.acf.section_2_header}
                text={data.wordpressPage.acf.section_2_text}
                section_image={
                  data.wordpressPage.acf.section_2_image !== null &&
                  data.wordpressPage.acf.section_2_image !== undefined
                    ? data.wordpressPage.acf.section_2_image.localFile
                        .childImageSharp
                    : null
                }
                image_align={data.wordpressPage.acf.section_2_image_position}
                font_color={data.wordpressPage.acf.section_2_font_color}
                bgColor={data.wordpressPage.acf.section_2_background_color}
                title_alignment={data.wordpressPage.acf.section_2_title_align}
                text_alignment={data.wordpressPage.acf.section_2_text_align}
              />
            )}
            {data.wordpressPage.acf.section_3_header && (
              <StyledSection
                title={data.wordpressPage.acf.section_3_header}
                text={data.wordpressPage.acf.section_3_text}
                section_image={
                  data.wordpressPage.acf.section_3_image !== null &&
                  data.wordpressPage.acf.section_3_image !== undefined
                    ? data.wordpressPage.acf.section_3_image.localFile
                        .childImageSharp
                    : null
                }
                image_align={data.wordpressPage.acf.section_3_image_position}
                font_color={data.wordpressPage.acf.section_3_font_color}
                bgColor={data.wordpressPage.acf.section_3_background_color}
                title_alignment={data.wordpressPage.acf.section_3_title_align}
                text_alignment={data.wordpressPage.acf.section_3_text_align}
              />
            )}
            {data.wordpressPage.acf.section_4_header && (
              <StyledSection
                title={data.wordpressPage.acf.section_4_header}
                text={data.wordpressPage.acf.section_4_text}
                section_image={
                  data.wordpressPage.acf.section_4_image !== null &&
                  data.wordpressPage.acf.section_4_image !== undefined
                    ? data.wordpressPage.acf.section_4_image.localFile
                        .childImageSharp
                    : null
                }
                image_align={data.wordpressPage.acf.section_4_image_position}
                font_color={data.wordpressPage.acf.section_4_font_color}
                bgColor={data.wordpressPage.acf.section_4_background_color}
                title_alignment={data.wordpressPage.acf.section_4_title_align}
                text_alignment={data.wordpressPage.acf.section_4_text_align}
              />
            )}
            {data.wordpressPage.acf.section_5_header && (
              <StyledSection
                title={data.wordpressPage.acf.section_5_header}
                text={data.wordpressPage.acf.section_5_text}
                section_image={
                  data.wordpressPage.acf.section_5_image !== null &&
                  data.wordpressPage.acf.section_5_image !== undefined
                    ? data.wordpressPage.acf.section_5_image.localFile
                        .childImageSharp
                    : null
                }
                image_align={data.wordpressPage.acf.section_5_image_position}
                font_color={data.wordpressPage.acf.section_5_font_color}
                bgColor={data.wordpressPage.acf.section_5_background_color}
                title_alignment={data.wordpressPage.acf.section_5_title_align}
                text_alignment={data.wordpressPage.acf.section_5_text_align}
              />
            )}
            {data.wordpressPage.acf.section_6_header && (
              <StyledSection
                title={data.wordpressPage.acf.section_6_header}
                text={data.wordpressPage.acf.section_6_text}
                section_image={
                  data.wordpressPage.acf.section_6_image !== null &&
                  data.wordpressPage.acf.section_6_image !== undefined
                    ? data.wordpressPage.acf.section_6_image.localFile
                        .childImageSharp
                    : null
                }
                image_align={data.wordpressPage.acf.section_6_image_position}
                font_color={data.wordpressPage.acf.section_6_font_color}
                bgColor={data.wordpressPage.acf.section_6_background_color}
                title_alignment={data.wordpressPage.acf.section_6_title_align}
                text_alignment={data.wordpressPage.acf.section_6_text_align}
              />
            )}
            {data.wordpressPage.acf.section_7_header && (
              <StyledSection
                title={data.wordpressPage.acf.section_7_header}
                text={data.wordpressPage.acf.section_7_text}
                section_image={
                  data.wordpressPage.acf.section_7_image !== null &&
                  data.wordpressPage.acf.section_7_image !== undefined
                    ? data.wordpressPage.acf.section_7_image.localFile
                        .childImageSharp
                    : null
                }
                image_align={data.wordpressPage.acf.section_7_image_position}
                font_color={data.wordpressPage.acf.section_7_font_color}
                bgColor={data.wordpressPage.acf.section_7_background_color}
                title_alignment={data.wordpressPage.acf.section_7_title_align}
                text_alignment={data.wordpressPage.acf.section_7_text_align}
              />
            )}
            {data.wordpressPage.acf.section_8_header && (
              <StyledSection
                title={data.wordpressPage.acf.section_8_header}
                text={data.wordpressPage.acf.section_8_text}
                section_image={
                  data.wordpressPage.acf.section_8_image !== null &&
                  data.wordpressPage.acf.section_8_image !== undefined
                    ? data.wordpressPage.acf.section_8_image.localFile
                        .childImageSharp
                    : null
                }
                image_align={data.wordpressPage.acf.section_8_image_position}
                font_color={data.wordpressPage.acf.section_8_font_color}
                bgColor={data.wordpressPage.acf.section_8_background_color}
                title_alignment={data.wordpressPage.acf.section_8_title_align}
                text_alignment={data.wordpressPage.acf.section_8_text_align}
              />
            )}
          </div>
        )}
        {data.wordpressPage.acf.custom_footer === "kidzone" && <KzFooter />}
        {data.wordpressPage.acf.custom_footer === "wow" && <WowFooter />}
        {data.wordpressPage.acf.custom_footer === "rental" && <RentalFooter />}
      </Layout>
    )
  }
}

export const query = graphql`
  query PageQuery($slug: String!) {
    wordpressPage(slug: { eq: $slug }) {
      title
      slug
      content
      template
      acf {
        banner_background_color
        custom_footer
        show_title
        title_color
        featured_image_size
        section_1_header
        section_1_text
        section_1_image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 400) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
        section_1_image_position
        section_1_font_color
        section_1_text_align
        section_1_title_align
        section_1_background_color
        section_2_header
        section_2_text
        section_2_image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 400) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
        section_2_image_position
        section_2_font_color
        section_2_background_color
        section_2_text_align
        section_2_title_align
        section_3_header
        section_3_text
        section_3_image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 400) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
        section_3_font_color
        section_3_image_position
        section_3_background_color
        section_3_text_align
        section_3_title_align
        section_4_header
        section_4_text
        section_4_image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 400) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
        section_4_image_position
        section_4_font_color
        section_4_background_color
        section_4_text_align
        section_4_title_align
        section_5_header
        section_5_text
        section_5_image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 400) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
        section_5_image_position
        section_5_font_color
        section_5_background_color
        section_5_text_align
        section_5_title_align
        section_6_header
        section_6_text
        section_6_image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 400) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
        section_6_image_position
        section_6_font_color
        section_6_background_color
        section_6_text_align
        section_6_title_align
        section_7_header
        section_7_text
        section_7_image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 400) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
        section_7_image_position
        section_7_font_color
        section_7_background_color
        section_7_text_align
        section_7_title_align
        section_8_header
        section_8_text
        section_8_image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 400) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
        section_8_image_position
        section_8_font_color
        section_8_background_color
        section_8_text_align
        section_8_title_align
      }
      featured_media {
        localFile {
          childImageSharp {
            fluid(maxWidth: 500) {
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
