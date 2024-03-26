import React from "react";
import './Signinup.css'
import logo from '../assets/logo.svg'
import { useNavigate } from "react-router-dom";

export default function Login(){

  const navigate = useNavigate();

  const hadleSignInClick = () =>{
    navigate('/login');
  }

  const handleSignUpClick = () =>{
    navigate('/signup');
  }

  return(
    <div >
      <img src={logo} className="logo_img"/>
      <div className="Wrap_btn">
        <button className="SignInBtn" onClick={hadleSignInClick}>로그인</button>
        <button className="SignUpBtn" onClick={handleSignUpClick}>회원가입</button>
      </div>
    </div>
  )

}