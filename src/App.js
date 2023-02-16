import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import PortalWrapper from "./pages/PortalWrapper";
import Event from "./pages/Event";
import Profile from "./pages/Profile";
import Workshop from "./pages/Workshop";
import EventList from "./pages/EventList";
import Paper from "./pages/Paper";
import AuthPortal from "./pages/AuthPortal";
import Error404 from "./pages/Error404";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="portal" element={<PortalWrapper />}>
          <Route path="event" element={<EventList />} />
          <Route path="event/:id" element={<Event />} />
          <Route path="paper/:id" element={<Paper />} />
          <Route path="workshop/:id" element={<Workshop />} />
          <Route index element={<Navigate to="/portal/event" />} />
          {/* <Route path="profile" element={<Profile />} /> */}
        </Route>
        {/* <Route path="auth" element={<AuthPortal />} /> */}
        <Route index element={<Landing />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
