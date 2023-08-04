import React, { useContext } from 'react';
import AuthContext from '../AuthContext'; // Adjust the path according to your project structure
import clsx from 'clsx';


export default function HtmlNavbarItem({
  value,
  className,
  mobile = false,
  isDropdownItem = false,
}) {
 //const authData = useContext(AuthContext);
 const { user, login, logout, authReady } = useContext(AuthContext);
 console.log(JSON.stringify(user));  
 //console.log(config.themeConfig.navbar.items);

 const userGreeting = user ? `Welcome, ${user.user_metadata.full_name}!` : 'Welcome, guest!';

 return (
   <div style={{display:"flex", alignItems: "inherit"}}>
    { authReady && (
      <>
      {user && <label>{userGreeting}</label>}
     {!user && <button type="button" className="clean-btn button button--primary margin-left--md" onClick={login}> Login/SignUp</button>}
      {user && <button type="button" className="clean-btn button button--primary margin-left--md" onClick={logout}> Log out</button>}
      </>
    )}
   </div>
 );
};