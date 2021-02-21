import Menu from './Components/Menu';
import { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import News from './Components/News';
import './Page.css';
import logo from './Img/logo.png';
import ImageGallery from './Components/ImageGallery';
import Cv from './Components/CvPage';

const App = () => {
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

  return (
    <div>
      <div className='menu'>
        <div className='logo'>
          <img src={logo} height='150px' width='150px' alt='logo'></img>
        </div>
        <Menu />
      </div>
      <div className='contentWrapper'>
        <div className='content'>
          <Switch>
            <Route path='/news'>
              <News />
            </Route>
            <Route path='/works/2018'>
              <ImageGallery />
            </Route>
            <Route path='/cv'>
              <Cv />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default App;
