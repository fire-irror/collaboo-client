import React from "react";
import Header from "../components/common/Header";
import HeaderBar from "../components/common/HeaderBar";
import Nav from "../components/common/Nav";
import Category from "../components/NoticeBoard/Category";
import NoticeBoard from "../components/NoticeBoard/NoticeBoard";



export default function NoticeBoardPage(){

  return(
    <div>
      <HeaderBar/>
      <Header/>
      <Category/>
      <NoticeBoard/>
      <Nav/>
    </div>
  )
}