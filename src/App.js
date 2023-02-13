import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import PortalWrapper from "./pages/PortalWrapper";
import Event from "./pages/Event";
import Profile from "./pages/Profile";
import Workshop from "./pages/Workshop";
import AuthPortal from "./pages/AuthPortal";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="portal" element={<PortalWrapper />}>
          <Route path="event" element={<Event />} />
          <Route path="profile" element={<Profile />} />
          <Route path="workshop" element={<Workshop />} />
        </Route>
        <Route path="auth" element={<AuthPortal/>} />
        <Route index element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
