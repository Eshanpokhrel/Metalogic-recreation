import React from 'react'
import './Footer.scss'
import logo from '../../public/metalogo.png'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className="footer">
      <div className="logo-info">
        <div className="logoContainer">
          <Image height={48} src={logo} alt='metalogic comany logo' />
          <div className="logo-text">
          <h1>
            <span>Metalogic</span>
          </h1>
        </div>
        </div>
        <span>Software Private Limited</span>
        <div className="infoContainer">

        </div>
        <div className="cr-section">
          © Copyright 2024 MetaLogic. All rights reserved.
        </div>
      </div>
      <div className="footerItems">

      </div>
    </div>
  )
}

export default Footer
