import './Contact.css';
import ContactForm from './ContactForm';
const ContactPage = () => {
  return (
    <div
      onMouseDown={(e) => {
        return true;
      }}
    >
      <div className='contact'>
        <span>jouni.toni@gmail.com</span>
        <br />
        <span>0407091741</span>

        <ContactForm />
      </div>
    </div>
  );
};
export default ContactPage;
