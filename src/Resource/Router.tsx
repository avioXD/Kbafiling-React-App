import React, { useEffect, Fragment } from "react";
import FooterBar from "./Pages/Components/FooterBar";
import NavigationBar from "./Pages/Components/NavigationBar";
import { Home } from "./Pages/Home";
import {
  Routes,
  Route,
  useLocation,
  useNavigate,
  Navigate,
} from "react-router-dom";
import About from "./Pages/About";
import Pricing from "./Pages/Pricing";
import PricingDetailed from "./Pages/InnerPages/PricingDetailed";
import Contact from "./Pages/Contact";
import Resource from "./Pages/Resource";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ResetPassword from "./Pages/ResetPassword";
import OrderPage from "./Pages/InnerPages/OrderPage";
import TC from "./Pages/T&C";
import DashboardIndex from "./Pages/DashBoard/DashBoardIndex";
import LandingPage from "./Pages/DashBoard/Pages/Landing";
import AuthContext from "./Context/AuthContext";
import Profile from "./Pages/DashBoard/Pages/Profile";
import Notification from "./Pages/DashBoard/Pages/Notifications";
import UploadFiles from "./Pages/DashBoard/Pages/UploadFiles";
import Purchases from "./Pages/DashBoard/Pages/Purchases";
import Folder from "./Pages/DashBoard/Pages/Folder";
import PageNotFound from "./Pages/PageNotFound";
import OrderStatus from "./Pages/DashBoard/Pages/OrderStatus";

const ScrollToTop = (props) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{props.children}</>;
};

export const RouteComponent = () => {
  const location = useLocation();
  return (
    <>
      <NavigationBar />
      <ScrollToTop>
        <AuthContext.Consumer>
          {(context) => (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="resource" element={<Resource />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="resetpassword" element={<ResetPassword />} />
              <Route
                path="pricing/category/:_id"
                element={<PricingDetailed />}
              />
              <Route path="product/order/:_id" element={<OrderPage />} />
              <Route path="contact" element={<Contact />} />
              <Route path="terms" element={<TC />} />
              {context.isAuthenticated ? (
                <Route path="dashboard" element={<DashboardIndex />}>
                  <Route path="" element={<LandingPage />} />
                  <Route path="landing" element={<LandingPage />} />
                  <Route path="profile" element={<Profile />} />
                  <Route path="notifications" element={<Notification />} />
                  <Route path="uploadfiles" element={<UploadFiles />} />
                  <Route path="orderstatus" element={<OrderStatus />} />
                  <Route path="purchases" element={<Purchases />} />
                  <Route path="folder" element={<Folder />} />
                </Route>
              ) : (
                <Route path="dashboard" element={<Navigate to="/login" />} />
              )}
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          )}
        </AuthContext.Consumer>
      </ScrollToTop>
      {location.pathname.match("/dashboard") ? <></> : <FooterBar />}
    </>
  );
};
