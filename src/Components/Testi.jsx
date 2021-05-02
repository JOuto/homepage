import React from 'react';

const Etusivu = ({ setComments, comments }) => {
  const [comment, setComment] = React.useState('');
  return (
    <div style={{ backgroundColor: 'red', width: '100%', height: '200px' }}>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setComments(comments.concat(comment));
        }}
      >
        <input
          type='text'
          value={comment}
          onChange={(event) => setComment(event.target.value)}
        ></input>
        <button type='submit'>submit</button>
      </form>
      {comments && comments.map((comment) => <p>{comment}</p>)}
    </div>
  );
};
const Takasivu = () => {
  return (
    <div style={{ backgroundColor: 'blue', width: '100%', height: '200px' }}>
      moro
    </div>
  );
};
const Keskisivu = () => {
  return (
    <div style={{ backgroundColor: 'yellow', width: '100%', height: '200px' }}>
      moro
    </div>
  );
};

const Lisasivu = () => {
  return (
    <div style={{ backgroundColor: 'purple', width: '100%', height: '200px' }}>
      Terse
    </div>
  );
};

const Testi = () => {
  const [page, setPage] = React.useState('');
  const [comments, setComments] = React.useState([]);

  return (
    <div>
      <div className='navbar'>
        <button onClick={() => setPage('1')}>1</button>
        <button onClick={() => setPage('2')}>2</button>
        <button onClick={() => setPage('3')}>3</button>
        <button onClick={() => setPage('4')}>4</button>
      </div>
      <div className='content'>
        {page === '1' && (
          <Etusivu comments={comments} setComments={setComments} />
        )}
        {page === '3' && <Takasivu />}
        {page === '2' && <Keskisivu />}
        {page === '4' && <Lisasivu />}
      </div>
    </div>
  );
};

export default Testi;
