import React from "react";
import { Link } from "react-router-dom";

import Photos from "./Photos.jsx";
import routes from "../routes.js";


const Gallery = ({ photos }) => {
  
  return (
    <>
    <section className="gallery">
      <div className="custom-container gallery__container">
        <h2 className="gallery__header custom-header">Мое Портфолио</h2>
        <Photos photos={photos} />
        <Link className="btn btn-secondary gallery__all-photos-link" to={routes.portfolioRoute()}>Посмотреть все работы</Link>
      </div>
    </section>
    </>
  );
};

export default Gallery;
