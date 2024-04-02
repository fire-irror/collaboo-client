import React from "react";
import '../../css/common/Header.css'
import { CgChevronLeft } from "react-icons/cg";
import { useNavigate } from "react-router-dom";


function CustomIcon({ size }) {
  return <CgChevronLeft size={size} />;
}

export default function Header() {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate(-1)} className="backBtn"><CustomIcon size={30} /></button>
      <hr/>
    </div>
  )
} 