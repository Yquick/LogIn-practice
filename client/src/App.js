import React, { useState } from 'react';
import Login from "./components/Login";
import SignUp from './components/SignUp';

function App() {

  const [ isLogin, setLogin ] = useState(false)

  const loginHandler = () => {
    setLogin(true);
  }

  return (
    <div className="App">
      { isLogin ? null : <Login loginHandler={loginHandler} /> }
    </div>
  );
}

export default App;
