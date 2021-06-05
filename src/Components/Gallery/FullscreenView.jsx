import React from 'react';
import './Gallery.css';

import ImageInfoBar from './ImageInfoBar';
import cross from '../../Img/cross.png';
import $ from 'jquery';

const FullscreenView = ({
  setFullScreenView,
  fullScreenView,
  images,
  imageIndex,
  setImageIndex,
}) => {
  const height = $('imageCollectionImg').height;

  const indexOfNextImg = () => {
    if (imageIndex !== images.length - 1) {
      return imageIndex + 1;
    }
    return 0;
  };

  const indexOfPrevImg = () => {
    if (imageIndex !== 0) {
      return imageIndex - 1;
    }
    return images.length - 1;
  };

  if (images && imageIndex !== undefined) {
    return (
      <div>
        <div
          onClick={() => setFullScreenView(false)}
          className='fullScreenDimmer'
        ></div>

        <div
          className='closeFullscreenButton'
          onClick={() => setFullScreenView(false)}
        >
          <img src={cross} width='100%' alt='cross'></img>
        </div>

        <ImageInfoBar image={images[imageIndex]} />

        <div className='fullScreenContent'>
          <div className='imageContainer'>
            <img
              className='imageCollectionImg'
              src={
                images[imageIndex]
                  ? images[imageIndex].imgUrl
                  : '../../Img/18_19/apartment.jpg'
              }
              alt='img'
            />
            <div className='prevNextWrapper' style={{ height: height }}>
              <div
                className='prev'
                onClick={() => {
                  setImageIndex(indexOfPrevImg());
                  console.log(imageIndex);
                }}
              />
              <div
                className='next'
                onClick={() => setImageIndex(indexOfNextImg())}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  return null;
};
export default FullscreenView;
