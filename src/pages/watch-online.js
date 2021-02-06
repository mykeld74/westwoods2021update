import React, { useState } from "react"
import Styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Modal from "../components/modal"
import StyledLink from "../components/styledLink"
import ProgramsList from "../components/programsList"

const VideoBG = Styled.div`
  width: 100vw;
  background: #000;
  border-bottom: 4px solid #777;
`
const StyledIframeContainer = Styled.div`
  box-sizing: border-box;
  width: 100%;
  position: relative;
  /* padding-bottom: 56.25%;  */
  margin: 0 auto 0;
  border: none;
  height: calc(56.25vw - 50px);
  @media (max-width: 501px){
    height: 56.25vw;
  }
`

const StyledIframe = Styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  
`
const LinkContainer = Styled.div`
  width: 100vw;
  background: #000;
  display: flex;
  justify-content: space-around;
  padding-top: 20px;
  padding-bottom: 20px;
  @media (max-width: 800px){
    flex-wrap: wrap;
  }
`
const TopLinksBlock = Styled.div`
  width: 100vw;
  background: #000;
  color: #fff;
  text-align: center;
  margin-top: 50px;
  border-bottom: 4px solid #777;
`

const TopLink = Styled(StyledLink)`
  height: 50px;
  margin-top: 0;
  padding: 0;
  @media (max-width: 801px){
    margin-top: 10px;
  }
`

const WatchOnline = ({ data }) => {
  const [isProgramsVisible, setIsProgramsVisibile] = useState(false)
  return (
    <Layout>
      <SEO title="Watch Online" />
      <TopLinksBlock>
        <h2>View our previous videos.</h2>
        <LinkContainer>
          <TopLink
            href="https://www.facebook.com/pg/WestwoodsCommunityChurch/videos/?ref=page_internal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>Watch all our videos on Facebook!</p>
          </TopLink>
          <TopLink
            href="https://www.youtube.com/channel/UCJkTcdfWk2DWGDuqJUOsrxA/videos"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>Watch all our videos on YouTube!</p>
          </TopLink>
        </LinkContainer>
      </TopLinksBlock>
      <VideoBG>
        <StyledIframeContainer>
          <StyledIframe
            src="https://embed.restream.io/player/index.html?token=64c28a127d3c4afc2ff534392305b010"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></StyledIframe>
        </StyledIframeContainer>
      </VideoBG>
      <Modal isVisible={isProgramsVisible} setIsVisible={setIsProgramsVisibile}>
        <h2>Click below to view or download the program.</h2>
        <ProgramsList />
      </Modal>
      <LinkContainer>
        <StyledLink onClick={() => setIsProgramsVisibile(true)}>
          <p>Get Programs Here</p>
        </StyledLink>
      </LinkContainer>
    </Layout>
  )
}

export default WatchOnline
