import React from 'react';
import './App.css';
import 'animate.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeroSection from './components/heroSection/HeroSection';
import CategoriesSection from './components/categoriesSection/CategoriesSection';

import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './Home/Home';
import Contact from './components/contact/Contact';
import FeaturedProducts from './components/featuredProducts/FeaturedProducts';
import FloreTiles from './components/featuredProducts/FloreTiles';
import WallTiles from './components/featuredProducts/WallTiles';
import ParkingTiles from './components/featuredProducts/ParkingTiles';
import Gallery from './gallary/Gallery';


function App() {
  return (
    <Router>
      <Header />

      
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/products" element={<CategoriesSection />} /> */}
        <Route path="/featured" element={<FeaturedProducts/>} />
        <Route path="/flore-tiles" element={<FloreTiles />} />
        <Route path="/wall-tiles" element={<WallTiles />} />
        <Route path='/parking-tiles' element={<ParkingTiles />} />
        <Route path='/gallery' element={<Gallery />} />
        {/* <Route path="/testimonials" element={<Testimonials />} /> */}
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/gallery" element={<Gallery />} /> */}
      </Routes>
      {/* <ProductCarousel /> */}
      <Footer />
    </Router>
  );
}

export default App;
