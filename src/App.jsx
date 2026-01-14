import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import GameMap from './components/GameMap';
import LecturePage from './components/LecturePage';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GameMap />} />
        <Route path="/topic/:topicId" element={<LecturePage />} />
      </Routes>
    </Router>
  );
}

export default App;
