import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeroSection from './components/heroSection/HeroSection';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import ProductCarousel from './components/productCarousel/ProductCarousel';
import CategoriesSection from './components/categoriesSection/CategoriesSection';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* <Route path="/" element={<HeroSection />} /> */}
        {/* <Route path="/products" element={<CategoriesSection />} /> */}
        {/* <Route path="/featured" element={<FeaturedProducts />} /> */}
        {/* <Route path="/testimonials" element={<Testimonials />} /> */}
      </Routes>
      {/* <ProductCarousel /> */}
      <Footer />
    </Router>
  );
}

export default App;
