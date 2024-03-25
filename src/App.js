import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'; 
import Signinup from './Signinup/Signinup'

  function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Signinup/>} />
      </Routes>
    </Router>
  );
}

export default App;
