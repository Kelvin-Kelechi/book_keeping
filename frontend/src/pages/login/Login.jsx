import axios from "axios";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { LoginContainer, Lcontainer } from "./login.style";
const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });
  const { error, loading, dispatch, user } = useContext(AuthContext);

  const handleOnchange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE", payload: error.response.data });
    }
  };
  console.log(user);
  return (
    <LoginContainer>
        <h2>Login</h2>
        <form action="" method="post">
          <label htmlFor="">Username</label>
          <input
            type="text"
            placeholder="Enter username"
            name=""
            id="username"
            onChange={handleOnchange}
          />
          <label htmlFor="">Password</label>
          <input
            type="password"
            placeholder="Enter password"
            name=""
            id="password"
            onChange={handleOnchange}
          />
          <button onClick={handleLogin} type="submit">
            Login
          </button>
          {error && <span>{error.message}</span>}
          <div>
            <p>
              Already have an account? <strong>Create an account</strong>{" "}
            </p>
          </div>
        </form>
 
    </LoginContainer>
  );
};

export default Login;
