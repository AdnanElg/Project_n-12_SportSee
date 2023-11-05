// Importation des modules nécessaires :
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import SideBar from "./components/sidebar/SideBar";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Settings from "./pages/settings/Settings";
import Community from "./pages/community/Community";
import NotFound from "./pages/notfound/NotFound";

// Définition du composant App :
const App = () => {
  return (
    <>
      <Navbar />
      <SideBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/community" element={<Community />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
