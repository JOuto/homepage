import { Link } from 'react-router-dom';
import React from 'react';
import './Menu.css';
import $ from 'jquery';

import { Icon } from 'semantic-ui-react';
import { ResizeObserver } from 'resize-observer';

const Menu = () => {
  const [worksHeight, setWorksHeight] = React.useState(0);
  const [bioHeight, setBioHeight] = React.useState(0);
  const [screenWidth, setScreenWidth] = React.useState();

  window.addEventListener('resize', (event) => {
    setScreenWidth(window.innerWidth);
  });

  const myObserver = new ResizeObserver((entries) => {
    entries.forEach((entry) => {
      if (
        entry.target.style.height === 14.4 + 'em' &&
        worksHeight !== 14.4 + 'em'
      ) {
        setWorksHeight(14.4 + 'em');
      }
    });
  });

  React.useEffect(() => {
    const element = document.querySelector('#works');
    myObserver.observe(element);
  }, []);

  const worksDropDownStyle = {
    height: worksHeight,
  };

  const bioDropDownStyle = { height: bioHeight };

  React.useEffect(() => {});

  return (
    <div>
      <ul className='nav'>
        <li>
          <Link to='/news'>News</Link>
        </li>
        <button
          onClick={() =>
            setWorksHeight(worksHeight === 0 || undefined ? 12 * 1.6 + 'em' : 0)
          }
          className='dropdown-btn nofocus'
        >
          <span>Works</span>
          <Icon style={{ paddingLeft: '5px' }} name='caret down' size='small' />
        </button>
        <div
          className='dropdown-container'
          id='works'
          style={worksDropDownStyle}
        >
          <ul className='nav' id='worksDropdown'>
            <li>
              <Link to='/works/202223'>2022-23</Link>
            </li>
            <li>
              <Link to='/works/2021'>2020-21</Link>
            </li>
            <li>
              <Link to='/works/201819'>2018-19</Link>
            </li>
            <li>
              <Link to='/works/201718'>2017-18</Link>
            </li>
            <li>
              <Link to='/works/2017'>2017</Link>
            </li>
            <li>
              <Link to='/works/2016tm'>
                2016 {screenWidth > 500 ? 'Tm-Gallery' : 'Tm'}
              </Link>
            </li>
            <li>
              <Link to='/works/2016'>2016</Link>
            </li>
            <li>
              <Link to='/works/2015'>2015</Link>
            </li>
            <li>
              <Link to='/works/2014'>2014</Link>
            </li>
            <li>
              <Link to='/works/2013'>2013</Link>
            </li>
            <li>
              <Link to='/works/2011'>2011</Link>
            </li>
            <li>
              <Link to='/works/public'>Public art</Link>
            </li>
          </ul>
        </div>

        <button
          onClick={() =>
            setBioHeight(bioHeight === 0 || undefined ? 2 * 1.6 + 'em' : 0)
          }
          className='dropdown-btn nofocus'
        >
          About
          <Icon style={{ paddingLeft: '5px' }} name='caret down' size='small' />
        </button>
        <div className='dropdown-container' style={bioDropDownStyle}>
          <ul className='nav' id='biographyDropdown'>
            <li>
              <Link to='/cv'>CV</Link>
            </li>
            <li className='nofocus'>
              <Link to='/aboutMe'>About me</Link>
            </li>
          </ul>
        </div>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
