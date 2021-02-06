import React, { Component } from "react"
import ReactModal from "react-modal"
import Styled from "styled-components"

const MapModal = Styled(ReactModal)`
  width: calc(100% - 40px);
  max-width: 800px;
  background: #fff;
  margin: 10vh auto;
  padding: 20px;
  outline: none;
  position: relative;
  .closeButton{
    position: absolute;
    top: -15px;
    right: -15px;
    background: #fff;
    border: 3px solid #333;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    font-size: 20px;
    font-weight: 900;
    cursor: pointer;
  }
`
MapModal.setAppElement("body")
class DirectionModal extends Component {
  constructor() {
    super()
    this.state = {
      showModal: false,
    }

    this.handleOpenModal = this.handleOpenModal.bind(this)
    this.handleCloseModal = this.handleCloseModal.bind(this)
  }

  handleOpenModal() {
    this.setState({ showModal: true })
  }

  handleCloseModal() {
    this.setState({ showModal: false })
  }

  render() {
    return (
      <>
        <div onClick={this.handleOpenModal} className="directions linkBlock">
          <p>Directions and Service Times</p>
        </div>
        <MapModal
          isOpen={this.state.showModal}
          contentLabel="Directions and Times"
          onRequestClose={this.handleCloseModal}
          shouldCloseOnOverlayClick={true}
        >
          <h2>Join us this Sunday:</h2>
          <h3>9:00 and 10:45am</h3>
          <p>7700 Woodard Dr.</p>
          <p>Lakewood, CO 80227</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3070.8329214253686!2d-105.08480848435234!3d39.675972808278864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876b81ad73d8223d%3A0xef2d6fab8083844!2sWestwoods%20Community%20Church!5e0!3m2!1sen!2sus!4v1569100714699!5m2!1sen!2sus"
            frameBorder="0"
            allowFullScreen=""
            title="Westwoods Map"
            style={{ width: "100%", height: "50vh" }}
          ></iframe>
          <button onClick={this.handleCloseModal} className="closeButton">
            X
          </button>
        </MapModal>
      </>
    )
  }
}

export default DirectionModal
