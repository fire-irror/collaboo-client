import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { LuCalendar } from "react-icons/lu";
import "../../css/Post/Post.css";

export default function Post() {
  const [teamSize, setTeamSize] = useState(1);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  // 팀원 수가 변경될 때 호출되는 함수
  const handleTeamSizeChange = (event) => {
    setTeamSize(event.target.value);
  };

  return (
    <div>
      <div className="wrapPost">
        <p className="PostTitle">프로젝트 생성</p>
        <div className="PostInput">
          <p className="PostInputTitle">프로젝트명</p>
          <input className="projectName" placeholder="프로젝트명을 입력하세요" />

          <p className="PostInputTeamSize">팀원 수</p>
          <select className="teamSizeDropdown" value={teamSize} onChange={handleTeamSizeChange}>
            <option value={1}>5명</option>
            <option value={2}>4명</option>
            <option value={3}>3명</option>
            <option value={4}>2명</option>
            <option value={5}>1명</option>
          </select>

          <div className="dateInput">
            <p className="PostInputStartDay">시작일</p>
            <div className="datePickerWrapper">
              <DatePicker
                selected={startDate} 
                onChange={(date) => setStartDate(date)}
                className="startDay"
              />
              <LuCalendar className="calendarIcon" size={30}/>
            </div>
          </div>

          <div className="dateInput">
            <p className="PostInputEndDay">마감일</p>
            <div className="datePickerWrapper">
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                className="endDay"
              />
              <LuCalendar className="calendarIcon" size={30} />
            </div>
          </div>

          <p className="projectContent">프로젝트 소개</p>
          <textarea className="projectTextarea"/>

          <button className="postCreate">프로젝트 생성</button>
        </div>
      </div>
    </div>
  );
}
