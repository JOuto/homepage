import React from 'react';
import { Icon } from 'semantic-ui-react';
import '../../Page.css';
import GalleryControlBar from './GalleryControlBar';

import FullscreenView from '../FullscreenView';

const ImageGallery = ({ images }) => {
  const [imgIndex, setImgIndex] = React.useState(0);
  const [showImgDetails, setShowImgDetails] = React.useState(false);
  const [fullScreenView, setFullScreenView] = React.useState(false);
  const [image, setImage] = React.useState('');
  console.log(images);
  console.log(images[2].imgUrl);
  console.log(imgIndex);

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

  const onMouseEnter = () => {
    setShowImgDetails(true);
  };
  const onMouseLeave = () => {
    setShowImgDetails(false);
  };

  return (
    <div className='galleryWrapper'>
      <FullscreenView
        image={image}
        fullScreenView={fullScreenView}
        setFullScreenView={setFullScreenView}
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
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onClick={() => {
            setFullScreenView(true);
            setImage(images[imgIndex].imgUrl);
          }}
          src={images[imgIndex].imgUrl}
          alt='img'
          width='85%'
        />
        {/* 
        {showImgDetails && <p>{images[imgIndex].title}</p> */}}
      </div>
    </div>
  );
};
export default ImageGallery;
