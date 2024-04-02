import React from "react";
import Login from "../components/auth/Login";
import Nav from "../components/common/Nav";
import HeaderBar from "../components/common/HeaderBar";


export default function LoginPage(){
  return(
    <div>
      <HeaderBar/>
      <Login/>
    </div>
  )
}