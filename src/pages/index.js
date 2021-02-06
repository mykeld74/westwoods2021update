import React, { useState } from "react"
import { Link, graphql } from "gatsby"
import Styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import Image from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
// import DirectionModal from "../components/directionModal"
import Modal from "../components/modal"
import WatchOnline from "../components/watchOnlineButton"

const BGContainer = Styled(BackgroundImage)`
  min-height: calc(100vh - 85px);
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;  
  background: 50% 100%/contain no-repeat ;

  .headline, .subhead, .logoContainer{
    width: 100%;
  }
  .headline{
    font-weight: 500;
    .wwcc{
      font-size: 6em;
      @media (max-width: 500px){
        font-size: 4em;
      }
    }
    @media (max-width: 500px){
      margin-top: 40px;
    }
  }
  .sswlContainer{
    width: calc(100% - 20px);
    margin: 0 auto 30vh;

  }
  .sswl, .sswlOr{
    font-family: 'Teko', 'IBM Plex Sans', sans-serif;
    font-size: 9em;
    line-height: 1.2;
    color: #121212;
    margin: 0;
    padding: 0;
    -webkit-text-stroke: 2px #fff;
    @media (max-width: 500px){
      font-size: 7em;
    }
  }
  .sswlOr{
    font-size: 5em;
    line-height: 1.2;
  }
  .subhead{
    /* margin-bottom: 40px;
    margin: 0;
    min-height: 30vh;
    @media (max-width: 500px){
      min-height: 20vh;
    } */
    display: none;
  }
  .logoContainer{
    width: calc(100% - 50px);
    max-width: 400px;
    margin-bottom: 0;
    margin-top: -55px;
    @media(max-width: 485px){
      margin-top: -20px;
    }
    img{
      margin-bottom: 0;
    }
  }
  .youBelong{
    font-family: Caveat,cursive;
    font-size: calc(5rem + 2vw);
    line-height: 1em;
    padding: 0;
    color: #fefefe;
    text-shadow: 0 0 2px #0a0a0a;
  }
`

// const ServiceSundayBanner = Styled.div`
//   width: 100%;
//   background: rgba(255, 255, 255, 0.75);
//   margin-top: 22vh;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   border-top: 5px solid #ED2328;
//   padding: 20px;
//   div{
//     text-align: left;
//     margin-left: 20px;
//     p{
//       margin: 0;
//       font-size: 2.4em;
//       line-height: 1.3;

//     }
//   }
//   @media (max-width: 801px) {
//     flex-wrap: wrap;
//     margin-top: 0;
//   }
// `
// const SOC = Styled(Image)`
//   width: 80vw;
//   max-width: 300px;
// `
const RedLine = Styled(Image)`
  width: 100%;
  max-width: 450px;
  margin: -20px auto 0;
`
// const WestwoodsHealthy = Styled(Image)`
//   width: 100%;
// `
const LinkSection = Styled.div`
  padding: 10px 0;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  background: #121212;  
  @media (max-width: 768px){
    grid-template-columns: 1fr;
  }
  a, .directions{
    width: 100%;
    color: #fff;
    font-size: calc(1em + .5vw);
    text-shadow: 0 0 2px #0a0a0a;
    font-weight: 700;
    transition: color .3s ease-in-out;
    :hover{
      color: #ff2c00;
    }
  }
  .linkBlock{
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 35vh;
    width: 100%;
    text-align: center;
    cursor: pointer;
  }
`

const LinkBlock = Styled(BackgroundImage)`
  width: 100%;
  background-position: 50% 0;
`

const WeAreBlock = Styled(BackgroundImage)`
  background-position: 50% 0;
  min-height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 30px 0;
  h1{
    color: #000;
    text-align: center;
    width: 100%;
  }
  color: #fff;
  .center{
    text-align: center;
  }
  .westwoodsIs{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: calc(100% - 20px);
    max-width: 1080px;
    margin: auto;
  }
  .weAre{
    background: rgba(0, 0, 0, 0.6);
    box-sizing: border-box;
    padding: 20px;
  }
  .block1{
    width: 35%;
    margin-bottom: 15px;
    @media(max-width: 485px){
      width: 100%;
    }
  }
  .block2{
    width: 60%;
    margin-bottom: 15px;
    @media(max-width: 485px){
      width: 100%;
    }
  }
  .block3{
    width: 100%;
  }
`
const CovidBanner = Styled.div`
  display: flex;
  align-items: center;  
  margin-top: 55px;
  background: #ED2328;
  width: 100vw;
  color: #fff;
  z-index: 1;
  height: 30px;
  cursor: pointer;
  h4{
    margin: 0;
  }
  .container{
    width: calc(100vw - 40px);
    margin: 0 auto;
    padding-left: 10px;
  }
  .needAssistance{
    text-align: right;
    padding-right: 10px;
    a{
      color: #fff;
    }
  }
  
`
const SundayBanner = Styled(CovidBanner)`
  margin-top: 0;
  height: auto;
  justify-content: center;
  padding: 15px 0;
  h2{
    margin: 0;
    padding: 0;
    text-align: center;
  }
`

