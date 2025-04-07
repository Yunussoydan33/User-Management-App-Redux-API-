// App.jsx
import React from 'react';
import AddUserForm from './features/users/AddUserForm';
import UsersList from './features/users/UsersList';

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Kullanıcılar</h1>
      <AddUserForm />
      <UsersList />
    </div>
  );
}

export default App;  // default export buradadır
