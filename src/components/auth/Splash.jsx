import React, { useEffect, useState } from 'react'
import '../../css/auth/Splash.css'
import logo from '../../assets/logo.svg'
import { useNavigate } from "react-router-dom"

function Splash() {
  
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setLoading(false);
      navigate('/select')
    }, 3000 );

    

    return () => clearTimeout(timer);
  }, [navigate]);


  return (
    <div className={`splash-screen ${loading ? 'visible' : 'hidden'}`}>
      <div className="splash-content">
        <img src={logo} className="splashLogo"/>
        <p className='splashP'>Team 프로젝트 협업 앱</p>
      </div>
    </div>
  );
}

export default Splash;