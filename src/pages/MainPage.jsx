import React from "react";
import Main from "../components/Main/Main";
import Nav from "../components/common/Nav";
import HeaderBar from '../components/common/HeaderBar';
import ProjectBox from "../components/Main/ProjectBox";


export default function MainPage(){
  return(
    <div>
      <HeaderBar/>
      <Nav/>
      
      <Main/>
      <ProjectBox/>
    </div>
  )
}