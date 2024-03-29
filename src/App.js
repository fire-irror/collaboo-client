import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import JoinPage from './pages/JoinPage';
import SelectPage from './pages/SelectPage';
import SplashScreen from './pages/SplashScreen';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<SplashScreen/>}/>
        <Route path='/select' element={<SelectPage/>}/>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/join' element={<JoinPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
