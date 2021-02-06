import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Dropdown } from "semantic-ui-react"
import { elastic as Menu } from "react-burger-menu"

const Headers = styled.header`
  width: 100%;
  background: #000;
  height: 55px;
  position: fixed;
  top: 0;
  z-index: 999;
  .homeLink {
    padding: 15px;
    width: 300px;
    height: 50px;
  }
  a {
    color: #fff;
    text-decoration: none;
    &:hover {
      color: rgb(255, 44, 0);
    }
  }
`

const Header = ({ siteTitle, menu }) => (
  <Headers>
    <div className="homeLink">
      <Link to="/">
        <p>{siteTitle}</p>
      </Link>
    </div>
    <Menu right>
      <>
        {menu.map(item => (
          <div className="navContainer" key={item.object_id}>
            <Dropdown
              style={{ color: `#ff2c00`, fontWeight: `800` }}
              text={item.title}
            >
              <Dropdown.Menu>
                {item.wordpress_children &&
                  item.wordpress_children.map(subitem => (
                    <Link to={subitem.object_slug} key={subitem.object_id}>
                      <Dropdown.Item style={{ fontWeight: `400` }}>
                        {subitem.title}
                      </Dropdown.Item>
                    </Link>
                  ))}
              </Dropdown.Menu>
            </Dropdown>
          </div>
        ))}
        <div className="navContainer giving">
          <div
            role="listbox"
            aria-expanded="false"
            className="ui dropdown"
            tabIndex="0"
            style={{ color: `#ff2c00`, fontWeight: `800` }}
          >
            <div
              className="text"
              role="alert"
              aria-live="polite"
              aria-atomic="true"
            >
              Give
            </div>

            <a
              href="https://westwoods.churchcenter.com/giving?open-in-church-center-modal=true"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="option" style={{ fontWeight: `400` }}>
                Donate to Westwoods
              </div>
            </a>
          </div>
        </div>
      </>
    </Menu>
  </Headers>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteDescription: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  siteDescription: ``,
}

export default Header
