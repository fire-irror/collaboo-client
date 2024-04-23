import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import JoinPage from './pages/JoinPage';
import SelectPage from './pages/SelectPage';
import SplashScreen from './pages/SplashScreen';
import MainPage from './pages/MainPage';
import PostPage from './pages/PostPage';
import ProjectPage from './pages/ProjectPage';
import NoticeBoardPage from './pages/NoticeBoardPage';
import PostBoardPage from './pages/PostBoardPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<SplashScreen/>}/>
        <Route path='/select' element={<SelectPage/>}/>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/join' element={<JoinPage/>} />
        <Route path='/main' element={<MainPage/>} />
        <Route path='/post' element={<PostPage/>} />
        <Route path='/project' element={<ProjectPage/>} />
        <Route path='/noticeboard' element={<NoticeBoardPage/>} />
        <Route path='/postBoard' element={<PostBoardPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
