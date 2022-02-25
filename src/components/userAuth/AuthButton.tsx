import React, { VFC, useContext } from 'react';

import { AuthContext } from '../../context/AuthContext';

const AuthButton: VFC = () => {
  const auth = useContext(AuthContext);
  console.log(auth);

  const handleSignOut = () => {
    auth?.setUserAuth(false);
  };

  const handleSignIn = () => {
    auth?.setUserAuth(true);
  };

  return (
    <>
      {auth?.userAuth ? (
        <button onClick={handleSignOut}>logout</button>
      ) : (
        <button onClick={handleSignIn}>login</button>
      )}
    </>
  );
};

export default AuthButton;
