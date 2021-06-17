import './Contact.css';
import ContactForm from './ContactForm';
import { Icon } from 'semantic-ui-react';
const ContactPage = () => {
  return (
    <div
      onMouseDown={(e) => {
        return true;
      }}
    >
      <div className='contact'>
        <div className='contactInfoBox'>
          <Icon name='at' color='black' size='small' />
          <span>jouni.toni@gmail.com</span>
          <br />
          <Icon name='phone' color='black' size='small' />
          <span>+358407091741</span>
        </div>

        <ContactForm />
      </div>
    </div>
  );
};
export default ContactPage;
