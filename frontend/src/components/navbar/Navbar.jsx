import React from 'react'
import { NavBar, NavContainer, NavItems, NavButton, Logo } from './Navbar.style'
const Navbar = () => {
  return (
     <>
     <NavBar>
        <NavContainer>
            <Logo>Kedevbooking</Logo>
            <NavItems>
                <NavButton>Register</NavButton>
                <NavButton>Login</NavButton>
            </NavItems>
        </NavContainer>
     </NavBar>
     </>
  )
}

export default Navbar