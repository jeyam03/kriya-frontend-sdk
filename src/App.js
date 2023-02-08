import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Portal, { PortalAnother } from "./pages/Portal";
import PortalNew from "./pages/PortalNew"
import Register from "./pages/Register";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="team" element={<OurTeam />} />
        <Route path="event/:id" element={<Event />} /> */}
        <Route path="portal" element={<Portal />} />/
        <Route path="register" element={<Register />} />
        <Route path="another-portal" element={<PortalAnother />} />
        <Route path="portal-new" element={<PortalNew />} />
        <Route index element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
