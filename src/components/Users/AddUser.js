import React, { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

const AddUser = (props) => {
  const [username, setUsername] = useState('');
  const [personName, setPersonName] = useState('');
  const [age, setAge] = useState('');
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (username.trim().length === 0 || age.trim().length === 0 || personName.trim().length === 0) {
      setError({ title: 'Invalid input', message: 'Please enter a valid name and age (non-empty values)' });
      return;
    }
    if (parseInt(age) < 1) {
      setError({ title: 'Invalid age', message: 'Please enter a valid age' });
      return;
    }
    props.onAddUser(username, age, personName);
    setUsername('');
    setAge('');
    setPersonName('');
  };

  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleChangeAge = (e) => {
    setAge(e.target.value);
  };

  const handleChangeName = (e) => {
    setPersonName(e.target.value);
  };

  const handleError = () => {
    setError(null);
  };

  return (
    <>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={handleError} />}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" value={username} onChange={handleChangeUsername} />
          <label htmlFor="name">Name</label>
          <input id="name" type="text" value={personName} onChange={handleChangeName} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" value={age} onChange={handleChangeAge} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
