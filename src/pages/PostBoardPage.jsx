import React from "react";
import Header from "../components/common/Header";
import HeaderBar from "../components/common/HeaderBar";
import Nav from "../components/common/Nav";
import PostBoard from "../components/NoticeBoard/PostBoard";

export default function PostBoardPage(){

  return(
    <div>
      <HeaderBar/>
      <Header/>
      <PostBoard/>
      <Nav/>
    </div>
  )
}