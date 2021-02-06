import React from "react"
import Styled from "styled-components"
import { Link } from "gatsby"

const OnlineButton = Styled.div`
  position: fixed;
  top: 20vh;
  right: 5vw;
  background: #ED2328;
  color: #fff;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  p{
    margin: 0;
    font-weight: 600;
  }
  @media (max-width: 500px){
    top: auto;
    bottom: 2vh;
    right: 2vw;
    width: 75px;
    height: 75px;
  }
`

const WatchOnline = () => (
  <Link to="/watch-online">
    <OnlineButton>
      <p>Watch Online</p>
    </OnlineButton>
  </Link>
)

export default WatchOnline
