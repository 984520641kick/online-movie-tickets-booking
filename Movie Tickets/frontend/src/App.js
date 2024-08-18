
import React, { useEffect, useState } from 'react';
import "./App.css";
import Home from "./Components/Home";
import Screen from "./Components/Screen";
import Payment from "./Components/Payment";
import Seat from './Components/Seat';
import Tickets from './Components/Tickets';
import { Routes,Route } from 'react-router-dom';
import  axios from 'axios';

function App() {

const getUser = () =>{
  axios=getData
  fetch("/api/user")
  .then(res => res.json())
  .then(json => console.log(json))

}
useEffect(()=>{
  getUser()
},[])

  return (
    <div>
<Routes>
    
<Route path="/" element={<Home/>}></Route>
<Route path="/Screen" element={<Screen/>}></Route>
<Route path="/Seat"element={<Seat/>}></Route>
<Route path="/Payment" element={<Payment/>}></Route>
<Route path="/Tickets" element={<Tickets/>}></Route>

</Routes>

    </div>
  )
}

export default App;


