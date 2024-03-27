import React from 'react'
import "./Header.css"
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <Link to="/" className="logo">
        <img
          src="https://s.tmimgcdn.com/scr/800x500/183700/modern-shopping-business-logo-template_183766-original.jpg"
          alt="ShopLogo"
        />
        <span>Shopping Cart</span>
      </Link>
      <nav className="navigation">
        <NavLink to="/" className="link">
          Home
        </NavLink>
        <NavLink to="/cart" className="link">
          Cart
        </NavLink>
      </nav>

      <Link to="/cart" className="items">
        <span>Cart: 2</span>
      </Link>
    </header>
  )
}

export default Header