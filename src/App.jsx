import React, { useState } from 'react';
import'./global.css'

const App = () => {
  let[Name,setName]=useState('');
  let[Username,setUsername]=useState('');
  let[Age,setAge]=useState('');
  function handle(e){
    e.preventDefault()
    var user={
      Name:Name,
      Username:Username,
      Age:Age

    }
    console.log(user);
  }
    
    return (
    <div className='section'>
    <h1 className='lo'>Login Page</h1>
    <form onSubmit={handle}>
      <label>Name:</label>
      <br/>
      <input type="text" placeholder="Enter the Name:"value={Name}/>
      <label>Username:</label>
      <br/>
      <input type="text" placeholder="Enter the Username:" value={Username}/>
      <label>Age:</label>
      <br/>
      <input type="text" placeholder="Enter the Age:" value={Age}/>
      <input type="submit" value="login"/>
    </form>

    </div>
  );
}

export default App;
