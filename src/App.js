import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Portal, { PortalAnother } from "./pages/Portal";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="team" element={<OurTeam />} />
        <Route path="event/:id" element={<Event />} /> */}
        <Route path="portal" element={<Portal />} />/
        <Route path="another-portal" element={<PortalAnother />} />/
        <Route index element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
