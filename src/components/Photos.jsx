import React from "react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import cn from 'classnames';
import "yet-another-react-lightbox/styles.css";

const leftRectangle = [0, 6, 12];
const rightRectangle = [5, 11];
const rightSquare = [2, 8, 14];

const Photo = ({ photo, setOpen, setIndex }) => {
  const classes = cn({
    'gallery__left-rectangle-item': leftRectangle.includes(photo.index),
    'gallery__right-square-item': rightSquare.includes(photo.index),
    'gallery__right-rectangle-item': rightRectangle.includes(photo.index),
  });
  return (
    <li className={classes}>
      <a onClick={(event) => {
        event.preventDefault();
        setOpen(true)
        setIndex(photo.index);
      }} className="gallery__link" href={photo.src}>
        <img className="gallery__photo" src={photo.previewPhotourl} alt="Фото Екатерины Кушник" />
      </a>
    </li>
  )
}

const Photos = ({ photos }) => {
  const [open, setOpen] = React.useState(false);
  const [index, setIndex] = React.useState(0);
  const zoomRef = React.useRef(null);

  return (
    <>
      <ul className="gallery__list gallery__main-page-list">
        {photos.map((photo) => {
          return (
            <Photo key={photo.id} photo={photo} setOpen={setOpen} setIndex={setIndex} />
            )})}
      </ul>
      <Lightbox
        index={index}
        plugins={[Zoom]}
        zoom={{ ref: zoomRef }}
        open={open}
        close={() => setOpen(false)}
        on={{
          click: () => zoomRef.current?.zoomIn()
        }}
        slides={photos}
      />
    </>
  );
};

export default Photos;
