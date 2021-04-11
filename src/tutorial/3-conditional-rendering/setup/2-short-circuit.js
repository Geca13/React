import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text,setText] = useState('k');
   
   
  return <>
  <h1>{text || 'John Doe'}</h1>
  {text && <h1>hello goran</h1>} 
  {!text && <h1>hello marjan</h1>} 

  </>;
};

export default ShortCircuit;
