import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeroSection from './components/heroSection/HeroSection';
import CategoriesSection from './components/categoriesSection/CategoriesSection';

import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './Home/Home';
import Contact from './components/contact/Contact';


function App() {
  return (
    <Router>
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/products" element={<CategoriesSection />} /> */}
        {/* <Route path="/featured" element={<FeaturedProducts />} /> */}
        {/* <Route path="/testimonials" element={<Testimonials />} /> */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* <ProductCarousel /> */}
      <Footer />
    </Router>
  );
}

export default App;
