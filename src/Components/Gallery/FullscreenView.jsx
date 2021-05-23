import React from 'react';
import '../../Page.css';
import ImageInfoBar from './ImageInfoBar';

const FullscreenView = ({
  setFullScreenView,
  fullScreenView,
  images,
  imageIndex,
  setImageIndex,
}) => {
  const displayStyle = {
    display: fullScreenView ? 'block' : 'none',
  };

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

  if (images) {
    return (
      <div>
        <div
          className='fullScreenDimmer'
          style={displayStyle}
          onClick={() => setFullScreenView(false)}
        ></div>

        <div className='fullScreenContent' style={displayStyle}>
          <button
            className='closeFullscreenButton'
            onClick={() => setFullScreenView(false)}
          >
            x
          </button>
          <div className='prevNextWrapper'>
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

          <ImageInfoBar image={images[imageIndex]} />

          <img
            className='imageCollectionImg'
            style={{ paddingTop: '80px' }}
            src={images[imageIndex].imgUrl}
            alt='img'
            /* height='90%' */

            onClick={() => setFullScreenView(false)}
          />
        </div>
      </div>
    );
  }
  return null;
};
export default FullscreenView;
