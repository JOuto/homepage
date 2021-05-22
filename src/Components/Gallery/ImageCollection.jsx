import FullscreenView from './FullscreenView';
import React, { useState } from 'react';
import '../../Page.css';
import './GalleryControlBar.css';

const ImageCollection = ({ images }) => {
  const [fullScreenView, setFullScreenView] = React.useState(false);
  const [imageIndex, setImageIndex] = React.useState(0);

  const imageListItem = (image) => {
    return (
      <img
        onClick={() => {
          const i = images.indexOf(image);
          console.log(i);
          console.log(images.indexOf(image));
          console.log(imageIndex);
          setImageIndex(i);
          console.log(imageIndex);
          setFullScreenView(true);
        }}
        src={image.imgUrl}
        height='100%'
        alt='imageItem'
      ></img>
    );
  };

  if (images) {
    return (
      <div className='imageCollectionWrapper'>
        <FullscreenView
          setFullScreenView={setFullScreenView}
          fullScreenView={fullScreenView}
          images={images}
          imageIndex={imageIndex}
          setImageIndex={setImageIndex}
        />
        <div className='flexContainer'>
          {images &&
            images.map((img, i) => (
              <div className='flexItem' key={i}>
                {imageListItem(img)}
              </div>
            ))}
        </div>
      </div>
    );
  }
  return null;
};

export default ImageCollection;
