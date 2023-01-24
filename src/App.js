import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="team" element={<OurTeam />} />
        <Route path="event/:id" element={<Event />} /> */}
        <Route index element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
