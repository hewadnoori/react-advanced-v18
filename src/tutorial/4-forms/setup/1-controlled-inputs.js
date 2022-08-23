import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [people, setPeople] = useState([]);

  const handleSubmit = (e)=>{
    e.preventDefault(); //to stop the default action of resetting the site on submit
    if(firstName && email){ //if firstName and email are true, then console.log. True is if they have a value and false is if its empty  
      console.log('submit the form')
      const person = {id:new Date().getTime().toString(), firstName,email}; //creates an object of the input given from submitting {firstName, email} can only be used because the values are the same as the variable listed, if they weren't the same then it would be {firstName: firstName, email: email};
      setPeople((people)=>{ //this spreads the people array, and adds another person object to the people array
        return[...people, person]
      });
      setFirstName(''); //this clears the firstname and email after submitting
      setEmail('');
      
    }
    else{
      console.log('empty values')
    }
  };

  return (
    <>
      <article>
        <form className='form' onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor="firstName">Name : </label>
            <input 
              type="text" 
              id='firstName' 
              name="firstName" 
              value={firstName}
              onChange={(e)=>setFirstName(e.target.value)} 
              />
          </div>
          <div className='form-control'>
            <label htmlFor="email">Email : </label>
            <input 
              type="email" 
              id='email' 
              name="email" 
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              />
          </div>
          <button type='submit'>add person</button> {/*onClick={handleSubmit} in the button, or onSubmit in the form will be able to submit the form*/}
        </form>
        {
          people.map((person)=>{ //we dont use index here because we're adding and removing items and that could cause issues down the line
            const {id, firstName, email} = person;
            return <div className='item' key={id}>
              <h4>{firstName}</h4>
              <p>{email}</p>
            </div>
          })
        }
      </article>
    </>
  );
};

export default ControlledInputs;
