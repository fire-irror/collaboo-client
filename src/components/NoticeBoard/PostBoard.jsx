import axios from "axios";
import React from "react";
import { useState } from "react";
import '../../css/NoticeBoard/PostBoard.css'


export default function PostBoard() {
  const [category, setCategory] = useState(1);
  const [description, setDescription] = useState("");
  const [code, setCode] = useState("");
  const [title, setTitle] = useState("");

  const handlePostBoardCreate = async () => {
    const PostedBoard = {
      // id: null,
      title: title,
      category: category,
      code: code,
      description: description
    }

    try {
      const response = await axios.post('http://localhost:8080/boards', PostedBoard)
      if (response.status === 200) {
        alert('성공')
      }
    } catch (err) {
      console.log(err)
    }
  }

  const handleCategoryChange = (e) => {
    setCategory(e.target.value)
  }

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value)
  }

  const handleCodeChange = (e) => {
    setCode(e.target.value)
  }

  const handleTitleChange = (e) => {
    setTitle(e.target.value)
  }


  return (
    <div className="WrapPostBoard">
      <p className="PostBoardTitle">글 등록하기</p>
      <div className="PostBoardInput">
        <p className="PostBoardInputTitle">제목</p>
        <input className="PostBoardName" placeholder="제목을 입력하세요" value={title} onChange={handleTitleChange} />

        <p className="PostCategory">카테고리</p>
        <select className="PostCategoryDropdown" value={category} onChange={handleCategoryChange}>
          <option value={1}>일반</option>
          <option value={2}>중요</option>
        </select>

        <p className="PostBoardContent">내용</p>
        <textarea className="PostBoardTextarea"
          value={description} onChange={handleDescriptionChange} />

        <p className="PostBoardContent">코드</p>
        <textarea className="PostBoardTextarea"
          value={code} onChange={handleCodeChange} />

        <button className="postBoardCreate" onClick={handlePostBoardCreate}>등록하기</button>
      </div>
    </div>
  )
}