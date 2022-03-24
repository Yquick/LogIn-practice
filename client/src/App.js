import React, { useState } from 'react';
import Login from "./components/Login";
import SignUp from './components/SignUp';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

function App() {

  const [ isLogin, setLogin ] = useState(false)

  const loginHandler = () => {
    setLogin(true);
  }

  return (
    <div className="App">
      <BrowserRouter>
      { isLogin ? null : <Login loginHandler={loginHandler} /> }
      </BrowserRouter>
    </div>
  );
}

export default App;
