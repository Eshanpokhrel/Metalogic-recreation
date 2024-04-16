"use client"
import React, { useState } from "react";
import "./style.scss";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {

  const [showNav, setShowNav] = useState(false);

  return (
    <>
    <Link className="mobile_logo" href="/" >
        <img
          src="/metalogo.png"
          alt="metalogic comany logo"
        />
        <div className="mobile_logo-text">
          <h1>
            <span>Meta</span>
            <span>Logic</span>
          </h1>
        </div>
    </Link>
    <nav className={showNav ? 'mobile-view' : ''}>
      <Link className="logo" href="/" >
        <img
          src="/metalogo.png"
          alt="metalogic comany logo"
        />
        <div className="logo-text">
          <h1>
            <span>Meta</span>
            <span>Logic</span>
          </h1>
        </div>
      </Link>
      <ul className="nav-links">
        <li>
          <Link href="/" onClick={() => setShowNav(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link className="active" href="/Service" onClick={() => setShowNav(false)}>
            Services
          </Link>
        </li>
        <li>
          <Link href="/Career" onClick={() => setShowNav(false)}>
            Career
          </Link>
        </li>
        <li>
          <Link href="/Blogs" onClick={() => setShowNav(false)}>
            Blogs
          </Link>
        </li>
        <li>
          <Link href="/About" onClick={() => setShowNav(false)}>
            About Us
          </Link>
        </li>
      </ul>
      <div className="contact-btn">
        <Link href="/Contact">
          Get in Touch
        </Link>
      </div>
      <FontAwesomeIcon 
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#090909"
          size="2x"
          className='close-icon' 
        />
    </nav>
    <FontAwesomeIcon 
        onClick={() => setShowNav(true)}
        icon={faBars}
        color="#e53b3a"
        size="2x"
        className='hamburger-icon' />
    </>
  );
};

export default Navbar;
