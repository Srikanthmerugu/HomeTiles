import React from 'react';
import './HeroSection.css';
import Animations from '../animations/Animations';

const HeroSection = () => {
  return (
    <div className='main-div'>
    <div className="hero-section">
     <section class="section-hero">


      <div class="hero">
        <div class="hero-text-box">
          <h1 class="heading-primary">
          Elevate Your Home with Timeless Design
          </h1>
          <p class="hero-description">
          At <span className='title-span'>Home Tiles</span>, we offer a stunning collection of tiles designed to enhance any room. From chic ceramics to modern mosaics, transform your home with style and quality.
          </p>
          <a href="#" class="btn btn--fill margin-right-btn"
            >Look in to more
          </a>
          <a href="#next-page" class="btn btn--outline margin-right-btn"
            >Learn more &darr;
          </a>
        </div>
        <div class="hero-img-box">
          {/* <img
            src="https://img.freepik.com/free-photo/bathroom-decorated-with-brazilian-folklore-design_23-2150794061.jpg?t=st=1728374176~exp=1728377776~hmac=95156b69a2dd4d9b6a128e2e2c1b56f51f97a21dedf0fe34502f27849ab82a09&w=1060"
            alt="Woman enjoying food, meals in storage container, and food bowls on a table"
            class="hero-img"
          /> */}


<div class="tailimg-container">
  <div class="tailimg-grid">
    <div class="tailimg-main-image">
      <img src="https://img.freepik.com/free-photo/3d-rendering-modern-luxury-hotel-office-reception-meeting-lounge_105762-2015.jpg?t=st=1728382310~exp=1728385910~hmac=b5368b85fcfdda3e98fb467bbbd667ce0ec146766d8a624630cd43f4117918d0&w=826" alt="Main Image"/>
    </div>

    <div class="tailimg-right-images">
      <div class="tailimg-top-right">
        <img src="https://img.freepik.com/free-vector/colored-realistic-ceramic-floor-tiles-horizontal-set-with-squares-different-types-styles-tiles_1284-29013.jpg?t=st=1728383150~exp=1728386750~hmac=ec13e78a002ef3e835ce349398a28ca95a333c307246fd9fa7b415a695b8ab6b&w=900" alt="Top Right Image"/>
      </div>
      <div class="tailimg-bottom-right">
        <img src="https://img.freepik.com/free-photo/uneven-sandstone-tile-wall-surface_53876-74691.jpg?t=st=1728383096~exp=1728386696~hmac=68c3e7758ef6c382cdb32f2ff4469cd98eace92508f8066c8c6278f360eab864&w=996" alt="Bottom Right Image"/>
      </div>
    </div>
  </div>
</div>




        </div>
        <div class="delivered-meals">
          <div class="delivered-imgs">
            <img src="https://img.freepik.com/free-photo/realistic-modern-interior-design_23-2151439817.jpg?t=st=1728374236~exp=1728377836~hmac=4d3d23af2ea07bf43dffc15b56ec864bf043841c18e394e888e31d696be00243&w=360" alt="Customer photo" />
            <img src="https://img.freepik.com/free-vector/illustration-tiles-textured-pattern_53876-3460.jpg?t=st=1728384398~exp=1728387998~hmac=6b6011856ba9a1ab363b7983372f509644fd915cd22ca385b1bfb00f04617166&w=740" alt="Customer photo" />
            <img src="https://img.freepik.com/free-vector/oriental-mandala-floral-pattern_53876-115253.jpg?t=st=1728384443~exp=1728388043~hmac=a6c19f756df0bca97e1d4f02308e1879f74a058e609633317f9aa0859a4ab1e8&w=996" alt="Customer photo" />
            <img src="https://img.freepik.com/free-vector/flat-design-complex-arabesque-pattern_23-2149184786.jpg?t=st=1728384496~exp=1728388096~hmac=18d68adbd81f78439944eac70b69c52322e461cffa3ca530272997de6a4f44c2&w=740" alt="Customer photo" />
            <img src="https://img.freepik.com/free-vector/watercolor-ornamental-flower-background_23-2148400149.jpg?t=st=1728384522~exp=1728388122~hmac=d1e36026ee503d63e0cb3a03e724e25530f4f712ed35dcdcd41d5d6247056601&w=996" alt="Customer photo" />
            <img src="https://img.freepik.com/free-vector/flat-design-complex-arabesque-pattern_23-2149184791.jpg?t=st=1728384544~exp=1728388144~hmac=5c17d51383a0eea3a04d6db3ada8f9a3361affd7c07e7623b8c262179f02712e&w=740" alt="Customer photo" />
          </div>
          <p class="delivered-text">
            <span>500+</span> Designs liked last year!
          </p>
        </div>
      </div>
    </section>
      
    </div>
    <Animations />
    </div>
  );
};

export default HeroSection;
