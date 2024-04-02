import axios from "axios";
import React, { useState, useRef } from "react";
import '../../css/auth/Join.css'
import { IoCamera } from "react-icons/io5";
import { useNavigate } from "react-router-dom";


export default function Join() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatchError, setPasswordMatchError] = useState(false);
  const [imageURL, setImageURL] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    const imageURL = URL.createObjectURL(file);
    setImageURL(imageURL);
  };

  const handleUploadButtonClick = () => {
    fileInputRef.current.click();
  };

  const hadleSignUpClick = async () => {
    if (password !== confirmPassword) {
      setPasswordMatchError(true);
      return; 
    }
    const newUser = { name, email, password }
    try {
      const response = await axios.post('http://localhost:8080/users/join', newUser)
      if (response.status === 200) {
        alert('회원가입 성공');
        navigate('/login')
      }
    } catch (err) {
      alert('실패')
      console.log(err)
    }
  }

  return (
    <div>
      <div className="profile">
        <div className="profileImageContainer">
          {imageURL ? (
            <img src={imageURL} alt="Profile" className="profileImage" />
          ) : (
            <button onClick={handleUploadButtonClick} className="uploadBtn">
              <IoCamera size={40} />
            </button>
          )}
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={handleFileInputChange}
          />
        </div>
      </div>
      <p className="title">회원가입</p>
      <div className="InputWrap">
        <div className="wrapInputContent">

          <p className="emailP">이메일</p>
          <input
            value={email}
            className="emailInput"
            placeholder="이메일을 입력하세요"
            onChange={(e) => setEmail(e.target.value)}
          />

          <p className="nameP">이름</p>
          <input
            value={name}
            className="nameInput"
            placeholder="이름을 입력하세요"
            onChange={(e) => setName(e.target.value)}
          />

          <p className="passP">비밀번호</p>
          <input
            className="passInput"
            type="password"
            placeholder="비밀번호를 입력하세요"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setPasswordMatchError(false); 
            }}
          />

          <p className="passCheckP">비밀번호 확인</p>
          <input
            className="passCheckInput"
            type="password"
            placeholder="비밀번호를 다시 입력하세요"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              setPasswordMatchError(false); 
            }}
          />
          {passwordMatchError && <p className="errorText">비밀번호가 다릅니다.</p>}
          <div className="WrapSignUpBtn">
            <button className="SignUp_Btn" onClick={hadleSignUpClick}>확인</button>
          </div>
        </div>
      </div>
    </div>
  );
}