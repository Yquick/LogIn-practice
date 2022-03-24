import React, { useState } from 'react';

function Login() {
  const [ userId, setUserId ] = useState('');
  const [ password, setPassword ] = useState('');

  const inputHandler = (e) => {
    setUserId(e.target.value)
  };

  console.log(userId);
  return (
    <div className="login-container" >
      <div className="input-container">
        <h1>Login-Practice</h1>
        <div className="login-form">
          <label>
            <span className="userId-container">사용자이름</span>
            <input id="userId" aria-label="사용자이름" aria-required='true' onChange={(e) => inputHandler(e)} type='text' name="username" autoCapitalize="off" maxLength='75' value={userId}>
            </input>
          </label>
        </div>
      </div>
    </div>
  );
}

export default Login;