import React from "react";
import '../../css/auth/Select.css'
import logo from '../../assets/logo.svg'
import { useNavigate } from "react-router-dom";

export default function Select(){

  const navigate = useNavigate();

  const hadleSignInClick = () =>{
    navigate('/login');
  }

  const handleSignUpClick = () =>{
    navigate('/join');
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