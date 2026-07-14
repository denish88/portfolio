import React, { useState, useEffect } from 'react'
import logoImage from '../../assets/image/logo-mark.svg';
import headercircle from '../../assets/image/header-circle.webp';
import { NavLink, Link, useLocation } from 'react-router-dom'
import './Header.css'

export const Header = () => {

  const [toggleClass, setToggleClass] = useState(false)
  const location = useLocation();

  const toggleFunction = () => {
    setToggleClass(!toggleClass)
  }

  useEffect(() => {
    if (toggleClass) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'initial';
    }
    return () => {
      document.body.style.overflow = 'initial';
    };
  }, [toggleClass ]);

  useEffect(() => {
    setToggleClass(false);
  }, [location.pathname]);

  return (
    <header className={toggleClass ? 'active' : null}>
      <div className='main-header-wrapper'>
        <div className='main-header'>
          <div className='main-logo'>
            <Link to="/" aria-label="Denish Savaliya — Home">
              <img src={logoImage} alt="Denish Savaliya logo" />
            </Link>
          </div>
          <div className={toggleClass ? 'nav-bar  mobile-menu' : 'nav-bar'}>
            <div className='header-bg'>
              <img src={headercircle} alt="" />
            </div>
            <div className='header-list'>
              <ul>
                <li><NavLink to="/" end className={({ isActive }) => isActive ? 'active' : undefined}>Home</NavLink></li>
                <li><NavLink to="/education" className={({ isActive }) => isActive ? 'active' : undefined}>Education and Certificate</NavLink></li>
                <li><NavLink to="/experience" className={({ isActive }) => isActive ? 'active' : undefined}>Experience</NavLink></li>
                <li><NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : undefined}>Projects</NavLink></li>
                <li><NavLink to="/pricing" className={({ isActive }) => isActive ? 'active' : undefined}>Dev Pricing</NavLink></li>
                <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : undefined}>Contact and Resume</NavLink></li>
              </ul>
            </div>
          </div>
          <div onClick={toggleFunction} className='mobile-hamburger'>
            <span className='hamburger-title'>LOVE US</span>
            <button type="button" className={toggleClass ? "hamburger header-toggle active" : "hamburger header-toggle"} aria-label="Toggle menu">
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
