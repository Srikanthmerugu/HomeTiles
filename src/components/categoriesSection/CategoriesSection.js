import React from 'react';

const CategoriesSection = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Categories</h2>
      <div className="row">
        <div className="col-md-4 text-center">
          <img src="tile1.jpg" className="rounded-circle mb-3" alt="Tile A" />
          <h5>Tile A</h5>
        </div>
        <div className="col-md-4 text-center">
          <img src="tile2.jpg" className="rounded-circle mb-3" alt="Tile B" />
          <h5>Tile B</h5>
        </div>
        <div className="col-md-4 text-center">
          <img src="tile3.jpg" className="rounded-circle mb-3" alt="Tile C" />
          <h5>Tile C</h5>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-4 text-center">
          <img src="marble1.jpg" className="rounded-circle mb-3" alt="Marble A" />
          <h5>Marble A</h5>
        </div>
        <div className="col-md-4 text-center">
          <img src="marble2.jpg" className="rounded-circle mb-3" alt="Marble B" />
          <h5>Marble B</h5>
        </div>
        <div className="col-md-4 text-center">
          <img src="marble3.jpg" className="rounded-circle mb-3" alt="Marble C" />
          <h5>Marble C</h5>
        </div>
      </div>
    </div>
  );
};

export default CategoriesSection;
