import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Nav } from "../components/Nav/Nav.js";
import { Footer } from "../components/Footer/Footer.js";

const App = lazy(() => import("./App/App.js"));
const LandingPage = lazy(() => import("./LandingPage/LandingPage.js"));
export const Router = () => {
  return (
    <BrowserRouter basename="/">
      <Suspense fallback={<div>Loading...</div>}>
        <Nav />
        <Routes>
          <Route path="/stock-price" element={<App />} />
          <Route path="/" element={<LandingPage />} />
        </Routes>
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
};
