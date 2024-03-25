import React from "react";
import '../Login/Login.css'
import logo from '../assets/logo.svg'
import { useState } from "react";

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notAllow, setNotAllow] = useState(true);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    checkFormCompletion(event.target.value, password);
  };


  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    checkFormCompletion(email, event.target.value);
  };

  const checkFormCompletion = (email, password) => {
    if (email !== '' && password !== '') {
      setNotAllow(false);
    } else {
      setNotAllow(true);
      
    }
  };

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
        <button onClick={checkFormCompletion} disabled={notAllow} className="LoginBtn">
          로그인
        </button>
        <span className="search">아이디/비번 찾기</span>
      </div>
    </div>
  )
}