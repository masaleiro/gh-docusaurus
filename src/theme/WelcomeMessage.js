// WelcomeMessage.js (a sample component that consumes AuthContext)
import React, { useContext } from 'react';
import AuthContext from './AuthContext'; // Adjust the path according to your project structure
import config from '@generated/docusaurus.config';

const WelcomeMessage = () => {
  //const authData = useContext(AuthContext);
  const { user, login, logout } = useContext(AuthContext);
  console.log(JSON.stringify(user));  
  //console.log(config.themeConfig.navbar.items);

  const userGreeting = user ? `Welcome, ${user.user_metadata.full_name}!` : 'Welcome, guest!';

  return (
    <div>
      {/* {<h2>{userGreeting}</h2>}
      {!user && <button type="button" className="clean-btn button button--primary margin-left--md" onClick={login}> Login/SignUp</button>}
      {user && <button type="button" className="clean-btn button button--primary margin-left--md" onClick={logout}> Log out</button>} */}
      {/*Your component content */}
    </div>
  );
};

export default WelcomeMessage;