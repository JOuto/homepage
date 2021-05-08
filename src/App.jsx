import Menu from './Components/Menu';
import { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import News from './Components/News';
import './Page.css';
import logo from './Img/logo.png';
import ImageGallery from './Components/ImageGallery';
import Cv from './Components/CvPage';
import puddle from './Img/puddle.png';
import blueSpot from './Img/blueSpot.png';
import ImageCollection from './Components/ImageCollection';
import Testi from './Components/Testi';
import ContactPage from './Components/Contact';

const App = () => {
  const [showLogo, setShowLogo] = useState(false);
  var dropdown = document.getElementsByClassName('dropdown-btn');
  useEffect(() => {
    var i;
    for (i = 0; i < dropdown.length; i++) {
      dropdown[i].addEventListener('click', function () {
        //this.classList.toggle('active');
        console.log('click');
        var dropdownContent = this.nextElementSibling;
        const x = dropdownContent.firstChild.childElementCount;

        console.log(x);

        console.log(dropdownContent.style.display);
        if (
          dropdownContent.style.height === '0px' ||
          !dropdownContent.style.height
        ) {
          dropdownContent.style.height = x * 22.222 + 'px';
        } else {
          dropdownContent.style.height = '0px';
        }
      });
    }
  }, [dropdown]);

  /* const logoDisplay = showLogo ? '1' : '0'; */
  return (
    <div className='Apper'>
      <div className='logo'>
        <img src={logo} height='200px' alt='logo'></img>
      </div>
      <div className='testCube'>{/* <Cv /> */}</div>
      <div className='flexContainer'>
        <div className='menu'>
          <Menu />
          <div className='puddle'>
            <img src={puddle} alt='puddle' height='150px'></img>
          </div>
          <div className='spot'>
            <img src={blueSpot} alt='puddle' height='100px'></img>
          </div>
        </div>
        {/* <div className='testCube2'></div> */}
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
                <ImageGallery />
              </Route>
              <Route path='/cv'>
                <Cv />
              </Route>
              <Route path='/works/2017'>
                <ImageCollection />
              </Route>
              <Route path='/testi'>
                <Testi />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
      <div className='footerWrapper'>
        <footer className='footer'>Jouni Toni 2021</footer>
      </div>
    </div>
  );
};

export default App;
