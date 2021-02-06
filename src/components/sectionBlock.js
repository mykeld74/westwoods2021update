import React, { Component } from "react"
import Styled from "styled-components"
import Image from "gatsby-image"

const StyledBlock = Styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
  padding: 40px 0 30px;
  margin: 0;
`
const SectionContent = Styled.div`
  width: calc(100% - 30px);
  max-width: 1080px;
  display: flex;
  align-items: center;
  @media (max-width: 478px){
    flex-wrap: wrap;
  }
  div{
    width: 100%;
  }
  &.imgRight{
  flex-direction: row-reverse;
  }
  p, ul{
    font-size: calc(1rem + .3vw);
    line-height: 1.3;
  }
  blockquote {
    background: #000;
    padding: 5px;
    color: #15b0dc;
    width: 100%;
    margin: 20px 0;
    p {
    font-size: .8rem;
    }
  }
  .left{
    text-align: left;
  }
  .center{
    text-align: center;
  }
  .right{
    text-align: right;
  }
  .imgContainer{
    width: 300px;
    img{
      max-width: 100%;
    }
  }
  
`

class StyledSection extends Component {
  render() {
    return (
      <StyledBlock
        style={{
          backgroundColor: "#" + this.props.bgColor,
          color: "#" + this.props.font_color,
        }}
      >
        <SectionContent className={this.props.image_align}>
          {this.props.section_image !== null && (
            <div className="imgContainer">
              <Image fluid={this.props.section_image.fluid} />
            </div>
          )}
          <div>
            <h1 className={this.props.title_alignment}>{this.props.title}</h1>
            <div
              dangerouslySetInnerHTML={{ __html: this.props.text }}
              className={this.props.text_alignment}
            />
          </div>
        </SectionContent>
      </StyledBlock>
    )
  }
}

export default StyledSection
