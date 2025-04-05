import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import './FeaturedProducts.css';
import { MdLinearScale } from 'react-icons/md';
import { SiAntdesign } from 'react-icons/si';

const FloreTiles = () => {
  const products = [
    { name: "Flore Tiles", imageUrl: "https://img.freepik.com/free-photo/seamless-pattern_23-2151021394.jpg?t=st=1728395422~exp=1728399022~hmac=8081077ba524bece44c61cdd1c6a9b5baad0f3c9ddfbd404a1e927aac0fbffe8&w=740", details: "Glossy tiles for walls, floors, facade / 30x30cm / IMPERIA GOLD / 6 FACES / EG-6954" },
    { name: "Wall Tiles", imageUrl: "https://img.freepik.com/free-photo/digital-art-with-organic-floral-shapes_23-2151072740.jpg?t=st=1728395546~exp=1728399146~hmac=1ca1373d2807fd7e14ae65390f1f662f6047414686990bb9c733f28d2ca45606&w=740", details: "Glossy tiles for walls, floors, facade / 40x40cm / IMPERIA GOLD / 6 FACES / EG-6954" },
    { name: "Parking Tiles", imageUrl: "https://img.freepik.com/free-photo/3d-rendering-geometric-mosaic_23-2150979648.jpg?t=st=1728395511~exp=1728399111~hmac=b566c4febea529864ccea0ca92e19124b8c22e1e472ec835ea5256f0022a990c&w=360", details: "Glossy tiles for walls, floors, facade / 50x50cm / IMPERIA GOLD / 6 FACES / EG-6954" },
    { name: "Marble A", imageUrl: "https://img.freepik.com/free-photo/geometric-seamless-pattern_23-2151021376.jpg?t=st=1728395802~exp=1728399402~hmac=deb438a605bd432c0ac1efe6cace9a674c6e557fd92c69aa03a3c44e2548d559&w=740", details: "Glossy tiles for walls, floors, facade / 60x60cm / IMPERIA GOLD / 6 FACES / EG-6954" },
    { name: "Marble B", imageUrl: "https://img.freepik.com/premium-photo/colorful-terrazzo-samples-showcasing-modern-interior-design-trends_928695-43575.jpg?w=996", details: "Glossy tiles for walls, floors, facade / 70x70cm / IMPERIA GOLD / 6 FACES / EG-6954" },
    { name: "Wall Tiles", imageUrl: "https://img.freepik.com/free-photo/digital-art-with-organic-floral-shapes_23-2151072740.jpg?t=st=1728395546~exp=1728399146~hmac=1ca1373d2807fd7e14ae65390f1f662f6047414686990bb9c733f28d2ca45606&w=740", details: "Glossy tiles for walls, floors, facade / 40x40cm / IMPERIA GOLD / 6 FACES / EG-6954" },
    { name: "Parking Tiles", imageUrl: "https://img.freepik.com/free-photo/3d-rendering-geometric-mosaic_23-2150979648.jpg?t=st=1728395511~exp=1728399111~hmac=b566c4febea529864ccea0ca92e19124b8c22e1e472ec835ea5256f0022a990c&w=360", details: "Glossy tiles for walls, floors, facade / 50x50cm / IMPERIA GOLD / 6 FACES / EG-6954" },
    { name: "Marble A", imageUrl: "https://img.freepik.com/free-photo/geometric-seamless-pattern_23-2151021376.jpg?t=st=1728395802~exp=1728399402~hmac=deb438a605bd432c0ac1efe6cace9a674c6e557fd92c69aa03a3c44e2548d559&w=740", details: "Glossy tiles for walls, floors, facade / 60x60cm / IMPERIA GOLD / 6 FACES / EG-6954" },
    { name: "Marble B", imageUrl: "https://img.freepik.com/premium-photo/colorful-terrazzo-samples-showcasing-modern-interior-design-trends_928695-43575.jpg?w=996", details: "Glossy tiles for walls, floors, facade / 70x70cm / IMPERIA GOLD / 6 FACES / EG-6954" },
    { name: "Marble A", imageUrl: "https://img.freepik.com/free-photo/geometric-seamless-pattern_23-2151021376.jpg?t=st=1728395802~exp=1728399402~hmac=deb438a605bd432c0ac1efe6cace9a674c6e557fd92c69aa03a3c44e2548d559&w=740", details: "Glossy tiles for walls, floors, facade / 60x60cm / IMPERIA GOLD / 6 FACES / EG-6954" },
    { name: "Wall Tiles", imageUrl: "https://img.freepik.com/free-photo/digital-art-with-organic-floral-shapes_23-2151072740.jpg?t=st=1728395546~exp=1728399146~hmac=1ca1373d2807fd7e14ae65390f1f662f6047414686990bb9c733f28d2ca45606&w=740", details: "Glossy tiles for walls, floors, facade / 40x40cm / IMPERIA GOLD / 6 FACES / EG-6954" },
    { name: "Parking Tiles", imageUrl: "https://img.freepik.com/free-photo/3d-rendering-geometric-mosaic_23-2150979648.jpg?t=st=1728395511~exp=1728399111~hmac=b566c4febea529864ccea0ca92e19124b8c22e1e472ec835ea5256f0022a990c&w=360", details: "Glossy tiles for walls, floors, facade / 50x50cm / IMPERIA GOLD / 6 FACES / EG-6954" },

  ];

  return (
    <div className='FeaturedProducts-main-2'>
    <div className="FeaturedProducts-containe">
    <div className='textmono-head'>
    <h1>Flore Tiles</h1>
    <p className=''><MdLinearScale /> <span><SiAntdesign className='head-icon'/>
        </span> <MdLinearScale /></p>
        </div>
      <div className="FeaturedProducts-grid">
        {products.map((product, index) => (
          <div key={index} className="FeaturedProducts-card">
            <div className="FeaturedProducts-card-image">
              <img src={product.imageUrl} alt={product.name} />
            </div>
            <div className="FeaturedProducts-card-info">
              <h3>{product.name}</h3>
              <p>{product.details}</p>
              <div className="FeaturedProducts-stock">
                <FaCheckCircle className="FeaturedProducts-stock-icon" /> In Stock
              </div>
            </div>
          </div>
        ))}

        <div></div>
        {/* <div className=''>
            <h1>For more..</h1>
            <a href="#" class="btn btn--fill margin-right-btn"
            >Look in to more
          </a>
        </div> */}
      </div>
    </div>
    </div>
  );
};

export default FloreTiles;
