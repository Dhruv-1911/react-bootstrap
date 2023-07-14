import React from "react";
import "./App.css"
import Navbar from "./components/inc/navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Footer from "./components/inc/footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from "./components/pages/Product";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/product" element={<Product />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
