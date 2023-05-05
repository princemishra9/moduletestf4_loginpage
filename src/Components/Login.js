import { useState } from 'react';
import "./Login.css"

function Login({ handleLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(username, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username:-</label>
      <input
        type="text" id="username"  value={username} placeholder='enter your username' onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <label htmlFor="password">Password:-</label>
      <input
        type="password" id="password" placeholder='**********' value={password} onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button type="submit">LogIn</button>
    </form>
  );
}

export default Login;
