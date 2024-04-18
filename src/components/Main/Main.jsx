import React, { useEffect, useState } from "react";
import Mainlogo from '../../assets/header.svg';
import '../../css/Main/Main.css';
import { LuBell } from "react-icons/lu";
import axios from "axios";

// 서버에서 받아온 데이터에서 날짜 형식을 변환하는 함수
const formatProjectData = (projects) => {
  return projects.map(project => {
    return {
      ...project,
      start: new Date(project.start).toLocaleDateString(),
      end: new Date(project.end).toLocaleDateString()
    };
  });
};

export default function Main() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function GetProject() {
      try {
        const response = await axios.get('http://localhost:8080/projects');
        const formattedProjects = formatProjectData(response.data);
        setProjects(formattedProjects);
      } catch (err) {
        console.error('프로젝트 목록을 가져오는 데 실패했습니다.', err);
      }
    }
    GetProject();
  }, []);

  return (
    <div>
      <div className="main">
        <img src={Mainlogo} alt="Main Logo" />
        <LuBell size={25} className="Bell" />
      </div>
      <hr />
      {projects.length > 0 && ( // Only render ProjectBox if projects exist
        <div className="ProjectBox">
          {projects.map(project => (
            <div key={project.id}>
              <h3>{project.project}</h3>
              <p>{project.description}</p>
              <p>{project.start}~{project.end}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
