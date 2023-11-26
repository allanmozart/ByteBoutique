import { BrowserRouter, Route, Routes } from "react-router-dom";
import { StyledLogo } from "../components/NavBar/style";
import ElectronicsPage from "../components/Electronics";

export const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={< StyledLogo />} />
        <Route path="/electronics" element={< ElectronicsPage />} />
        <Route/>
      </Routes>
    </BrowserRouter>
  );
};
