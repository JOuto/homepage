import images from '../Data/images.js';
import katariina from '../Data/katariina.js';
import FullscreenView from './FullscreenView';
import React from 'react';
import '../Page.css';
import maali from '../Img/11/maaliverkko.jpeg';

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
        height='100%'
        /* style={{ minWidth: '50px' }} */
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
          katariina.map((image, i) => (
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
      </div>
    </div>
  );
};

export default ImageCollection;
