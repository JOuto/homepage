import { Link } from 'react-router-dom';
import '../Page.css';
import { Dropdown } from 'semantic-ui-react';

const Menu = () => {
  return (
    <div>
      <ul className='nav'>
        <li>
          <Link to='/works'>Works</Link>
        </li>
        <button
          /* onClick={() => {
            if (container[0].style.display === 'none') {
              container[0].style.display = 'block';
            }
          }} */
          className='dropdown-btn'
        >
          Works
        </button>
        <div className='dropdown-container'>
          <a href='#'>Link 1</a>
          <a href='#'>Link 2</a>
          <a href='#'>Link 3</a>
        </div>

        <li>
          <Link to='/biography'>Biography</Link>
        </li>
        <li>
          <Link to='/news'>News</Link>
        </li>
        <li>
          <Link to='/cv'>CV</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
