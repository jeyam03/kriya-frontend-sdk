import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import Landing from "./pages/Landing";
import PortalWrapper from "./pages/PortalWrapper";
import Event from "./pages/Event";
import Profile from "./pages/Profile";
import Workshop from "./pages/Workshop";
import EventList from "./pages/EventList";
import Paper from "./pages/Paper";
import AuthPortal from "./pages/AuthPortal";
import Error404 from "./pages/Error404";
import Verification from "./pages/MiddlePorts/Verification";
import PaymentSuccess from "./pages/MiddlePorts/PaymentSuccess";
import { Fragment } from "react";
import { Toaster } from "react-hot-toast";
import PaymentFailure from "./pages/MiddlePorts/PaymentFailure";
import AuthProvider from "./pages/AuthProvider";
import ProtectedRoute from "./pages/ProtectedRoute";
import OtherPayments from "./pages/AuthPortal/OtherPayments";

const App = () => {
  return (
    <Fragment>
      <Toaster />
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="portal" element={<PortalWrapper />}>
              <Route path="event" element={<EventList />} />
              <Route path="event/:id" element={<Event />} />
              <Route path="paper/:id" element={<Paper />} />
              <Route path="workshop/:id" element={<Workshop />} />
              <Route index element={<Navigate to="/portal/event" />} />
              <Route path="profile" element={<ProtectedRoute />}>
                <Route index element={<Profile />} />
              </Route>
            </Route>
            <Route path="payment/failure" element={<PaymentFailure />} />
            <Route path="payment/success" element={<PaymentSuccess />} />
            <Route path="verify/:id" element={<Verification />} />
            <Route path="auth" element={<Outlet />}>
              <Route path="payment" element={<OtherPayments />} />
              <Route index element={<AuthPortal />} />
            </Route>
            <Route index element={<Landing />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </Fragment>
  );
};

export default App;
