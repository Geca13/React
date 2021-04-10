import React, { useState } from 'react';

const UseStateCounter = () => {
const [value,setValue] = useState(0);


const complexIncreace = () => {
   
  setTimeout(()=>{
    setValue((prevState)=>{
     return prevState + 1;
   })
    
  },2000)
}
  return <>
  <section style={{margin: '4rem 0'}}>
    <h2>more complex counter</h2>
    <h1>{value}</h1>
    
    <button className='btn' onClick={complexIncreace}>with TimeOut</button>

  </section>
  
  
  </>;
};

export default UseStateCounter;