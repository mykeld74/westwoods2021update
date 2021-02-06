import React from "react"
import Styled from "styled-components"
import { Link } from "gatsby"

const WowFooterContainer = Styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #777;
  @media (max-width: 468px){
    flex-wrap: wrap;
  }
`
const WowLink = Styled.div`
  padding: 20px;
  text-align: center;
  
  p{
    color: #f785b5;
    font-weight: 700;
    transition: all .3s ease-in-out;
    margin-bottom: 0;
  }
  .wowIcon{
    fill: #f785b5;
    transition: all .3s ease-in-out;
  }
  &:hover{
    p{
      color: #f45598;
    }
    .wowIcon{
      fill: #f45598;
    }
  }
  .wowSvg{
    height: 7vh;
  }
`

const WowFooter = () => (
  <>
    <WowFooterContainer>
      <WowLink>
        <Link to="/women-of-westwoods">
          <svg version="1.1" viewBox="0 0 32 32" className="wowSvg">
            <title>Women of Westwoods Home</title>
            <path
              className="wowIcon"
              d="M32 18.451l-16-12.42-16 12.42v-5.064l16-12.42 16 12.42zM28 18v12h-8v-8h-8v8h-8v-12l12-9z"
            ></path>
          </svg>
          <p>WoW Home</p>
        </Link>
      </WowLink>
      <WowLink>
        <Link to="/womens-bible-study">
          <svg version="1.1" viewBox="0 0 15.438 15.438" className="wowSvg">
            <title>Women's Bible Study</title>
            <path
              className="wowIcon"
              d="M13.926,14.284V0.525C13.926,0.106,13.402,0,13.402,0H3.085C1.512,0,1.512,1.452,1.512,1.452v13.427
		c0,0.308,0.249,0.559,0.56,0.559h10.069c0.309,0,0.559-0.251,0.559-0.559l0.666-0.002C13.967,14.877,13.926,14.284,13.926,14.284z
		 M8.02,6.846v6.06H6.861v-6.06H4.307V5.687h2.554v-2.05H8.02v2.05h2.553l0.001,1.159C10.574,6.846,8.02,6.846,8.02,6.846z
		 M13.278,13.554c0,0-0.1,0.364-0.578,0.364v-3.907V2.035c0-0.309-0.25-0.559-0.559-0.559L2.613,1.471
		c0-0.384,0.578-0.579,0.578-0.579H12.7c0.596,0,0.578,0.525,0.578,0.525S13.278,13.554,13.278,13.554z"
            />
          </svg>
          <p>Women's Bible Study</p>
        </Link>
      </WowLink>
      <WowLink>
        <Link to="/mom2mom">
          <svg version="1.1" viewBox="0 0 80 32" className="wowSvg">
            <title>Mom2Mom</title>
            <path
              className="wowIcon"
              d="M30.395 32c0.229-2.259 0.901-4.318 1.926-6.152l-0.041 0.080q1.58-2.887 6.242-7.643c1.646-1.588 3.153-3.294 4.516-5.113l0.079-0.11c0.699-1.066 1.125-2.366 1.155-3.763l0-0.008c0.006-0.090 0.010-0.194 0.010-0.3 0-1.080-0.379-2.072-1.010-2.851l0.007 0.008c-0.708-0.682-1.672-1.103-2.734-1.103-1.088 0-2.073 0.441-2.786 1.154v0c-0.739 1.023-1.182 2.303-1.182 3.686 0 0.054 0.001 0.108 0.002 0.161l-0-0.008-5.537-0.62q0.501-5.096 3.1-7.253c1.517-1.264 3.459-2.066 5.584-2.165l0.021-0.001h-15.966l-6.437 21.834-6.505-21.834h-10.837v32h6.726v-25.189l7.091 25.189h6.972l7.117-25.189v25.189zM69.452 0l-6.429 21.834-6.505-21.834h-15.006c2.303 0.056 4.371 1.020 5.867 2.546l0.001 0.001c1.516 1.578 2.449 3.726 2.449 6.091 0 0.086-0.001 0.172-0.004 0.257l0-0.013c0 0.020 0 0.044 0 0.068 0 1.449-0.255 2.839-0.723 4.126l0.027-0.084c-0.598 1.553-1.344 2.896-2.249 4.114l0.032-0.046c-1.156 1.497-2.347 2.827-3.625 4.067l-0.010 0.009q-2.624 2.658-3.329 3.524c-0.404 0.497-0.778 1.053-1.101 1.641l-0.029 0.058h11.040v5.656h2.548v-25.206l7.091 25.189h6.972l7.117-25.189v25.189h6.726v-32z"
            ></path>
          </svg>
          <p>Mom2Mom</p>
        </Link>
      </WowLink>
      <WowLink>
        <Link to="/remade-fitness">
          <svg version="1.1" viewBox="0 0 35 32" className="wowSvg">
            <title>Fitness</title>
            <path
              className="wowIcon"
              d="M25.093 23.124l-9.496-6.75c-0.156-0.111-0.35-0.177-0.56-0.177-0.324 0-0.611 0.159-0.788 0.403l-0.002 0.003-0.118 0.164c-0.108 0.155-0.173 0.347-0.173 0.554 0 0.323 0.157 0.609 0.398 0.787l0.003 0.002 7.398 5.264-6.796 0.969c-0.43 0.066-0.756 0.434-0.756 0.877 0 0.042 0.003 0.084 0.009 0.125l-0.001-0.005 0.053 0.356c0.064 0.43 0.431 0.757 0.874 0.757 0.043 0 0.086-0.003 0.128-0.009l-0.005 0.001 9.4-1.343c0.406-0.062 0.718-0.392 0.751-0.802l0-0.003c0.052-0.114 0.082-0.248 0.082-0.389 0-0.321-0.158-0.606-0.4-0.781l-0.003-0.002zM8.588 13.414l0.338 0.153c0.115 0.056 0.251 0.089 0.394 0.089 0.332 0 0.623-0.177 0.783-0.441l0.002-0.004 3.53-6.657 7.359 3.070c0.104 0.045 0.225 0.071 0.352 0.071 0.35 0 0.654-0.197 0.807-0.486l0.002-0.005 0.157-0.317c0.044-0.095 0.069-0.207 0.069-0.324 0-0.337-0.209-0.626-0.505-0.742l-0.005-0.002-8.402-3.516c-0.112-0.045-0.243-0.071-0.379-0.071-0.345 0-0.65 0.167-0.84 0.425l-0.002 0.003-4.053 7.665c-0.055 0.105-0.088 0.23-0.088 0.362 0 0.326 0.197 0.605 0.478 0.726l0.005 0.002zM34.451 12.823l-0.217-0.278c-0.174-0.209-0.434-0.341-0.725-0.341-0.184 0-0.356 0.053-0.501 0.144l0.004-0.002-6.575 4.132-3.024-3.658-0.833 2.219 2.828 3.427c0.042 0.049 0.089 0.093 0.14 0.13l0.002 0.002c0.165 0.143 0.382 0.231 0.62 0.231 0.185 0 0.357-0.053 0.503-0.144l-0.004 0.002 7.565-4.755c0.225-0.133 0.373-0.374 0.373-0.649 0-0.173-0.059-0.333-0.157-0.46l0.001 0.002zM0.356 30.012c-0.213 0.203-0.346 0.49-0.346 0.807 0 0.347 0.159 0.658 0.408 0.862l0.002 0.002c0.238 0.2 0.547 0.321 0.884 0.321 0.358 0 0.685-0.137 0.93-0.361l-0.001 0.001 11.658-11.505-1.824-1.674zM22.646 2.080c0.459-0.082 1.931-0.413 2.707-0.167 0.288 0.079 0.54 0.189 0.771 0.331l-0.013-0.007c0.099 0.078 0.188 0.155 0.272 0.236l-0.001-0.001c-1.124 0.59-1.878 1.75-1.878 3.085 0 1.918 1.555 3.473 3.473 3.473s3.473-1.555 3.473-3.473c0-1.918-1.555-3.473-3.473-3.473-0.323 0-0.635 0.044-0.931 0.126l0.024-0.006c-0.036-0.096-0.103-0.21-0.175-0.392-0.068-0.181-0.119-0.392-0.145-0.61l-0.001-0.013c-0.227-0.599-0.739-1.044-1.367-1.17l-0.012-0.002c-0.737-0.128-0.844 0.506-2.265 0.944-0.648 0.196-1.394 0.309-2.165 0.31h-0.001c-0.281 0-0.762-0.021-1.161-0.039-1.044-0.046-1.215-0.075-1.222-0.043-0.036 0.114 1.955 1.272 4.089 0.89z"
            ></path>
          </svg>
          <p>Remade Fitness</p>
        </Link>
      </WowLink>
    </WowFooterContainer>
  </>
)

export default WowFooter