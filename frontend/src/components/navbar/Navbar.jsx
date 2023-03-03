import React, { useContext } from "react";
import {
  NavBar,
  NavContainer,
  NavItems,
  NavButton,
  Logo,
} from "./navbar.style";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
const Navbar = () => {
    const {  user } = useContext(AuthContext);
  return (
    <>
      <NavBar>
        <NavContainer>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            <Logo>Kedevbooking</Logo>
          </Link>
          {user? <p>Welcome, {user.username} </p> : <NavItems>
            <NavButton>Register</NavButton>
            <NavButton>
              {" "}
              <Link
                style={{ textDecoration: "none" }}
                to="/login"
              >
                Login
              </Link>{" "}
            </NavButton> 
          </NavItems>}
        </NavContainer>
      </NavBar>
    </>
  );
};

export default Navbar;
