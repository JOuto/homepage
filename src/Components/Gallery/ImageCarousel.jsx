import React from 'react';

import '../../Page.css';
import GalleryControlBar from './GalleryControlBar';

import FullscreenView from './FullscreenView';

const ImageGallery = ({ images }) => {
  const [imgIndex, setImgIndex] = React.useState(0);
  const [showImgDetails, setShowImgDetails] = React.useState(false);
  const [fullScreenView, setFullScreenView] = React.useState(false);
  const [image, setImage] = React.useState();

  console.log(image);

  return (
    <div className='galleryWrapper'>
      <FullscreenView
        image={image}
        images={images}
        fullScreenView={fullScreenView}
        setFullScreenView={setFullScreenView}
        imageIndex={imgIndex}
        setImageIndex={setImgIndex}
      />
      <GalleryControlBar
        setImgIndex={setImgIndex}
        imgIndex={imgIndex}
        images={images}
      />

      <div style={{ width: '100%' }}>
        <br />
        <img
          style={{ paddingLeft: '20px', paddingTop: '20px' }}
          onClick={() => {
            console.log(images);
            console.log(imgIndex);
            console.log(images[imgIndex]);
            setImage(images[imgIndex]);
            console.log(image);

            setFullScreenView(true);
          }}
          src={images[imgIndex].imgUrl}
          alt='img'
          width='85%'
        />
        {/* 
        {showImgDetails && <p>{images[imgIndex].title}</p> */}
      </div>
    </div>
  );
};
export default ImageGallery;
