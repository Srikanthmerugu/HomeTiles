import { useState, useEffect } from 'react';
import './Gallery.css';
import { MdLinearScale } from 'react-icons/md';
import { SiAntdesign } from 'react-icons/si';

const Gallery = () => {
  const [products] = useState([
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
  ]);

  const [selectedImage, setSelectedImage] = useState(null);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [animationDirection, setAnimationDirection] = useState('right');

  const getRandomSize = () => {
    const sizes = ['small', 'medium', 'large', 'wide', 'tall'];
    return sizes[Math.floor(Math.random() * sizes.length)];
  };

  const openGallery = (index, direction) => {
    setSelectedImage(index);
    setAnimationDirection(direction);
    setIsGalleryOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
    document.body.style.overflow = 'auto';
  };

  const navigate = (direction) => {
    if (direction === 'prev') {
      const newIndex = selectedImage === 0 ? products.length - 1 : selectedImage - 1;
      setSelectedImage(newIndex);
      setAnimationDirection('left');
    } else {
      const newIndex = selectedImage === products.length - 1 ? 0 : selectedImage + 1;
      setSelectedImage(newIndex);
      setAnimationDirection('right');
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isGalleryOpen) {
        if (e.key === 'Escape') closeGallery();
        if (e.key === 'ArrowLeft') navigate('prev');
        if (e.key === 'ArrowRight') navigate('next');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isGalleryOpen, selectedImage]);

  return (
    <div className="gallery-container">
      {/* <h1 className="gallery-title">Tile Collection</h1> */}
       <div className='textmono-head'>
          <h1>Tile Collection</h1>
          <p className=''><MdLinearScale /> <span><SiAntdesign className='head-icon'/>
              </span> <MdLinearScale /></p>
              </div>
      <div className="masonry-grid">
        {products.map((product, index) => (
          <div 
            key={index} 
            className={`grid-item ${getRandomSize()}`}
            onClick={() => openGallery(index, 'right')}
          >
            <div className="image-container">
              <img 
                src={product.imageUrl} 
                alt={product.name} 
                className="gallery-image"
                loading="lazy"
              />
              <div className="image-overlay">
                <h3>{product.name}</h3>
                <p>{product.details.split(' / ')[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {isGalleryOpen && (
        <div className={`lightbox ${isGalleryOpen ? 'active' : ''}`}>
          <div className="lightbox-overlay" onClick={closeGallery}></div>
          <div className={`lightbox-content ${animationDirection}`}>
            <button className="close-btn" onClick={closeGallery}>&times;</button>
            <button className="nav-btn prev" onClick={() => navigate('prev')}>&larr;</button>
            <div className="lightbox-image-container">
              <img 
                src={products[selectedImage].imageUrl} 
                alt={products[selectedImage].name}
                className="lightbox-image"
              />
              <div className="image-info">
                <h2>{products[selectedImage].name}</h2>
                <p>{products[selectedImage].details}</p>
              </div>
            </div>
            <button className="nav-btn next" onClick={() => navigate('next')}>&rarr;</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;