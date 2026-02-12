import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import UploadResume from './pages/UploadResume';
import SkillAnalysis from './pages/SkillAnalysis';
import CareerRecommendations from './pages/CareerRecommendations';
import LearningRoadmap from './pages/LearningRoadmap';
import InterviewSimulator from './pages/InterviewSimulator';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/upload-resume" element={<UploadResume />} />
        <Route path="/skill-analysis" element={<SkillAnalysis />} />
        <Route path="/career-recommendations" element={<CareerRecommendations />} />
        <Route path="/learning-roadmap" element={<LearningRoadmap />} />
        <Route path="/interview-simulator" element={<InterviewSimulator />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
