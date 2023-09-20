import React from 'react';
import cf from '../Images/cf.svg'
import cs from '../Images/cs.svg'
import js from '../Images/js.svg'
import lb from '../Images/lb.svg'
import mb from '../Images/mb.svg'
import pw from '../Images/pw.svg'
import sb from '../Images/sb.svg'
import sf from '../Images/sf.svg'
const Contact = () => {
  return (
    <>
    <hr></hr>
    <div className='con-d1'><h4>CLIENTS THAT LOVE US</h4></div>
      <div className='box-con'>
        <div className='con-box' id='box1'><img src={cf} className='ig' alt="cf" /></div>
        <div className='con-box' id='box2'><img src={cs} className='ig' alt="cs" /></div>
        <div className='con-box' id='box3'><img src={js} className='ig' alt="js" /></div>
        <div className='con-box' id='box4'><img src={lb} className='ig' alt="lb" /></div>
        <div className='con-box' id='box5'><img src={mb} className='ig' alt="mb" /></div>
        <div className='con-box' id='box6'><img src={pw} className='ig' alt="pw" /></div>
        <div className='con-box' id='box7'><img src={sb} className='ig' alt="sb" /></div>
        <div className='con-box' id='box8'><img src={sf} className='ig' alt="sf" /></div>
      </div>
    </>
  );
}

export default Contact;
