import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const handleAddUser = (pUsername, pAge, pName) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, { username: pUsername, age: pAge, personName: pName }];
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
