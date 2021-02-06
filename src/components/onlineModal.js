import React, { useState } from "react"
import Styled from "styled-components"
import { Link } from "gatsby"

const Covid = Styled.div` 
  box-sizing: border-box;
  width: 100%;
  background: #ED2328;
  color: #fff;
  min-height: 50px;
  text-align: center;
  padding: 15px 0;
  cursor: pointer;
  h2{
    margin: 0;
  }
`

const Response = Styled.div`
  position: absolute;
  top: 0;
  padding-top: 70px;
  width: 100%;
  background: #cccccc90;
  min-height: 200vh;
  z-index: 1;
  .container{
    position: relative;
    width: calc(100vw - 20px);
    max-width: 760px;
    margin: 20px auto;
    background: #111;
    color: #fff;
    padding: 20px;
    border-radius: 10px

  }
`

const OurServices = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  return (
    <Covid onClick={toggle}>
      <div className="container">
        <h2>Click Here to Learn More about our Sunday Services!</h2>
      </div>
      {isOpen && (
        <Response>
          <div className="container">
            <h2>We will not be hosting a service at our building so...</h2>
            <h2>Let’s start a bunch of churches this week!</h2>
            <h3>We want to invite you to be a Host Home.</h3>
            <h3>Here’s what that looks like:</h3>
            <p>
              We long to continue doing life together and that is going to
              happen digitally along with smaller gatherings in person. It is
              easy for the fears to hold us back and cause us to not just social
              distance, but isolate. We do not want fear to control our
              gatherings, also we do not want to disregard the reality of the
              situation, so we are deciding to proceed with wisdom and caution.
            </p>
            <p>
              Hosting does not mean you have to have a group of people that you
              do not know at your house adding to any concerns you may have
              about the spreading of the virus. Hosting can simply be your
              family gathered together, you and your roommates doing life
              intentionally, you and your neighbors, etc. Our hope is to have
              over 50 small groups gathering across the Denver Area, around the
              state, the country and around the world meeting in smaller groups
              doing life together, sharing meals, and being the body of Christ
              to our friends and neighbors.
            </p>

            <p>
              We will be broadcasting live from a home as well so what you are
              experiencing is as close as can be to what you are watching. Let
              us know in the upcoming weeks if you’re open to us broadcasting
              from your spot!
            </p>
            <Link to="/host-church">
              <p>Click here to learn more about what it looks like to host.</p>
            </Link>
          </div>
        </Response>
      )}
    </Covid>
  )
}

export default OurServices
