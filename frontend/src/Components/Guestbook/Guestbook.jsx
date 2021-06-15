import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Guestbook = () => {
  const [messages, setMessages] = useState();
  const [message, setMessage] = useState('moro');

  useEffect(() => {
    axios.get('http://localhost:3001/api/messages').then((result) => {
      const list = result.data.map((data) => data.message);
      console.log(result);
      setMessages(list);
    });
  }, []);

  const submit = async (event) => {
    event.preventDefault();
    const response = axios.post('http://localhost:3001/api/messages', {
      message: message,
    });

    console.log(response);
    setMessages(messages.concat(message));
  };

  return (
    <div>
      <form onSubmit={submit}>
        <input
          onChange={(event) => setMessage(event.target.value)}
          type='text'
          placeholder='write message'
        />
        <button type='submit'>send</button>
      </form>
      {messages && messages.map((msg) => <p>{msg}</p>)}
    </div>
  );
};
export default Guestbook;
