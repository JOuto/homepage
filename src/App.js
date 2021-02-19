import Menu from './Components/Menu';
import { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import News from './Components/News';
import './Page.css';
import logo from './Img/logo.png';

const App = () => {
  var dropdown = document.getElementsByClassName('dropdown-btn');
  var container = document.getElementsByClassName('dropdown-container');
  console.log(container);

  console.log(dropdown);

  useEffect(() => {
    var i;
    for (i = 0; i < dropdown.length; i++) {
      dropdown[i].addEventListener('click', function () {
        //this.classList.toggle('active');
        console.log('click');
        var dropdownContent = this.nextElementSibling;
        var x = document.getElementById('rolldown').childElementCount;

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
  console.log(logo);
  return (
    <div>
      <div className='menu'>
        <div className='logo'>
          <img src={logo} height='150px' width='150px' alt='logo'></img>
        </div>
        <Menu />
      </div>
      <div className='content'>
        <Switch>
          <Route path='/news'>
            <News />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default App;
