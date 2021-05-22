import React from 'react';
import './GalleryControlBar.css';

const GalleryControlBar = ({ setImgIndex, imgIndex, images }) => {
 
  const next = () => {
    if (imgIndex === images.length - 1) {
      return setImgIndex(0);
    }
    setImgIndex(imgIndex + 1);
  };
  const prev = () => {
    if (imgIndex === 0) {
      return setImgIndex(images.length - 1);
    }
    setImgIndex(imgIndex - 1);
  };
 

  return (
    <div className='ControlBarWrapper'>
      <h4>{images[imgIndex].title}</h4>
      <p>{images[imgIndex].technique}</p>
      <div className='buttonWrapper'>
        <span onClick={prev}>PREV</span>
        <span>/</span>
        <span onClick={next}>NEXT</span>
       
      </div>
    </div>
  );
};
export default GalleryControlBar;
