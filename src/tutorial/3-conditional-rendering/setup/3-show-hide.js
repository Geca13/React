import React, { useState, useEffect } from 'react';

const ShowHide = () => {
  const [text,setText] = useState('');
   const [isError, setIsError] = useState(false);
   
  return <>
  <h1>{text || 'John Doe'}</h1>
  <button className='btn' onClick={() =>setIsError(!isError)}>toggle error</button>
  {isError && <h1>Error...</h1>} 
  {isError ? <p>there s an error ...</p> : <div><h2>There is no error...</h2></div> }

  </>;
};

export default ShowHide;
