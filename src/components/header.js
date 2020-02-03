import React, { Component } from 'react'
import { withPrefix } from 'gatsby'

import '../css/header.css'

const displayBlock = {
  display: 'block'
}

const displayNone = {
  display: 'none'
}

let wwidth = (typeof(window) === "undefined") ? 800 : window.innerWidth;

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleMenu: false,
      toggleMenuBg: false,
      windowWidth: wwidth
    };

    this.handleMenuClick = this.handleMenuClick.bind(this);
    this.handleBgClick = this.handleBgClick.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  handleMenuClick() {
    if(this.state.windowWidth > 767) {
      this.setState(
        {
          toggleMenu: true,
          toggleMenuBg: false,
        }
      );
    } else {
      this.setState(
        {
          toggleMenu: !this.state.toggleMenu,
          toggleMenuBg: !this.state.toggleMenuBg,
        }
      );
    }
  }

  handleBgClick() {
    this.setState(
      {
        toggleMenu: false,
        toggleMenuBg: false,
      }
    );
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateMenuToggle() {
    if(this.state.windowWidth > 767) {
      this.setState({ toggleMenu: true, toggleMenuBg: false });
    } else {
      this.setState({ toggleMenu: false, toggleMenuBg: false });
    }
  }
  
  updateWindowDimensions() {
    this.setState({ 
      windowWidth: window.innerWidth
    });
    this.updateMenuToggle();
  }

  render() {
    return (
      <div className="main-header">
        <div className="main-header-container">
          <img src={withPrefix('/static/icons/menu.svg')} onClick={this.handleMenuClick} className="main-header-menu-icon" alt="menu" />
          <a className="menu-logo" href="https://www.fitato.fit/" target="_blank" rel="noopener noreferrer">
            <img
              src={withPrefix('/static/fitato-logo-colored.svg')}
              title='Fitato'
              alt="fitato"
            />
          </a>
          <div className="menu-links" style={(this.state.toggleMenu) ? displayBlock : displayNone}>
            <a href="#contact" className="button" onClick={this.handleMenuClick}
              style={
                {
                  marginRight: '0',
                  marginTop: '0',
                  marginBottom: '0',
                  marginLeft:'10px',
                }
              } data-scroll>
              Contact us
            </a>
          </div>
        </div>
        <div className="mobile-menu-bg" style={(this.state.toggleMenuBg) ? displayBlock : displayNone} onClick={this.handleBgClick}></div>
      </div>
    )
  }
}

export default Header
