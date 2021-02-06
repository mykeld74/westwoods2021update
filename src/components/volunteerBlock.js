import React from "react"
import Styled from "styled-components"

const VolunteerContainer = Styled.div`
  width: 100%;

  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  .volOp{
    width: 48%;  
    @media (max-width: 468px){
      width: 100%;
    }
  }
  .volTitle{
    width: 100%;
    background: #000;
    color: #fff;
    padding: 10px;
    margin-bottom: 10px;
    h2{
      margin: 0;
      font-size: 1rem;
    }
  }
    .volDesc{
      p{
        font-weight: 700;
      }      
    }
    .volTime{
      p{
        font-style: italic;
      }
    }

`
const VolunteerBlock = ({ opportunity }) => (
  <VolunteerContainer>
    {opportunity.map(opportunity => (
      <div key={opportunity.node.id} className="volOp">
        <div className="volTitle">
          <h2>{opportunity.node.title}</h2>
        </div>
        <div className="volDesc">
          <p>{opportunity.node.acf.description}</p>
        </div>
        {opportunity.node.acf.when && (
          <div className="volTime">
            <p>{opportunity.node.acf.when}</p>
          </div>
        )}
      </div>
    ))}
  </VolunteerContainer>
)
export default VolunteerBlock
