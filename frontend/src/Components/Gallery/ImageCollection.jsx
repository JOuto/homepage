import FullscreenView from './FullscreenView';
import React, { useState } from 'react';
import './Gallery.css';

const ImageCollection = ({ images, fullScreenView, setFullScreenView }) => {
  //const [fullScreenView, setFullScreenView] = React.useState(false);
  const [imageIndex, setImageIndex] = React.useState(0);

  const imageListItem = (image) => {
    return (
      <img
        className='imageCollectionThumb'
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
        alt='imageItem'
      ></img>
    );
  };

  if (images) {
    return (
      <div>
        {fullScreenView && (
          <FullscreenView
            setFullScreenView={setFullScreenView}
            fullScreenView={fullScreenView}
            images={images}
            imageIndex={imageIndex}
            setImageIndex={setImageIndex}
          />
        )}
        <div className='flexContainer' id='flexContainer'>
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
