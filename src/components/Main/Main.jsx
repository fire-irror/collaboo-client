import React from "react";
import Mainlogo from '../../assets/header.svg'
import '../../css/Main/Main.css'
import { LuBell } from "react-icons/lu";


export default function Main(){

  return(
    <div>
      <div className="main">
      <img src={Mainlogo}/>
      <LuBell size={25} className="Bell"/>
      </div>
      <hr/>
      <div className="wrapContent">
        
      </div>
    </div>
  )
}