import React from "react";
import '../../css/NoticeBoard/NoticeBoard.css'
import { IoIosAdd } from "react-icons/io";
import { useNavigate } from "react-router-dom";



export default function NoticeBoard() {
  const navigate = useNavigate();

  const handleBoardPost=()=>{
    navigate('/postBoard')
  }

  return (
    <div className="noticeboard">
      <p className="noticeboardTitle">게시판</p>
      <button className="BoardPost" onClick={handleBoardPost}><IoIosAdd />글쓰기</button>
    </div>
  )
}

