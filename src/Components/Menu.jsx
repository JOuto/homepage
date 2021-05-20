import { Link } from 'react-router-dom';
import React from 'react';
import '../Page.css';
import { Icon } from 'semantic-ui-react';

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
          <span>Works</span>
          <Icon style={{ paddingLeft: '5px' }} name='caret down' size='small' />
        </button>
        <div className='dropdown-container'>
          <ul className='nav' id='worksDropdown'>
            <li>
              <Link to='/works/2018'>2018</Link>
            </li>
            <li>
              <Link to='/works/2017'>2017</Link>
            </li>
            <li>
              <Link to='/works/TMgalleria'>2016</Link>
            </li>
            <li>
              <Link to='works/2015'>2015</Link>
            </li>
            <li>
              <Link to='/works/2014'>2014</Link>
            </li>
            <li>
              <Link to='/works/2013'>2013</Link>
            </li>
            <li>
              <li>
                <Link to='/works/2011'>2011</Link>
              </li>

              <a href='#'>Animations</a>
            </li>
          </ul>
        </div>

        <button
          /* onClick={() => {
            if (container[0].style.display === 'none') {
              container[0].style.display = 'block';
            }
          }} */
          //onClick={() => setShow(!show)}
          className='dropdown-btn'
        >
          Biography
          <Icon style={{ paddingLeft: '5px' }} name='caret down' size='small' />
        </button>
        <div className='dropdown-container'>
          <ul className='nav' id='biographyDropdown'>
            <li>
              <Link to='/cv'>CV</Link>
            </li>
            <li>
              <Link to='/me'>About me</Link>
            </li>
          </ul>
        </div>
        <li>
          <a href='/contact'>Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
