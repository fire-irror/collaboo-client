import React from "react";
import '../../css/NoticeBoard/Category.css'
import { BsFilterRight } from "react-icons/bs";


export default function Category() {

  return (
    <div className="category">
      <div className="wrapCategory">
        <span className="categorySpan">전체</span>
        <span className="categorySpan">일반</span>
        <span className="categorySpan">중요</span>
        <BsFilterRight size={30} className="categoryFilter"/>
        <hr className="categoryHr"/>
      </div>
    </div>
  )
}