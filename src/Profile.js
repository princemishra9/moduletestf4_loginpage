import './Profile.css'
function Profile({ user, handleLogout }) {
  return (
    <div>
      <h2>hello!!! Welcome, {user?.name}!</h2> <p>IP: {user?.ip}</p>
      <p>Username:- {user?.username}</p>
      <p>Email:- {user?.email}</p>
      <p>Dob: {user?.birthDate}</p>
      <button id='btn' onClick={handleLogout}>LogOut</button>
    </div>
  );
}

export default Profile;
