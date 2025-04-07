import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, deleteUser } from './usersSlice';

const UsersList = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleRefresh = () => {
    dispatch(fetchUsers());
  };

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };

  return (
    <div>
      <button onClick={handleRefresh} style={{ marginBottom: '1rem' }}>
        🔄 Yenile
      </button>

      {loading && <p>⏳ Yükleniyor...</p>}

      {error && (
        <div style={{ color: 'white', background: 'crimson', padding: '1rem', borderRadius: '8px' }}>
          ⚠️ Hata oluştu: {error}
        </div>
      )}

      {!loading && !error && (
        <ul>
          {data.map((user) => (
            <li key={user.id} style={{ marginBottom: '0.5rem' }}>
              {user.name} - {user.email}{' '}
              <button
                onClick={() => handleDelete(user.id)}
                style={{ marginLeft: '1rem', background: 'tomato', color: 'white', border: 'none', padding: '4px 8px', borderRadius: '4px' }}
              >
                Sil
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UsersList;
