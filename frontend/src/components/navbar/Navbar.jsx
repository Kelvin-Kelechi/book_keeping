import React from 'react'
import { NavBar, NavContainer, NavItems, NavButton, Logo } from './navbar.style'
import {Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
      <NavBar>
        <NavContainer>
          <Link to='/'   style={{color:'white', textDecoration:'none'}}>
            <Logo>Kedevbooking</Logo>
          </Link>
          <NavItems>
            <NavButton>Register</NavButton>
            <NavButton>Login</NavButton>
          </NavItems>
        </NavContainer>
      </NavBar>
    </>
  );
}

export default Navbar