import React, { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';

const AddUser = () => {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');

  const addUserHandler = (event) => {
    event.preventDefault();
    console.log('age', age);
    console.log('username', username);
  };

  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleChangeAge = (e) => {
    setAge(e.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" onChange={handleChangeUsername} />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" onChange={handleChangeAge} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
