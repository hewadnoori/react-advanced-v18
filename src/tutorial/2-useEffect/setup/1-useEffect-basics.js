import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value,setValue] = useState(0);
  useEffect(()=>{ //can only use an if statement on the inside of the useEffect, cant have a useEffect inside of an if statement
    console.log('call useEffect')
    if(value >= 1){
      document.title = `New Messages ${value}`
    } 
      
  }, [value]); // having the dependency [] as empty will basically only run the code on the first render only.  
  useEffect(()=>{
    console.log('hello world')
  }, [])
  return (
    <>
      <h1>{value}</h1>
      <button className='btn' onClick={()=>setValue(value+1)}>Click Me</button>
    </>
  );
};

export default UseEffectBasics;
