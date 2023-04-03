import styled from "styled-components";

export const LoginContainer = styled.div`
  width: 400px;
  overflow: hidden;
  margin: auto;
  padding: 10px 40px;
  background: #003580;
  border-radius: 10px;
  margin-top: 10%;
  h2 {
    text-align: center;
    color: white;
  }
  label {
    color: white;
    font-size: 17px;
  }
  form {
    margin-left: 42px;
  }
  #username {
    width: 300px;
    height: 30px;
    border: none;
    border-radius: 3px;
    padding-left: 8px;
  }
  #password {
    width: 300px;
    height: 30px;
    border: none;
    border-radius: 3px;
    padding-left: 8px;
  }
  button {
    width: 300px;
    height: 30px;
    margin: auto;
    border: none;
    border-radius: 5px;
    margin-left: 4px;
    background-color: #0071c2;
    color: #ffffff;
  }
  p {
    color: white;
  }
  input::placeholder {
    color: lightgray;
  }
`;
