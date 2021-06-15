import house from '../../Img/18_19/apartment.jpg';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import $ from 'jquery';
import './Home.css';

const Home = () => {
  const history = useHistory();

  const onClick = () => {
    history.push('works/201819');
    $('#works').css('height', 9 * 1.6 + 'em');
  };
  return (
    <div className='homeWrapper'>
      <img
        style={{ cursor: 'pointer' }}
        onClick={onClick}
        src={house}
        alt='apartmentBlock'
        width='100%'
      ></img>
    </div>
  );
};
export default Home;
