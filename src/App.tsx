import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import MensClothingPage from './pages/MensClothing';
import WomensClothingPage from './pages/WomensClothing';
import JeweleryPage from './pages/JeweleryPage';
import ElectronicsPage from './pages/ElectronicsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/men-clothing' element={<MensClothingPage />} />
        <Route path='/women-clothing' element={<WomensClothingPage />} />
        <Route path='/jewelery' element={<JeweleryPage />} />
        <Route path='/electronics' element={<ElectronicsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
