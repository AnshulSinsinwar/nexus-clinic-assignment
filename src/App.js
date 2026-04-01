import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from './Layout';
import HomePage from './HomePage';
import ServicesPage from './ServicesPage';
import AboutPage from './AboutPage';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar theme="dark" toggleTheme={() => {}} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
