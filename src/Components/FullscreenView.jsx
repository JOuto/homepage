import React from 'react';
import '../Page.css';

const FullscreenView = ({ image, setFullScreenView, fullScreenView }) => {
  console.log(fullScreenView);
  //const [fullScreenView, setFullScreenView] = React.useState(false);
  const displayStyle = {
    display: fullScreenView ? 'block' : 'none',
  };

  return (
    <div className='fullScreenWrapper'>
      <div className='fullScreenDimmer' style={displayStyle}></div>
      <div className='fullScreenContent' style={displayStyle}>
        {/* <button
          style={{ background: 'none', borderRadius: 0 }}
          onClick={() => setFullScreenView(false)}
        >
          x
        </button> */}
        <img
          style={{ paddingTop: '100px' }}
          src={image}
          alt='img'
          width='70%'
          onClick={() => setFullScreenView(false)}
        />
      </div>
    </div>
  );
};
export default FullscreenView;
