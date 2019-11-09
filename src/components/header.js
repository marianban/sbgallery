import React from "react"
import Logo from '../images/S&B_Gallery_logo.png'

const Header = () => (
  <header>
    <div className="header-bottom">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-xs-8">
            <div className="logo">
              <a href="/">
                <img src={Logo} alt="Logo" />
              </a>
            </div>
          </div>
          <div className="col-md-9 hidden-sm hidden-xs">
            <div className="mainmenu text-right">
              <nav>
                <ul id="navigation">
                  <li className="active">
                    <a href="/">home</a>
                  </li>
                  <li>
                    <a href="#ContactUs">contact</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="col-xs-4 hidden-lg hidden-md">
            <div className="responsive-menu-wrap floatright"></div>
          </div>
        </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {}

Header.defaultProps = {}

export default Header
