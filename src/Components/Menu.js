import { Link } from 'react-router-dom';
import React from 'react';
import '../Page.css';
import { Dropdown } from 'semantic-ui-react';

const Menu = () => {
  /* const [show, setShow] = React.useState(false);
  const hidden = { height: show ? '100px' : '0' }; */

  return (
    <div>
      <ul className='nav'>
        <li>
          <Link to='/news'>News</Link>
        </li>
        <button
          /* onClick={() => {
            if (container[0].style.display === 'none') {
              container[0].style.display = 'block';
            }
          }} */
          //onClick={() => setShow(!show)}
          className='dropdown-btn'
        >
          <Link to='/works'>Works</Link>
        </button>
        <div className='dropdown-container'>
          <ul className='nav' id='rolldown'>
            <li>
              <a href='#'>Link 1</a>
            </li>
            <li>
              <a href='#'>Link 2</a>
            </li>
            <li>
              <a href='#'>Link 3</a>
            </li>
            <li>
              <a href='#'>Link 4</a>
            </li>
          </ul>
        </div>

        <li>
          <Link to='/biography'>Biography</Link>
        </li>

        <li>
          <Link to='/cv'>CV</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
