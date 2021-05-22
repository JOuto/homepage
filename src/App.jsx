import Menu from './Components/Menu';
import { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import News from './Components/News';
import './Page.css';
import logo from './Img/logo.png';
import logo3 from './Img/logo3.png';
import jtLogo from './Img/JTlogo.png';
import ImageCarousel from './Components/Gallery/ImageCarousel';
import Cv from './Components/CvPage';

import ImageCollection from './Components/Gallery/ImageCollection';
import ContactPage from './Components/Contact';
import katariina from './imageCollections/2011';
import images18_19 from './imageCollections/2018-19';
import imagesKluuvi from './imageCollections/2013kluuvi';
import images2017 from './imageCollections/2017';
import images2015 from './imageCollections/2015';
import images2016tm from './imageCollections/2016tm';
import images2014 from './imageCollections/2014';
import images2016 from './imageCollections/2016';
import images17_18 from './imageCollections/2017-18';

const App = () => {
  
  var dropdown = document.getElementsByClassName('dropdown-btn');
  useEffect(() => {
    var i;
    for (i = 0; i < dropdown.length; i++) {
      dropdown[i].addEventListener('click', function () {
        console.log('click');
        var dropdownContent = this.nextElementSibling;
        const x = dropdownContent.firstChild.childElementCount;

        console.log(x);

        console.log(dropdownContent.style.display);
        if (
          dropdownContent.style.height === '0px' ||
          !dropdownContent.style.height
        ) {
          dropdownContent.style.height = x * 1.6 + 'em';
        } else {
          dropdownContent.style.height = '0px';
        }
      });
    }
  }, [dropdown]);







  return (
    <div className='Apper'>
      <div className='flexContainer'>
        <div className='menu'>
          <div className='logo'>
            <img src={logo3} width='80%' alt='logo'></img>
          </div>
          <Menu />
        </div>

        <div className='contentWrapper'>
          <div className='content'>
            <Switch>
              <Route path='/contact'>
                <div style={{ position: 'absolute', top: '40px', left: '50%' }}>
                  <ContactPage />
                </div>
              </Route>
              <Route path='/news'>
                <div style={{ position: 'absolute', top: '40px', left: '50%' }}>
                  <News />
                </div>
              </Route>
              <Route path='/works/2018'>
                <ImageCollection images={images18_19} />
              </Route>
              <Route path='/works/2013'>
                <ImageCarousel images={imagesKluuvi} />
              </Route>
              <Route path='/works/2011'>
                <ImageCarousel images={katariina} />
              </Route>
              <Route path='/cv'>
                <Cv />
              </Route>

              <Route path='/works/2015'>
                <ImageCollection images={images2015} />
              </Route>
              <Route path='/works/2016'>
                <ImageCollection images={images2016} />
              </Route>
              <Route path='/works/2016tm'>
                <ImageCollection images={images2016tm} />
              </Route>
              <Route path='/works/2014'>
                <ImageCollection images={images2014} />
              </Route>
              <Route path='/works/2017'>
                <ImageCollection images={images2017} />
              </Route>

              <Route path='/works/20118'>
                <ImageCollection images={images17_18} />
              </Route>

              <Route path='/'>
                <News />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
      {/*  <div className='footerWrapper'>
        <footer className='footer'></footer>
      </div> */}
    </div>
  );
};

export default App;
