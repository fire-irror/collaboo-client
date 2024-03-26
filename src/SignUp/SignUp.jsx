import React, { useState } from "react";
import '../SignUp/SignUp.css'
import { CgChevronLeft } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

function CustomIcon({ size }) {
  return <CgChevronLeft size={size} />;
}

export default function SignUp() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatchError, setPasswordMatchError] = useState(false);

  const hadleSignUpClick = () => {
    if (password !== confirmPassword) {
      setPasswordMatchError(true);
    } else {
      setPasswordMatchError(false);
      alert("회원가입이 완료되었습니다.");
    }
  }

  return (
    <div>
      <button onClick={() => navigate(-1)} className="backBtn"><CustomIcon size={30} /></button>
      <p className="title">회원가입</p>
      <div className="InputWrap">
        <div className="wrapInputContent">
          <p className="emailP">이메일</p>
          <input
            className="emailInput"
            placeholder="이메일을 입력하세요"
          />

          <p className="nameP">이름</p>
          <input
            className="nameInput"
            placeholder="이름을 입력하세요"
          />

          <p className="passP">비밀번호</p>
          <input
            className="passInput"
            type="password"
            placeholder="비밀번호를 입력하세요"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <p className="passCheckP">비밀번호 확인</p>
          <input
            className="passCheckInput"
            type="password"
            placeholder="비밀번호를 다시 입력하세요"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {passwordMatchError && <p className="errorText">비밀번호가 일치하지 않습니다.</p>}
          <div className="WrapSignUpBtn">
            <button className="SignUp_Btn" onClick={hadleSignUpClick}>확인</button>
          </div>
        </div>
      </div>
    </div>
  );
}
