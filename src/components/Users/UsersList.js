import React from 'react';

import Card from '../UI/Card';
import classes from './UsersList.module.css';

const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      <h3 className={classes.title}>Added Users:</h3>
      <ul>
        {props.users.map((u, i) => (
          <li key={i}>
            {u.username} ({u.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
