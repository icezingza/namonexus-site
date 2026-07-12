import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BrandWebsite from './pages/BrandWebsite';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BrandWebsite />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
