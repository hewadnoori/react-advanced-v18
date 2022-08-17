import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator ? :

const ShortCircuit = () => {
  const [text, setText] = useState('');
  const [isError, setIsError] = useState(false);

  // const firstValue = text || 'hello world'; //if true, return text, if false return hello world
  // const secondValue = text && 'hello world';//if true return hello world, if false return nothing

  return <>
    {/* <h1>{firstValue}</h1>
    <h1>value : {secondValue}</h1> */}
    <h1>{text || 'john joe'}</h1>
    <button className='btn' onClick={()=>setIsError(!isError)}>toggle error</button> {/*!isError sets the value to true when the button is clicked */}
    {isError && <h1>Error...</h1>}
    {isError ? <p>there is an error....</p> : <div> {/*if isError is true, then there is an error..., if isError is false then there is no error will show */}
        <h2>there is no error</h2>
      </div>}
  </>;
};

export default ShortCircuit;
