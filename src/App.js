import Menu from './Components/Menu';
import { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import News from './Components/News';
import './Page.css';

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
        console.log(dropdownContent.style.display);
        if (dropdownContent.style.display === 'block') {
          dropdownContent.style.display = 'none';
        } else {
          dropdownContent.style.display = 'block';
        }
      });
    }
  }, [dropdown]);
  return (
    <div>
      <div className='logo'>JOUNI TONI</div>
      <div className='menu'>
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
