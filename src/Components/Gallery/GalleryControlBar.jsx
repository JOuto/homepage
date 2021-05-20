import React from 'react';
import { Button } from 'semantic-ui-react';
import './GalleryControlBar.css';

const GalleryControlBar = ({ setImgIndex, imgIndex, images }) => {
  //const [hideBar, setHideBar] = React.useState(false);
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
  //const style = { display: hideBar ? 'none' : 'block' };

  return (
    <div className='ControlBarWrapper'>
      <h4>{images[imgIndex].title}</h4>
      <p>{images[imgIndex].technique}</p>
      <div className='buttonWrapper'>
        <span onClick={prev} className='prev'>
          PREV
        </span>
        <span>/</span>
        <span onClick={next} className='next'>
          NEXT
        </span>
        {/* <span style={{ position: 'absolute', float: 'up' }}>
          {imgIndex + 1 + '/' + images.length}
        </span> */}
      </div>
    </div>
  );
};
export default GalleryControlBar;
