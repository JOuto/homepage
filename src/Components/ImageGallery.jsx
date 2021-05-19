
import React from 'react';
import { Icon } from 'semantic-ui-react';
import '../Page.css';
import fullScreenView from './FullscreenView';
import FullscreenView from './FullscreenView';

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
      <div style={{ width: '100%' }}>
        <span style={{ position: 'absolute', float: 'up' }}>
          {imgIndex + 1 + '/' + images.length}
        </span>
        <br />
        <button className='galleryButton' onClick={prev}>
          <Icon name='chevron left' />
          prev
        </button>
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
          width='60%'
        />
        <button className='galleryButton' onClick={next}>
          next
          <Icon name='chevron right' />
        </button>
        {showImgDetails && <p>{images[imgIndex].title}</p>}
      </div>
    </div>
  );
};
export default ImageGallery;
