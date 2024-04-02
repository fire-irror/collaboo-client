import React, { useState } from "react";
import "../../css/Post/Post.css";

export default function Post() {
  const [teamSize, setTeamSize] = useState(1);

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

          <p className="PostInputStartDay">시작일</p>
          <input className="startDay"/>

          <p className="PostInputEndDay">마감일</p>
          <input className="endDay" />
        </div>
      </div>
    </div>
  );
}
