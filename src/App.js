import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const handleAddUser = (pUsername, pAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, { username: pUsername, age: pAge }];
    });
  };

  return (
    <div>
      <AddUser onAddUser={handleAddUser} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
