import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import MensClothingPage from "./pages/MensClothing";
import WomensClothingPage from "./pages/WomensClothing";
import JeweleryPage from "./pages/JeweleryPage";
import ElectronicsPage from "./pages/ElectronicsPage";
import ProductDescriptionPage from "./pages/Product-Details-Page";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/men's-clothing" element={<MensClothingPage />} />
        <Route path="/women's-clothing" element={<WomensClothingPage />} />
        <Route path="/jewelery" element={<JeweleryPage />} />
        <Route path="/electronics" element={<ElectronicsPage />} />
        <Route
          path="/product/:productId"
          element={<ProductDescriptionPage />}
        />
      </Routes>
    </Router>
  );
}

export default App;
