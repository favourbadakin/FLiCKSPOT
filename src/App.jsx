import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
//import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
    <Navbar />
      <Home />
      <Footer />
    </>
  );
};

export default App;
