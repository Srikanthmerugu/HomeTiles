// src/components/CategoriesSection.js

import React from 'react';
import { FiExternalLink } from "react-icons/fi";

import './CategoriesSection.css'; // Import the CSS file for this component
import { MdLinearScale } from 'react-icons/md';
import { SiAntdesign } from 'react-icons/si';

const CategoriesSection = () => {
  const categories = [
    { name: "Flore Tiles", imageUrl: "https://img.freepik.com/free-photo/seamless-pattern_23-2151021394.jpg?t=st=1728395422~exp=1728399022~hmac=8081077ba524bece44c61cdd1c6a9b5baad0f3c9ddfbd404a1e927aac0fbffe8&w=740" },
    { name: "Wall Tiles", imageUrl: "https://img.freepik.com/free-photo/digital-art-with-organic-floral-shapes_23-2151072740.jpg?t=st=1728395546~exp=1728399146~hmac=1ca1373d2807fd7e14ae65390f1f662f6047414686990bb9c733f28d2ca45606&w=740" },
    { name: "Parking Tiles", imageUrl: "https://img.freepik.com/free-photo/3d-rendering-geometric-mosaic_23-2150979648.jpg?t=st=1728395511~exp=1728399111~hmac=b566c4febea529864ccea0ca92e19124b8c22e1e472ec835ea5256f0022a990c&w=360" },
    { name: "Marble A", imageUrl: "https://img.freepik.com/free-photo/geometric-seamless-pattern_23-2151021376.jpg?t=st=1728395802~exp=1728399402~hmac=deb438a605bd432c0ac1efe6cace9a674c6e557fd92c69aa03a3c44e2548d559&w=740" },
    { name: "Marble B", imageUrl: "https://img.freepik.com/premium-photo/colorful-terrazzo-samples-showcasing-modern-interior-design-trends_928695-43575.jpg?w=996" },
    // { name: "Marble C", imageUrl: "path-to-image-6" },
  ];

  return (
    <div className='textmono-head'>
        <h1>Categories</h1>
        <p className=''><MdLinearScale /> <span><SiAntdesign className='head-icon'/>
        </span> <MdLinearScale /></p>
       
    <div id='next-page' className="CategoriesSection-container">
     
        <div className="CategoriesSection-grid">
        {categories.map((category, index) => (
            <div>
            
          <div key={index} className="CategoriesSection-item">
            <div className="CategoriesSection-image-wrapper">
              <img src={category.imageUrl} alt={category.name} className="CategoriesSection-image" />

              <div className="CategoriesSection-overlay">
                <span className="CategoriesSection-text"><a href='#'><FiExternalLink  className='category-next'/></a>
                </span>
              </div>
            </div>
          </div>
          <h3 className="CategoriesSection-Titles">{category.name}</h3>

          </div>
        ))}

      </div>

    </div>
    </div>
  );
};

export default CategoriesSection;
