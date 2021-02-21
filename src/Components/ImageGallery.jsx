import images from '../Data/images';
import React from 'react';
import { Icon } from 'semantic-ui-react';
import '../Page.css';

const ImageGallery = () => {
  const [imgIndex, setImgIndex] = React.useState(0);
  const [showImgDetails, setShowImgDetails] = React.useState(false);
  console.log(images);
  console.log(images[2].imgUrl);
  console.log(imgIndex);

  const increase = () => {
    if (imgIndex === images.length - 1) {
      return setImgIndex(0);
    }
    setImgIndex(imgIndex + 1);
  };
  const decrease = () => {
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
      <span style={{ position: 'absolute', float: 'up' }}>
        {imgIndex + 1 + '/' + images.length}
      </span>
      <br />
      <button className='galleryButton' onClick={decrease}>
        <Icon name='chevron left' />
        prev
      </button>
      <img
        style={{ paddingLeft: '20px', paddingTop: '20px' }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={increase}
        src={images[imgIndex].imgUrl}
        alt='img'
        width='500px'
      />
      <button className='galleryButton' onClick={increase}>
        next
        <Icon name='chevron right' />
      </button>
      {showImgDetails && <p>{images[imgIndex].title}</p>}
    </div>
  );
};
export default ImageGallery;
