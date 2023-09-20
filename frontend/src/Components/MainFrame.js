import React from 'react';
// import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.css'
import {NavLink} from 'react-router-dom'
import Home from './Home';
import Services from './Services';
import Contact from './Contact';
import Footer from './Footer';
import Team from './Team';
import logo from'../Images/iota.jpg'

const MainFrame = () => {
  return (
    <>
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <NavLink className="navbar-brand " to="/"><img src={logo} alt='logo' className='logo'/></NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto">
      <li className="nav-item">
        <a className="nav-link" href="#service">Services</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#team">Team</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#con">Clients</a>
      </li>
     
    </ul>
  </div>
</nav>
      <div id='home'>
      <Home/>
      </div>
     <div id='service'>
     <Services/>
     </div>
      <div id="con">
      <Contact/>
      </div>
      <div id='team'>
        <Team/>
      </div>
      <Footer/>
    </>
  );
}

export default MainFrame;
