// WelcomeMessage.js (a sample component that consumes AuthContext)
import React, { useContext } from 'react';
import AuthContext from './AuthContext'; // Adjust the path according to your project structure

const WelcomeMessage = () => {
  const authData = useContext(AuthContext);
  //const { user, login } = useContext(AuthContext);
  console.log("New: "+ authData.authReady);

  const userGreeting = authData.authReady ? `Welcome, ${authData.username}!` : 'Welcome, guest!';

  return (
    <div>
      <h2>{userGreeting}</h2>
      {/* Your component content */}
    </div>
  );
};

export default WelcomeMessage;