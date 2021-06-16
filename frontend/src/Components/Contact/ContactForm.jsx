import React, { useState } from 'react';
import './Contact.css';
import axios from 'axios';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [notification, setNotification] = useState('');

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
            id='nam'
            className='inputItem'
            placeholder='name'
            onChange={(event) => setName(event.target.value)}
            type='text'
            name='name'
            value={name}
          />
          <input
            onChange={(event) => setEmail(event.target.value)}
            className='inputItem'
            placeholder='email'
            value={email}
          ></input>
          <textarea
            placeholder='message'
            onChange={(event) => setMessage(event.target.value)}
            id='messageInput'
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
