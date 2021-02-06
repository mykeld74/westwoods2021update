import React from "react"
import Styled from "styled-components"
import { Link } from "gatsby"

const KzFooterContainer = Styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  background: #000;
  margin: auto;
  border-top: 3px solid #ffc103;
  border-bottom: 3px solid #ffc103;
  padding: 0;
  @media (max-width: 478px){
    flex-wrap: wrap;
    justify-content: center;
  }
`
const KzButton = Styled.button`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ffc103;
    border: none;
    overflow: hidden;
    width: 100%;
    min-width: 20vw;
    height: 80px;
    cursor: pointer;
    transform: skewX(-20deg);
    transition: all .3s ease-in-out;
    @media (max-width: 478px){
    margin: 10px auto;
    min-width: 300px;
  }

    p{
      z-index: 2;
      margin: 0;
      font-weight: 600;
      line-height: 1;
      transform: skewX(20deg);
    }

  &:before{
    content: '';
    position: absolute;
    top: 0;
    right: -50px;
    bottom: 0;
    left: 0;
    /* border-right: 50px solid transparent; */
    border-bottom: 80px solid #ff2c00;;
    transform: translateX(-100%);
    transition: all .3s ease-in-out;    
  }
  &:hover{
    color: #fff;
    &:before{
      transform: translateX(0);
      transition: all .3s ease-in-out;
    }
  }
  *:before{
    z-index: -1;
  }
`

const KzFooter = () => (
  <KzFooterContainer>
    <Link to="/kidzone">
      <KzButton>
        <p>KidZone Home</p>
      </KzButton>
    </Link>
    <Link to="/kidzone-classes">
      <KzButton>
        <p>KidZone Classes</p>
      </KzButton>
    </Link>
    <a
      href="https://docs.google.com/forms/d/1MVv9Ju6QR2gg75MUKNjq9N59fnyUziX7X5bgR8hEn0I/viewform"
      target="_blank"
      rel="noopener noreferrer"
    >
      <KzButton>
        <p>KidZone Application</p>
      </KzButton>
    </a>
  </KzFooterContainer>
)

export default KzFooter
