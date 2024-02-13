import house from '../../Img/apa.jpg';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import $ from 'jquery';
import './Home.css';

const Home = ({ setShowHomepage }) => {
  const history = useHistory();

  useEffect(() => setShowHomepage(true), [setShowHomepage]);

  const onClick = () => {
    setShowHomepage(false);
    history.push('works/202223');
    setTimeout(() => $('#works').css('height', 12 * 1.6 + 'em'), 100);
  };

  return (
    <div className='homeWrapper'>
      <h1 onClick={onClick}>JOUNI TONI</h1>
      <div className='homepageImageContainer'>
        <img
          style={{ cursor: 'pointer', maxHeight: '100%', maxWidth: '100%' }}
          onClick={onClick}
          src={house}
          alt='apartmentBlock'
          width='100%'
        />
      </div>
    </div>
  );
};
export default Home;
