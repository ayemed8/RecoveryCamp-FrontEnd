import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import SocialProgram from './pages/SocialProgram';
import Impact from './pages/Impact';
import Team from './pages/Team';
import Signup from './pages/SignUp';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

const AppRoutes = () => {
  return (
    <Routes>
      {/* public routes */}
      <Route path="/" element={<Home />} />
      <Route path="/socialPrograms" element={<SocialProgram />} />
      <Route path="/impact" element={<Impact />} />
      <Route path="/team" element={<Team />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      {/* auth routes */}
    </Routes>
  );
};

export default App;
