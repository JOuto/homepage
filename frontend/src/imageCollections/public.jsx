import React from 'react';
import image from '../Img/kuva.jpg';

const PublicWorksPage = () => {
  return (
    <div>
      <img
        style={{
          maxWidth: '100%',
          height: 'auto',
          width: 'auto' /* ie8 */,
        }}
        src={image}
        alt='img'
      ></img>
    </div>
  );
};

export default PublicWorksPage;
