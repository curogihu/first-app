import { useState } from 'react';
import classes from './NewPost.module.css';

function NewPost() {
  // const stateData = useState('');
  // stateData[0] // current value
  // stateData[1] // state updaing function
  //

  const [ enteredBody, setEnteredBody ] = useState(''); 
  // let enteredBody = '';

  function changeBodyHandler (event) {
    // console.log(event.target.value);
    // enteredBody = event.target.value;
    setEnteredBody(event.target.value);
  }

  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={changeBodyHandler} />
      </p>
      <p>{enteredBody}</p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required />
      </p>
    </form>
  );
}


// do not forget export
export default NewPost;
