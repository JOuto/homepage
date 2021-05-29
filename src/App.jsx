import React from 'react';
import $ from 'jquery';
import Menu from './Components/Menu';
import { useEffect } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import News from './Components/News';
import './Page.css';

import Cv from './Components/CV/CvPage';
import NewsletterSubscribe from './Components/NewsletterSubs';
import Index from './Components/Index';

import ImageCollection from './Components/Gallery/ImageCollection';
import ContactPage from './Components/Contact';
import katariina from './imageCollections/2011';
import images18_19 from './imageCollections/2018-19';
import images17_18 from './imageCollections/2017-18';
import imagesKluuvi from './imageCollections/2013kluuvi';
import images2017 from './imageCollections/2017';
import images2015 from './imageCollections/2015';
import images2016tm from './imageCollections/2016tm';
import images2014 from './imageCollections/2014';
import images2016 from './imageCollections/2016';

import newsLogo from './Img/news.png';
import instaLogo from './Img/insta.png';

const App = () => {
  const [showNewsletterSubs, setShowNewletterSubs] = React.useState(false);
  const [fullScreenView, setFullScreenView] = React.useState(false);
  //var dropdown = document.getElementsByClassName('dropdown-btn');

  /*   useEffect(() => {
    var i;
    for (i = 0; i < dropdown.length; i++) {
      dropdown[i].addEventListener('click', function () {
        console.log('click');
        var dropdownContent = this.nextElementSibling;
        const x = dropdownContent.firstChild.childElementCount;

        console.log(x);
        $('.nofocus').on('mousedown', function (e) {
          return false;
        });

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
  }, [dropdown, fullScreenView]); */
  const menuStyle = fullScreenView ? { width: '0%' } : { width: '22%' };
  const contentWrapperStyle = fullScreenView
    ? { width: '100%' }
    : { width: '78%' };
  return (
    <div className='Apper'>
      {!fullScreenView && (
        <div>
          <div className='instaLink'>
            <a href='http://instagram.com/jouni_toni'>
              <img src={instaLogo} height='30em' alt='insta'></img>
            </a>
          </div>
          <div
            className='newsLetterButton'
            onClick={() => setShowNewletterSubs(true)}
          >
            <img src={newsLogo} alt='newsLogo' height='150em'></img>
          </div>
          <div className='verticalDivider'></div>
        </div>
      )}
      {showNewsletterSubs && (
        <NewsletterSubscribe setShowNewletterSubs={setShowNewletterSubs} />
      )}
      {!fullScreenView && (
        <div className='credits'>
          <span>content & web design © Jouni Toni 2021</span>
        </div>
      )}
      <div>
        <div className='menu' style={menuStyle}>
          <Link to='/' className='indexLink'>
            <div className='logo'>
              <p>JOUNI</p>TONI
            </div>
          </Link>
          <Menu />
        </div>

        <div
          className='contentWrapper'
          style={contentWrapperStyle}
          onMouseDown={(e) => {
            e.preventDefault();
            return false;
          }}
        >
          <Switch>
            <Route path='/contact'>
              <div style={{ position: 'absolute', top: '40px', left: '50%' }}>
                <ContactPage />
              </div>
            </Route>
            <Route path='/news'>
              <News />
            </Route>
            <Route path='/works/201819'>
              <div>
                {' '}
                <p className='galleryTitle'>2018-19</p>
                <ImageCollection
                  images={images18_19}
                  fullScreenView={fullScreenView}
                  setFullScreenView={setFullScreenView}
                />
              </div>
            </Route>
            <Route path='/works/2013'>
              <p className='galleryTitle'>2013</p>
              <ImageCollection
                images={imagesKluuvi}
                fullScreenView={fullScreenView}
                setFullScreenView={setFullScreenView}
              />
            </Route>
            <Route path='/works/2011'>
              <p className='galleryTitle'>2011</p>
              <ImageCollection
                images={katariina}
                fullScreenView={fullScreenView}
                setFullScreenView={setFullScreenView}
              />
            </Route>
            <Route path='/cv'>
              <Cv />
            </Route>

            <Route path='/works/2015'>
              <p className='galleryTitle'>2015</p>
              <ImageCollection
                images={images2015}
                fullScreenView={fullScreenView}
                setFullScreenView={setFullScreenView}
              />
            </Route>
            <Route path='/works/2016'>
              <p className='galleryTitle'>2016</p>
              <ImageCollection
                images={images2016}
                fullScreenView={fullScreenView}
                setFullScreenView={setFullScreenView}
              />
            </Route>
            <Route path='/works/2016tm'>
              <p className='galleryTitle'>2016 Tm-Gallery</p>
              <ImageCollection
                images={images2016tm}
                fullScreenView={fullScreenView}
                setFullScreenView={setFullScreenView}
              />
            </Route>
            <Route path='/works/2014'>
              <p className='galleryTitle'>2014</p>
              <ImageCollection
                images={images2014}
                fullScreenView={fullScreenView}
                setFullScreenView={setFullScreenView}
              />
            </Route>
            <Route path='/works/2017'>
              <p className='galleryTitle'>2017</p>
              <ImageCollection
                images={images2017}
                fullScreenView={fullScreenView}
                setFullScreenView={setFullScreenView}
              />
            </Route>

            <Route path='/works/201718'>
              <p className='galleryTitle'>2017-18</p>
              <ImageCollection
                images={images17_18}
                fullScreenView={fullScreenView}
                setFullScreenView={setFullScreenView}
              />
            </Route>

            <Route path='/'>
              <Index />
            </Route>
          </Switch>
        </div>
      </div>

      {/*  <div className='footerWrapper'>
        <footer className='footer'></footer>
      </div> */}
    </div>
  );
};

export default App;
