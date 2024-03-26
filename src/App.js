import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signinup from './Signinup/Signinup'
import Login from './Login/Login';
import SignUp from './SignUp/SignUp';
import Splash from './Splash/Splash';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={< Splash/>} />
        <Route path='/signinup' element={<Signinup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
