import './App.css';
import Container from './Component/Container';
import { Routes, Route, } from 'react-router-dom'
import HomePage from './Component/HomePage';
import Login from './Component/Login';
import React, { useState } from 'react'


function App() {

  const [login, setLogin] = useState('')
  const [mdp, setMdp] = useState('')

  const setData = (login, mdp) => {

    setLogin(login);
    setMdp(mdp)
  }


  const checkAuth = () => {
    if (login === "test@test.fr" && mdp == "0000") {
      return true
    } else {
      return false
    }
  }

  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={ checkAuth() ? <HomePage data={{ login: login, mdp: mdp }} /> : <Login setData={setData} />  } />
        <Route path={'/login'} element={<Login setData={setData} />} />
        <Route path={'/tasklist'} element={  checkAuth() ?   <Container /> :  <Login setData={setData} />  } />
      </Routes>
    </div>
  );
}

export default App;
