import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Private from "./routes/Private";
import Profile from "./components/Profile";
import DetailsPage from "./components/DetailsPage";
import Footer from "./components/Footer";
import CategoryPage from "./Pages/Category";
import CartPage from "./Pages/CartPage";
import SearchPage from "./Pages/SearchPage";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productdetails/:slug" element={<DetailsPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/men" element={<h1>Men</h1>} />
        <Route path="/women" element={<h1>Women</h1>} />
        <Route path="/kids" element={<h1>Kids</h1>} />
        <Route path="/category/:name" element={<CategoryPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route element={<Private />}>
          <Route path="/cart" element={<CartPage />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
