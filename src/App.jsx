import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'
import ViewAll from './pages/ViewAll'


const App = () => {
  
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<LogIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/viewall" element={<ViewAll />}></Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
