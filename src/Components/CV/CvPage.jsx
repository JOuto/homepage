import React, { useState } from 'react';
import './Cv.css';
import CvEn from './CvEn';
import CvFi from './CvFi';

const Cv = () => {
  const [showCvFi, setShowCvFi] = useState(false);

  return (
    <div>
      <div className='showCvFiButton' onClick={() => setShowCvFi(!showCvFi)}>
        {showCvFi ? 'EN' : 'FI'}
      </div>
      {!showCvFi && <CvEn />}
      {showCvFi && <CvFi />}
    </div>
  );
};
export default Cv;
