import React, { useState } from 'react'
import { LoginContainer, Lcontainer } from './login.style'
const Login = () => {
    const [credentials, setCredentials] = useState({
        username: undefined,
        password: undefined
    })

   const handleLogin =()=>{
    
   }
  return (
     <LoginContainer>
        <Lcontainer>
            <input type="text" name="" id="" onChange={} />
            <input type="password" name="" id="" />
        </Lcontainer>
     </LoginContainer>
  )
}

export default Login