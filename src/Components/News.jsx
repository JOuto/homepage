import React from 'react';

const News = () => {
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState(false);

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
    <div>
      Subscribe for newsletter
      <div type='submit' onSubmit={subscribe}>
        <form>
          <input
            name='email'
            type='text'
            value={email}
            onChange={handleChange}
          ></input>
          <button className='subscribe-btn' type='submit'>
            Subscribe{' '}
          </button>
        </form>
      </div>
      {message && <p>Subscribed!!</p>}
    </div>
  );
};
export default News;
