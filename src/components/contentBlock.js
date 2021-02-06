import Styled from "styled-components"

const ContentBlock = Styled.div`
  margin: 20px auto 0;
  min-height: 60vh;
  width: calc(100% - 20px);
  max-width: 1170px;
  .underline{
    text-decoration: underline;
  }
  p{
    font-size: calc(1rem + .3vw);
    line-height: 1.3;    
  }

`

export default ContentBlock
