import React, { useState, useEffect } from 'react';
import { IoHomeOutline } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io"; 
import { AiFillPlusCircle } from "react-icons/ai";
import { IoChatbubblesOutline } from "react-icons/io5";
import { BsPerson } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import '../../css/common/Nav.css'

export default function Nav() {
  const [activeIcon, setActiveIcon] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {

    switch (window.location.pathname) {
      case '/main':
        setActiveIcon('home');
        break;
      case '/post':
        setActiveIcon('plus');
        break;
      case '/mypage':
        setActiveIcon('mypage');
        break;
      default:
        setActiveIcon(null);
    }
  }, [navigate]);

  const handlePlusButtonClick = () => {
    navigate('/post');
  }

  const handleMypageClick = () => {
    navigate('/mypage');
  }

  const handelHomeButtonClick = () => {
    navigate('/main');
  }

  const handleSearchClick = () => {
    setActiveIcon('search');
  }

  const handleChatClick = () => {
    navigate('/noticeboard');
  }

  return (
    <div className='Nav_bar'>
      <IoHomeOutline size='25' color={activeIcon === 'home' ? '#4198FF' : '#000'} onClick={handelHomeButtonClick} />
      <IoMdSearch size='25' color={activeIcon === 'search' ? '#4198FF' : '#000'} onClick={handleSearchClick} />
      <AiFillPlusCircle size='35' color={activeIcon === 'plus' ? '#4198FF' : '#4198FF'} onClick={handlePlusButtonClick} />
      <IoChatbubblesOutline size='25' color={activeIcon === 'chat' ? '#4198FF' : '#000'} onClick={handleChatClick} />
      <BsPerson size='25' color={activeIcon === 'mypage' ? '#4198FF' : '#000'} onClick={handleMypageClick} />
    </div>
  );
}
