import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TeacherView } from './pages/TeacherView';
import { DisplayView } from './pages/DisplayView';
import BrandWebsite from './pages/BrandWebsite';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BrandWebsite />} />
        <Route path="/teacher" element={<TeacherView />} />
        <Route path="/display" element={<DisplayView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
