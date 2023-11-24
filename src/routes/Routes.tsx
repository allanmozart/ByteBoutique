import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../components/LandingPage";
import { StyledLogo } from "../components/NavBar/style";
import ElectronicsPage from "../components/Electronics";

export const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={< StyledLogo />} />
        <Route path="/electronics" element={< ElectronicsPage />} />
        <Route/>
      </Routes>
    </BrowserRouter>
  );
};
