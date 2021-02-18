import Menu from './Components/Menu';
import { Switch, Route } from 'react-router-dom';
import News from './Components/News';
import './Page.css';

const App = () => {
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
