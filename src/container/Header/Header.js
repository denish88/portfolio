import React, { useState, useEffect } from 'react'
import logoImage from '../../assets/image/drawing-white50x50.png';
import headercircle from '../../assets/image/header-circle.webp';
import { NavLink,useLocation } from 'react-router-dom'
import './Header.css'

export const Header = () => {

  const [toggleClass, setToggleClass] = useState(false)
  const location = useLocation(); // Use the useLocation hook to access the current location object


  const toggleFunction = () => {
    setToggleClass(!toggleClass)
  }

  useEffect(() => {
    if (toggleClass) {
      document.body.style.overflow = 'hidden'; // Example style
    } else {
      document.body.style.overflow = 'initial'; // Remove the background color
    }
    return () => {
      document.body.style.overflow = 'initial';
    };
  }, [toggleClass ]);

  useEffect(() => {
    setToggleClass(false); // This will close the menu by setting toggleClass to false
  }, [location.pathname]);

  return (
    <header className={toggleClass ? 'active' : null}>
      <div className='main-header-wrapper'>
        <div className='main-header'>
          <div className='main-logo'>
            <img src={logoImage} alt="Logo" type="image/webp"/>
          </div>
          <div className={toggleClass ? 'nav-bar  mobile-menu' : 'nav-bar'}>
            <div className='header-bg'>
              <img src={headercircle} alt="Logo" type="image/webp" />
            </div>
            <div className='header-list'>
              <ul>
                <li><NavLink to="/"  exact activeClassName="active">Home</NavLink></li>
                <li><NavLink to="/education" activeClassName="active">Education and Certificate</NavLink></li>
                <li><NavLink to="/experience" activeClassName="active">Experience</NavLink></li>
                <li><NavLink to="/projects" activeClassName="active">Projects</NavLink></li>
                <li><NavLink to="/contact" activeClassName="active">Contact and Resume</NavLink></li>
              </ul>
            </div>
          </div>
          <div onClick={toggleFunction} className='mobile-hamburger'>
            <span  className='hamburger-title'>LOVE US</span>
            <button  className={toggleClass ? "hamburger header-toggle active" : "hamburger header-toggle"}>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
