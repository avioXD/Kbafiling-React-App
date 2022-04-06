import React, { useEffect, Fragment } from "react";
import FooterBar from "./Pages/Components/FooterBar";
import NavigationBar from "./Pages/Components/NavigationBar";
import { Home } from "./Pages/Home";
import { Routes, Route, useLocation } from "react-router-dom";
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

const ScrollToTop = (props) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{props.children}</>;
};

export const RouteComponent = () => {
  return (
    <>
      <NavigationBar />
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="resource" element={<Resource />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="resetpassword" element={<ResetPassword />} />
          <Route path="pricing/category/:_id" element={<PricingDetailed />} />
          <Route path="product/order/:_id" element={<OrderPage />} />
          <Route path="contact" element={<Contact />} />
          <Route path="terms" element={<TC />} />
          <Route path="/dashboard" element={<DashboardIndex />}></Route>
        </Routes>
      </ScrollToTop>
      <FooterBar />
    </>
  );
};