const Healthy = Styled.div`
  h1, h2, h3, h4{
    text-transform: uppercase;
  }
  .black{
    background: #000;
    padding: 2vw;
  }
  .red{
    background: #F00E0F;
    padding: 2vw;
    h4{
      margin: 0 0 10px 0;
    }
  }
`

// const Banner = Styled.div`
//   width: 100%;
//   padding: 0 5vw;
//   background: #fff;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   @media (max-width: 468px){
//     flex-wrap: wrap;
//   }
//   .impactLogoContainer{
//     width: 40%;
//     @media (max-width: 468px){
//     width: 100%;
//   }
//   }
//   .impactInfo{
//     width: 55%;
//     @media (max-width: 468px){
//       margin-top: 20px;
//     width: 100%;
//   }
//   }
// `
const HomePage = ({ data }) => {
  const [isCovidVisible, setIsCovidVisible] = useState(false)
  const [isSafetyVisible, setIsSafetyVisible] = useState(false)
  return (
    <Layout>
      <SEO title="Home" />
      <CovidBanner>
        <div
          className="container"
          onClick={() => setIsCovidVisible(true)}
          role="button"
          tabIndex={0}
        >
          <h4>Our Response to Covid-19&raquo;</h4>
        </div>
      </CovidBanner>
      <WatchOnline />
      <BGContainer
        fluid={
          data.wordpressPage.featured_media.localFile.childImageSharp.fluid
        }
      >
        <div className="headline">
          <h1 className="wwcc">Westwoods Community Church</h1>
        </div>
        <div className="sswlContainer">
          <h2 className="sswl">Stay Safe</h2>
          <h2 className="sswl">Watch Live</h2>
          <RedLine fluid={data.redline.localFile.childImageSharp.fluid} />
        </div>
        <div className="subhead">
          {/* <h2 className="youBelong">You Belong Here!</h2> */}
        </div>
      </BGContainer>
      <SundayBanner onClick={() => setIsSafetyVisible(true)}>
        <h2>Click Here to Learn How we are staying HEALTHY in the building!</h2>
      </SundayBanner>

      <LinkSection>
        <a
          href="https://www.facebook.com/pg/WestwoodsCommunityChurch/videos/?ref=page_internal"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkBlock
            fluid={data.sundayMorning.localFile.childImageSharp.fluid}
            className="missSunday linkBlock"
          >
            <div>
              <p>Miss a Sunday?</p>
              <p>Watch it here.</p>
            </div>
          </LinkBlock>
        </a>
        <Link to="/our-current-series">
          <LinkBlock
            fluid={data.currentSeries.localFile.childImageSharp.fluid}
            className="linkBlock"
          >
            <p>Current Series</p>
          </LinkBlock>
        </Link>
        {/* <LinkBlock
            fluid={data.westwoodsBuilding.localFile.childImageSharp.fluid}
            className="linkBlock"
          >
            <OurServices />
          </LinkBlock> */}
      </LinkSection>
      {/* <div
          style={{ maxWidth: `100vw` }}
          dangerouslySetInnerHTML={{
            __html: data.wordpressPage.content,
          }}
        /> */}

      <WeAreBlock fluid={data.remoteWorship.localFile.childImageSharp.fluid}>
        <h1>Westwoods is:</h1>
        <div className="westwoodsIs">
          <div className="weAre block1">
            <p>
              A non-denominational, intergenerational community of imperfect
              people seeking to be changed by the person of Jesus Christ.
            </p>
          </div>
          <div className="weAre block2">
            <p>
              A church being built on the foundation of authentic relationships
              and the relevant application of God’s Word. Our hope is to be a
              challenging community for believers, a safe community for
              spiritual seekers and a powerful picture of grace and love to our
              community.
            </p>
          </div>
          <div className="weAre block3">
            <p>
              <strong>
                Maybe you’ve said no to church, but what if church could be
                different?
              </strong>
            </p>
            <ul>
              <li>
                Shouldn’t church be a place of life, connection, excitement and
                enthusiasm?
              </li>
              <li>
                Shouldn’t church be a place where people can feel and experience
                a real connection with God?
              </li>
              <li>
                Shouldn’t church be a place that positively shapes our
                communities?
              </li>
            </ul>
            <h4 className="center">WE THINK SO.</h4>
          </div>
        </div>
      </WeAreBlock>
      <Modal isVisible={isCovidVisible} setIsVisible={setIsCovidVisible}>
        <div>
          <h2>We will not be hosting a service at our building so...</h2>
          <h2>Let’s start a bunch of churches this week!</h2>
          <h3>We want to invite you to be a Host Home.</h3>
          <h3>Here’s what that looks like:</h3>
          <p>
            We long to continue doing life together and that is going to happen
            digitally along with smaller gatherings in person. It is easy for
            the fears to hold us back and cause us to not just social distance,
            but isolate. We do not want fear to control our gatherings, also we
            do not want to disregard the reality of the situation, so we are
            deciding to proceed with wisdom and caution.
          </p>
          <p>
            Hosting does not mean you have to have a group of people that you do
            not know at your house adding to any concerns you may have about the
            spreading of the virus. Hosting can simply be your family gathered
            together, you and your roommates doing life intentionally, you and
            your neighbors, etc. Our hope is to have over 50 small groups
            gathering across the Denver Area, around the state, the country and
            around the world meeting in smaller groups doing life together,
            sharing meals, and being the body of Christ to our friends and
            neighbors.
          </p>

          <p>
            We will be broadcasting live from a home as well so what you are
            experiencing is as close as can be to what you are watching. Let us
            know in the upcoming weeks if you’re open to us broadcasting from
            your spot!
          </p>
          <Link to="/host-church">
            <p>Click here to learn more about what it looks like to host.</p>
          </Link>
        </div>
      </Modal>
      <Modal isVisible={isSafetyVisible} setIsVisible={setIsSafetyVisible}>
        <Healthy>
          <div className="black">
            <h1 className="title">Staying Healthy At Westwoods</h1>
            <h3 className="subtitle">
              Here is what we are doing in the building to stay healthy and open
            </h3>
            <h4>Service</h4>
            <p>
              <strong>9:00am</strong> will have limited seating for those who
              desire to attend. There will be no kidzone available.
            </p>
            <p>
              <strong>10:45am</strong> will be online only
            </p>
          </div>
          <div className="red">
            <h4>Seats</h4>
            <p>
              We have the seats spaced out for physical distancing, please leave
              2 chairs between your party and another party.
            </p>
            <h4>Masks</h4>
            <p>
              Please wear masks inside until you get to your seat. Singing has
              been shown to spread droplets way farther than 6 feet, so we are
              asking people to wear masks while singing.
            </p>
            <h4>Food & Drink</h4>
            <p>We are not able to serve coffee, donuts and bagels. SORRY!</p>
            <h4>Before and After</h4>
            <p>
              Before and after service we can't hang out inside. So, we are
              asking everyone to move outside after services.
            </p>
          </div>
        </Healthy>
        {/* <WestwoodsHealthy
          fluid={data.WestwoodsHealthy.localFile.childImageSharp.fluid}
        /> */}
      </Modal>
    </Layout>
  )
}

export const query = graphql`
  query HomePageQuery {
    wordpressPage(slug: { eq: "home" }) {
      title
      content
      featured_media {
        source_url
        localFile {
          childImageSharp {
            fluid(maxHeight: 500) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
    logo: wordpressWpMedia(slug: { eq: "logo" }) {
      localFile {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
    sundayMorning: wordpressWpMedia(slug: { eq: "sunday-morning" }) {
      localFile {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
    currentSeries: wordpressWpMedia(slug: { eq: "current-series" }) {
      localFile {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
    westwoodsBuilding: wordpressWpMedia(slug: { eq: "westwoods-building" }) {
      localFile {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
    worship: wordpressWpMedia(slug: { eq: "worship" }) {
      localFile {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
    redline: wordpressWpMedia(slug: { eq: "redline" }) {
      localFile {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
    skyline: wordpressWpMedia(slug: { eq: "skyline" }) {
      localFile {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
    WestwoodsHealthy: wordpressWpMedia(slug: { eq: "westwoodshealthy" }) {
      localFile {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
    SOC: wordpressWpMedia(slug: { eq: "soc" }) {
      localFile {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
    remoteWorship: wordpressWpMedia(slug: { eq: "remoteworship" }) {
      localFile {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  }
`

export default HomePage
