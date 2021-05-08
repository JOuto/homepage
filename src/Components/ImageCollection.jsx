import images from '../Data/images.js';
import FullscreenView from './FullscreenView';
import React from 'react';
import '../Page.css';

const ImageCollection = () => {
  const [fullScreenView, setFullScreenView] = React.useState(false);
  const [image, setImage] = React.useState('');
  //const imageHeight = { height: '200px' };
  const imageListItem = (image) => {
    console.log(image, fullScreenView);
    return (
      <img
        onClick={() => {
          setFullScreenView(true);
          setImage(image);
        }}
        src={image}
        width='300px'
        height='300px'
        alt='imageItem'
      ></img>
    );
  };

  return (
    <div className='imageCollectionWrapper'>
      <div className='flexContainer'>
        <FullscreenView
          image={image}
          setFullScreenView={setFullScreenView}
          fullScreenView={fullScreenView}
        />
        {images &&
          images.map((image, i) => (
            <div className='flexItem' key={i}>
              {imageListItem(image.imgUrl)}
            </div>
          ))}
        {/*    <div className='flexItem'>{imageListItem(images[0].imgUrl)}</div>
        <div className='flexItem'>{imageListItem(images[1].imgUrl)}</div>
        <div className='flexItem'>{imageListItem(images[2].imgUrl)}</div> */}
        <div className='flexItem'></div>
        <div className='flexItem'></div>
        <div className='flexItem'></div>
        <div className='flexItem'></div>
        <div className='flexItem'></div>
        <div className='flexItem'></div>
        <div className='flexItem'></div>
        <div className='flexItem'></div>
        <div className='flexItem'></div>
      </div>
    </div>
  );
};

export default ImageCollection;
