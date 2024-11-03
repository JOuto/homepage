import React, { useEffect } from 'react';
/* import ad from '../../Img/KurssiIlmo.pdf'; */
import adJpg from '../../Img/kurssiIlmoitus.jpg';
import './coursePage.css';

const CoursePage = ({ fullScreenView, setFullScreenView }) => {
  useEffect(() => setFullScreenView(true), [fullScreenView, setFullScreenView]);
  return (
    <div className='coursePageContainer'>
      {/* <iframe src={ad} width='100%' height='500px' title='ad' /> */}
      <img
        style={{ cursor: 'pointer', /* maxHeight: '100%', */ maxWidth: '100%' }}
        src={adJpg}
        alt='ad'
        width='100%'
      />
    </div>
  );
};

export default CoursePage;
