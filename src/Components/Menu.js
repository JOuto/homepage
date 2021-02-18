import { Link } from 'react-router-dom';
import '../Page.css';
import { Dropdown } from 'semantic-ui-react';

const Menu = () => {

    
  var dropdown = document.getElementsByClassName('dropdown-btn');
  var i;
  console.log(dropdown);

  for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener('click', function () {
      this.classList.toggle('active');
      console.log('click');
      var dropdownContent = this.nextElementSibling;
      console.log(dropdownContent);
      if (dropdownContent.style.display === 'block') {
        dropdownContent.style.display = 'none';
      } else {
        dropdownContent.style.display = 'block';
      }
    });
  }

  return (
    <div>
      <ul className='nav'>
        <li>
          <Link to='/works'>Works</Link>
        </li>
        <button className='dropdown-btn'>Works</button>
        <div className='dropdown-container'>
          <a href='#'>Link 1</a>
          <a href='#'>Link 2</a>
          <a href='#'>Link 3</a>
        </div>

        <li>
          <Link to='/biography'>Biography</Link>
        </li>
        <li>
          <Link to='/news'>News</Link>
        </li>
        <li>
          <Link to='/cv'>CV</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
