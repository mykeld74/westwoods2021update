import React from "react"
import Styled from "styled-components"

const MCblock = Styled.div`
  width: calc(100% - 20px);
  max-width: 1170px;
  margin: auto;
  .mcBlock{
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid hsla(0, 0%, 0%, 0.2);
  margin-top: 20px;
  @media (max-width: 600px){
    flex-wrap: wrap;
  }
  }
  .mcMap{
    width: 50%;
    @media (max-width: 600px){
      width: 100%;
    }
    iframe{
      width: 100%;
      height: 20vh;
      border: none;
    }
  }
`

const MCContainer = ({ mc, day }) => (
  <MCblock>
    {mc.map(mc => (
      <div key={mc.node.id} className="mcBlock">
        <div className="infoSection">
          <p>
            <strong>{mc.node.title}</strong>
          </p>
          <p>
            {mc.node.acf.area}
            <br />
            <a href={"mailto:" + mc.node.acf.leader_email}>
              {mc.node.acf.leader_email}
            </a>
            {mc.node.acf.leader_email_2 && (
              <>
                <br />
                <a href={"mailto:" + mc.node.acf.leader_email_2}>
                  {mc.node.acf.leader_email_2}
                </a>
              </>
            )}
          </p>
          {mc.node.acf.leader_phone_number && (
            <>
              <p>
                {mc.node.acf.leader_phone_number}
                {mc.node.acf.leader_phone_number_2 && (
                  <>
                    <br />
                    {mc.node.acf.leader_phone_number_2}
                  </>
                )}
              </p>
            </>
          )}
          <p>
            <strong>
              {mc.node.acf.night_of_the_week === "0" && "Sunday @ "}
              {mc.node.acf.night_of_the_week === "2" && "Tuesday @ "}
              {mc.node.acf.night_of_the_week === "3" && "Wednesday @ "}
              {mc.node.acf.night_of_the_week === "4" && "Thursday @ "}
              {mc.node.acf.night_of_the_week === "5" && "Friday @ "}
              {mc.node.acf.night_of_the_week === "6" && "Saturday @ "}
              {mc.node.acf.meeting_time}
            </strong>
          </p>
        </div>
        <div className="mcMap">
          <iframe
            src={
              "https://www.google.com/maps/embed/v1/place?key=AIzaSyDbBEfXSCLj2q_iu8699_SeoZOT65Fg8cU&q=" +
              mc.node.acf.area
            }
            title={mc.node.wordpress_id}
          />
        </div>
      </div>
    ))}
  </MCblock>
)

export default MCContainer
