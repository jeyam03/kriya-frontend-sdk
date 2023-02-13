import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Register from "./pages/Register";
import PortalWrapper from "./pages/PortalWrapper";
import Event from "./pages/Event";
import Profile from "./pages/Profile";
import Workshop from "./pages/Workshop";
import EventList from "./pages/EventList";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="portal" element={<PortalWrapper />} >
            <Route path="event/:id" element={<Event />} />
          <Route path="event" element={<EventList />} />
          <Route path="profile" element={<Profile />} />
          <Route path="workshop" element={<Workshop />} />
        </Route>
        <Route path="register" element={<Register />} />
        <Route index element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
