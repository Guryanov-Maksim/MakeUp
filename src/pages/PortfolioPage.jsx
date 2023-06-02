import Gallery from "../components/Gallery.jsx";
import { galleryPagePhotos } from "../photoLists.js";
import Navigation from '../components/Navigation.jsx';
import Photos from "../components/Photos.jsx";
import Footer from "../components/Footer.jsx";

const PortfolioPage = () => {
  return (
    <>
      <Navigation activePageId={'portfolioId'} />
      <main>
        <section className="gallery">
          <div className="custom-container gallery__container">

            <h2 className="gallery__header custom-header">Мое Портфолио</h2>
            <Photos photos={galleryPagePhotos} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
};

export default PortfolioPage;
