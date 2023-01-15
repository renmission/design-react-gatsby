import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import logo from "../images/logo-designcode.svg"
import "./Header.css"

const Header = () => {
  const [navOnScroll, setNavOnScroll] = useState(false);
  
  useEffect(() => {
    console.log(window.scrollY);

    const scrollHandler = () => {
      if (window.scrollY >= 80) {
        setNavOnScroll(true);
      } else {
        setNavOnScroll(false);
      }
    }

    window.addEventListener('scroll', scrollHandler);
  },[]);

  return (
    <header className={navOnScroll ? 'Header active' : 'Header'}>
      <div className="HeaderGroup">
        <Link to="/">
          <img src={logo} width="30" />
        </Link>
        <Link to="/courses">Courses</Link>
        <Link to="/downloads">Downloads</Link>
        <Link to="/workshops">Workshops</Link>
        <Link to="/buy">
          <button>Buy</button>
        </Link>
      </div>
    </header>
  )
}

export default Header
