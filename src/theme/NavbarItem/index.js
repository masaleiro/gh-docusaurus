import React, { useContext } from 'react';
import ComponentTypes from '@theme/NavbarItem/ComponentTypes';
import AuthContext from '../AuthContext'; // Adjust the path according to your project structure


function normalizeComponentType(type, props) {
  // Backward compatibility: navbar item with no type set
  // but containing dropdown items should use the type "dropdown"
  if (!type || type === 'default') {
    return 'items' in props ? 'dropdown' : 'default';
  }
  return type;
}
export default function NavbarItem({type, ...props}) {
  const componentType = normalizeComponentType(type, props);
  const NavbarItemComponent = ComponentTypes[componentType];
  const { user, login, logout } = useContext(AuthContext);
  console.log(JSON.stringify("ye "+ user)); 

  if (!NavbarItemComponent) {
    throw new Error(`No NavbarItem component found for type "${type}".`);
  }
  return <NavbarItemComponent {...props} />;
}
