// Importation des modules :
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Dashboard from "./pages/dashboard/Dashboard";
import Profile from "./pages/profile/Profile";
import Settings from "./pages/settings/Settings";
import Community from "./pages/community/Community";
import NotFound from "./pages/notfound/NotFound";
import SideBar from "./components/sidebar/SideBar";
/**
 * Composant principal représentant l'application.
 * @component
 * @author El Ghalbzouri-Adnan <elghalbzouriadnan@gmail.com>
 * @returns {JSX.Element} Composant de l'application.
 */
const App = (): JSX.Element => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/community" element={<Community />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <SideBar />
    </>
  );
};

// Exportation de l'App :
export default App;
