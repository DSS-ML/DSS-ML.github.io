import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import GalaxySelection from './components/GalaxySelection';
import GameMap from './components/GameMap';
import LecturePage from './components/LecturePage';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/galaxies" element={<GalaxySelection />} />
        <Route path="/galaxy/unsupervised-2026" element={<GameMap />} />
        <Route path="/topic/:topicId" element={<LecturePage />} />
      </Routes>
    </Router>
  );
}

export default App;
