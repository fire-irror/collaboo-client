import React from "react";
import '../../css/auth/Login.css';
import logo from '../../assets/logo.svg'
import axios from "axios";
import { useState } from "react";

export default function Login() {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };


  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };


  const handleLogin =async()=>{
    const loggedUser={email, password}
    try{
      const response = await axios.post('http://localhost:8080/users/login',loggedUser)
      if(response.status === 200){
        alert('로그인 성공')
      }
    }catch(error){
      alert('로그인 실패')
      console.log(error)
    }
  }

  return (
    <div>
      <img src={logo} className="LoginLogoImg" />
      <input
        className="LoginInput"
        placeholder="이메일을 입력해주세요"
        value={email}
        onChange={handleEmailChange}
      />

      <input
        className="LoginPassInput"
        type="password"
        placeholder="비밀번호를 입력해주세요"
        value={password}
        onChange={handlePasswordChange}
      />

      <div className="wrap_LoginBtn">
        <button onClick={handleLogin} className="LoginBtn">
          로그인
        </button>
        <span className="search">아이디/비번 찾기</span>
      </div>
    </div>
  )
}