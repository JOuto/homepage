import React from 'react';

const ImageInfoBar = ({ image }) => {
  if (image) {
    return (
      <div className='InfoBarWrapper'>
        <div className='infoBarContent'>
          <p className='title'>{image.title}</p>
          <p>{image.technique}</p>
          {image.info && <i>{image.info}</i>}
        </div>
      </div>
    );
  }
  return null;
};

export default ImageInfoBar;
