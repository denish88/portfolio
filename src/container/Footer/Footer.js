import React from 'react'
import { FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';

import './Footer.css'

export const Footer = () => {
  return (
    <footer>
      <div className='full-width'>
        <div className='footer-wrapper'>
          <p>Made with <FaHeart /> By Denish Savaliya</p>
          <div className='footer-links'>
            <Link to="/privacy">Privacy &amp; Refunds</Link>
            <span className='footer-dot' aria-hidden="true">·</span>
            <Link to="/pricing">Pricing</Link>
            <span className='footer-dot' aria-hidden="true">·</span>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
