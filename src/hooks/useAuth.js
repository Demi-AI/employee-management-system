import React from 'react';
import useAuth from '../hooks/useAuth';

function AuthComponent() {
  const { user, loading, error, login, logout } = useAuth();

  const handleLogin = () => {
    const credentials = { username: 'user', password: 'pass' };
    login(credentials);
  };

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {user ? (
        <div>
          <p>Welcome, {user.name}</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
}
