import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { StyledLogo } from '../components/NavBar/style';
import ElectronicsPage from '../components/Electronics';
import JeweleryPage from '../pages/JeweleryPage';
import MensClothingPage from '../pages/MensClothing';
import WomensClothingPage from '../pages/WomensClothing';
import ProductDescriptionPage from '../pages/Product-Details-Page';

export const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<StyledLogo />} />
        <Route path='/electronics' element={<ElectronicsPage />} />
        <Route path='/jewelery' element={<JeweleryPage />} />
        <Route path="/men's-clothing" element={<MensClothingPage />} />
        <Route path="/women's-clothing" element={<WomensClothingPage />} />
        <Route path="/electronics/:id" element={<ProductDescriptionPage />} />
      </Routes>
    </BrowserRouter>
  );
};
