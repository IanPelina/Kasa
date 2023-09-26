import React from 'react'
import Logo from "../../assets/footer-logo.svg";

export default function Footer() {
  return (
    <footer className='footer-container'>
        <img src={Logo} alt="logo-footer" className='footer-logo' />
        <p className='footer-p'>© 2020 Kasa. All <span>rights reserved</span></p>
    </footer>
  )
}