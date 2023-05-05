import { useState } from 'react';
import Login from "./Components/Login";
import Profile from "./Profile";



function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = async (username, password) => {
    const response = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    if (response.status === 200) {
      const data = await response.json();
      localStorage.setItem('token', data.token);
      localStorage.setItem('id', data.id);
      setLoggedIn(true);
    } else {
      const data = await response.json();
      alert(data.message);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    setLoggedIn(false);
    setUser(null);
  };

  const handleProfileLoad = async () => {
    const id = localStorage.getItem('id');
    const token = localStorage.getItem('token');
    const response = await fetch(`https://dummyjson.com/users/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status === 200) {
      const data = await response.json();
      setUser(data);
    } else {
      const data = await response.json();
      alert(data.message);
    }
  };

  return (
    <div className="App">
      
      {loggedIn ? (
        <Profile user={user} handleLogout={handleLogout} />
      ) : (
        <Login handleLogin={handleLogin} />
      )}
      {loggedIn && <button onClick={handleProfileLoad}>Load Profile</button>}
    </div>
  );

  
}

export default App;

