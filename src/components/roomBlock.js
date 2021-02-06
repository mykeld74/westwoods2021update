import React from "react"
import Styled from "styled-components"

const RoomContainer = Styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  .room{
    width: 48%;  
    @media (max-width: 468px){
      width: 100%;
    }
  }
  h2{
    text-decoration: underline;
  }
`
const RoomBlock = ({ room }) => (
  <RoomContainer>
    {room.map(room => (
      <div key={room.node.id} className="room">
        <div className="roomTitle">
          <h2>{room.node.title}</h2>
        </div>
        <div
          className="roomDesc"
          dangerouslySetInnerHTML={{
            __html: room.node.acf.room_description,
          }}
        />
      </div>
    ))}
  </RoomContainer>
)
export default RoomBlock
