import React from "react";
import HeaderBar from "../components/common/HeaderBar";
import Post from "../components/Post/Post";
import Header from '../components/common/Header'


export default function PostPage(){

  return(
    <div>
      <HeaderBar/>
      <Header/>
      <Post/>
    </div>
  )
}