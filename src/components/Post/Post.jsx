import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import "../../css/Post/Post.css";

export default function Post() {
  const navigate = useNavigate();
  const [project, setProject] = useState("");
  const [teams, setTeams] = useState(1);
  const [description, setDescription] = useState("");

  //datepicker를 사용하기 위한 useState
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());


  const handlePostCreate = async () => {
    const Posted = {
      project: project,
      teams: teams,
      start: start, // 시작일을 포맷된 형식으로 저장
      end: end,
      description: description
    }

    
    try {
      const response = await axios.post('http://localhost:8080/projects', Posted)
      if (response.status === 200) {
        alert('post 성공')
        navigate('/main')
      }
    } catch (err) {
      alert('실패')
      console.log(err)
    }
  }

  // 팀원 수가 변경될 때 호출되는 함수
  //hadler가 있어야 인원수를 바꿨을 때 적용된다. 
  const handleTeamChange = (e) => {
    setTeams(e.target.value);
  };

  const handleProjectChange = (e) => {
    setProject(e.target.value)
  }

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value)
  }
  return (
    <div>
      <div className="wrapPost">
        <p className="PostTitle">프로젝트 생성</p>
        <div className="PostInput">
          <p className="PostInputTitle">프로젝트명</p>
          <input className="projectName" placeholder="프로젝트명을 입력하세요" value={project} onChange={handleProjectChange} />

          <p className="PostInputTeam">팀원 수</p>
          <select className="teamDropdown" value={teams} onChange={handleTeamChange}>
            <option value={1}>5명</option>
            <option value={2}>4명</option>
            <option value={3}>3명</option>
            <option value={4}>2명</option>
            <option value={5}>1명</option>
          </select>

          <div className="dateInput">
            <p className="PostInputStartDay">시작일</p>
            <div className="datePickerWrapper1">
              <DatePicker
                className="startDataPicker"
                showIcon
                toggleCalendarOnIconClick
                selected={start}
                onChange={(date) => setStart(date)}
              />
            </div>
          </div>

          <div className="dateInput">
            <p className="PostInputEndDay">마감일</p>
            <div className="datePickerWrapper2">
              <DatePicker
                className="EndDataPicker"
                showIcon
                toggleCalendarOnIconClick
                selected={end}
                onChange={(date) => setEnd(date)}
              />

            </div>
          </div>
          <p className="projectContent">프로젝트 소개</p>
          <textarea className="projectTextarea"
            value={description} onChange={handleDescriptionChange} />

          <button className="postCreate" onClick={handlePostCreate}>프로젝트 생성</button>
        </div>
      </div>
    </div>
  );
}
