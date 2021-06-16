import React, { useState } from 'react';
import './Contact.css';
import axios from 'axios';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [notification, setNotification] = useState('');

  const inputStyle = {
    boxShadow: 'none',
    color: 'lightgray',
    width: '33vw',
    borderRadius: '0px',
    border: 'solid lightgray 1px',
    fontSize: '1.6vh',
  };

  const submit = async (event) => {
    event.preventDefault();
    if (!message) {
      return setNotification('add message');
    }
    const msg = { name: name, email: email, message: message };

    try {
      const response = await axios.post('/api/contact', msg);
      console.log(response);
    } catch (e) {
      console.log(e);
    } finally {
      setName('');
      setEmail('');
      setMessage('');
      setNotification('Message sent. Thank you!');
      setTimeout(() => setNotification(''), 3000);
    }
  };

  return (
    <div className='contactForm'>
      <form onSubmit={submit}>
        <div className='inputContainer'>
          <h4>Contact</h4>
          <input
            id='inputItem'
            style={inputStyle}
            className='inputItem'
            placeholder='name'
            onChange={(event) => setName(event.target.value)}
            type='text'
            name='name'
            value={name}
          />
          <input
            id='inputItem'
            onChange={(event) => setEmail(event.target.value)}
            className='inputItem'
            placeholder='email'
            value={email}
          ></input>
          <textarea
            id='inputItem'
            type='text'
            placeholder='message'
            onChange={(event) => setMessage(event.target.value)}
            className='inputItem'
            value={message}
          ></textarea>
          <button className='submitButton inputItem' type='submit'>
            Send
          </button>
          {notification && (
            <span style={{ color: 'green' }}>{notification}</span>
          )}
        </div>
      </form>
    </div>
  );
};
export default ContactForm;
