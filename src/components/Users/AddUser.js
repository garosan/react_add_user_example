import React, { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';

const AddUser = (props) => {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');

  const addUserHandler = (event) => {
    event.preventDefault();
    if (username.trim().length === 0 || age.trim().length === 0) {
      return;
    }
    if (parseInt(age) < 1) {
      return;
    }
    props.onAddUser(username, age);
    setUsername('');
    setAge('');
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
        <input id="username" type="text" value={username} onChange={handleChangeUsername} />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" value={age} onChange={handleChangeAge} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
