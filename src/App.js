import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import ImageDetails from "./components/ImageDetails";
import ImageIndex from "./components/ImageIndex";
import AboutPage from "./components/AboutMe";
import Header from "./components/Header";
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<ImageIndex />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/images/:id' element={<ImageDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
