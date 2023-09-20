import React from 'react';
import { Route, Routes } from 'react-router-dom'
// import Home from './Components/Home';
import UserInput from './Components/UserInput';
import MainFrame from './Components/MainFrame';
import './App.css'
const App = () => {
  return (
    <>
    {/* <Navbar/> */}
      <Routes>
        {/* <Route path='/' element={<Home/>} /> */}
        <Route path='/' element={<MainFrame/>} />
        <Route path="/userinput" element={<UserInput/>} />
      </Routes>
    </>
  );
}

export default App;
