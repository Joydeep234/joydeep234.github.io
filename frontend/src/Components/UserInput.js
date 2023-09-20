import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
const UserInput = () => {
    const navigate=useNavigate();
    const [user,setUser]=useState({
        name:"",email:"",phone:"",company:"",country:""
    });
   
    const handleClick=async(e)=>{
        e.preventDefault();
const {name,email,phone,company,country}=user;
console.log("name: "+name+"email: "+email+"phone: "+phone+"company: "+company+"country "+country)

       const res=await fetch('/contact',{
         method:'POST',
         headers:{
            "Content-Type":"application/json"
         },
         body:JSON.stringify({name,email,phone,company,country})
       });
       const data=await res.json();
       if(res.status===400){
        console.log(data);
        window.alert("plz fill the form");
       }else if(res.status===401){
        window.alert("EMAIL ALREADY EXIST");
       }else if(res.status===201){
        window.alert("SUCCESSFULLY SUBMITTED");
        navigate('/');
       }else{
        console.log(data);
       }
    }
    let name,value
    const handleChange=(e)=>{
       
        name=e.target.name;
        value=e.target.value;

        setUser({...user,[name]:value})
    }
  return (
    <>
    <div className='outer-div'>
    <div className='form'>
        <form method='POST'>
        <div>
            <label htmlFor='name'><i className="zmdi zmdi-account material-icons-name"></i></label>
            <input type='text' autoComplete='off' name='name' value={user.name} onChange={handleChange} placeholder='name'/>
        </div>
        <div>
            <label htmlFor='name'><i className="zmdi zmdi-email material-icons-name"></i></label>
            <input type='text' autoComplete='off' name='email' value={user.email} onChange={handleChange} placeholder='email'/>
        </div>
        <div>
            <label htmlFor='name'><i className="zmdi zmdi-phone material-icons-name"></i></label>
            <input type='text' autoComplete='off' name='phone' value={user.phone} onChange={handleChange} placeholder='phone'/>
        </div>
        <div>
            <label htmlFor='name'><i className="zmdi zmdi-desktop-windows material-icons-name"></i></label>
            <input type='text' autoComplete='off' name='company' value={user.company} onChange={handleChange} placeholder='company'/>
        </div>
        <div>
            <label htmlFor='name'><i className="zmdi zmdi-pin material-icons-name"></i></label>
            <input type='text' autoComplete='off' name='country' value={user.country} onChange={handleChange} placeholder='country'/>
        </div>
        <div>
            <input className='btn' type='submit'  name="signup" value='Sign-Up' onClick={handleClick} />
        </div>
        </form>
    </div>
    </div>
    </>
  );
}

export default UserInput;
