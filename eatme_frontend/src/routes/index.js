import React from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./protectedRoutes";
import SignInPage from "../pages/signInPage";
import NotFound from "../pages/notFoundPage";
import Layout from "../components/Layout";

const Router = () => {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/login" element={<SignInPage />} />

      {/* Protected routes */}
      <Route element={<ProtectedRoutes />}>
        <Route path="/" element={<Layout />}></Route>
      </Route>

      {/* Invalid routes */}
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
