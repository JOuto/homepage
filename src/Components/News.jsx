import React from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import '../Page.css';

const News = () => {
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState(false);
  const [text, setText] = React.useState('');

  const handleChange = (event) => {
    /* event.preventDefault(); */
    setEmail(event.target.value);
    console.log(email);
  };
  const subscribe = (event) => {
    event.preventDefault();
    console.log(email);
    setMessage(!message);
    setEmail('');
  };

  return (
    <div className='newsWrapper'>
      Subscribe for newsletter
      <div type='submit' onSubmit={subscribe}>
        <MailchimpSubscribe url={process.env.REACT_APP_MAILCHIMP_URL} />
        {/* <form>
          <input
            name='email'
            type='text'
            placeholder='email'
            value={email}
            onChange={handleChange}
          ></input>
          <button className='subscribe-btn' type='submit'>
            Subscribe{' '}
          </button>
        </form> */}
        {/*  <input
          value={text}
          name='testiteksti'
          placeholder='testiteksti'
          type='text'
          onDoubleClick={() => setText('')}
          onChange={(event) => {
            setText(event.target.value);
            console.log(text);
          }}
        ></input> */}
      </div>
      {message && <p>Subscribed!!</p>}
      <div style={{ marginTop: '100px' }}>
        {' '}
        <p>Uusimmat uutiset</p>
      </div>
    </div>
  );
};
export default News;
