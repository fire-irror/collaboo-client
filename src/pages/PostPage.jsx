import React from "react";
import HeaderBar from "../components/common/HeaderBar";
import Nav from "../components/common/Nav";
import Post from "../components/Post/Post";
import Header from '../components/common/Header'


export default function PostPage(){

  return(
    <div>
      <Nav/>
      <HeaderBar/>
      <Header/>
      <Post/>
    </div>
  )
}