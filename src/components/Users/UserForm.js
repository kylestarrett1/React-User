import React, { useState } from 'react';

import './UserForm.css';

const AddUser = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const userData = {
      username: enteredName,
      age: +enteredAge,
    };

    props.onSaveUserData(userData);
    setEnteredName('');
    setEnteredAge('');
  };

  return (
    <div>
      <form className="form-controls" onSubmit={submitHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={enteredName}
          onChange={nameChangeHandler}
        />
        <label htmlFor="age">Age (In Years)</label>
        <input
          id="age"
          type="number"
          value={enteredAge}
          onChange={ageChangeHandler}
        />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default AddUser;
