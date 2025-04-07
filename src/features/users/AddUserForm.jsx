// AddUserForm.jsx
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from './usersSlice';

const AddUserForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && email) {
      dispatch(addUser({ name, email }));
      setName('');
      setEmail('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
      <input
        type="text"
        placeholder="İsim"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        style={{ marginRight: '1rem' }}
      />
      <input
        type="email"
        placeholder="E-posta"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        style={{ marginRight: '1rem' }}
      />
      <button type="submit" style={{ padding: '6px 12px' }}>
        ➕ Ekle
      </button>
    </form>
  );
};

export default AddUserForm;
