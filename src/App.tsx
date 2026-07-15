import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TeacherView } from './pages/TeacherView';
import { DisplayView } from './pages/DisplayView';
import BrandWebsite from './pages/BrandWebsite';
import Projects from './pages/Projects';
import NamoCareCaseStudy from './pages/projects/NamoCare';
import Research from './pages/Research';
import FrontierOfSovereignAI from './pages/research/FrontierOfSovereignAI';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BrandWebsite />} />
        <Route path="/teacher" element={<TeacherView />} />
        <Route path="/display" element={<DisplayView />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/namo-care" element={<NamoCareCaseStudy />} />
        <Route path="/research" element={<Research />} />
        <Route path="/research/frontier-of-sovereign-ai" element={<FrontierOfSovereignAI />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
