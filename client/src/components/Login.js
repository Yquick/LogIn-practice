import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

function Login(props) {

  const [ userId, setUserId ] = useState('');
  const [ password, setPassword ] = useState('');

  const userIdHandler = (e) => {
    setUserId(e.target.value)
  };

  const passwordHandler = (e) =>{
    setPassword(e.target.value)
  }

  const loginRequest = () =>{
    axios.post('', {
      userId,
      password
    })
    .then((result) =>{
      props.loginHandler()
    })
  }

  return (
    <div className="login-container" >
      <div className="input-container">
        <h1>Login-Practice</h1>
        <div className="login-form">
          <label>
            <span className="userId-container">사용자이름</span>
            <input id="userId" 
              aria-label="사용자이름" 
              aria-required='true' 
              onChange={(e) => userIdHandler(e)} 
              type='text' 
              name="username" 
              autoCapitalize="off" 
              maxLength='75' 
              value={userId}>
            </input>
          </label>
          <label>
            <span className="password-container">비밀번호</span>
            <input id="password" 
              aria-label="비밀번호" 
              aria-required='true' 
              onChange={(e) => passwordHandler(e)}
              type='password' 
              name="password" 
              autoCapitalize="off" 
              value={password}>
            </input>
          </label>
          <div className='login-btn'>
            <button onClick={loginRequest}>로그인</button>
          </div>
        </div>
        <div className='signUp-container'>
          <div className='signUp'>
            <span className='signUp-noAccount'>계정이 없으신가요??</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;