import React, { VFC, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const AuthDisplay: VFC = () => {
  const auth = useContext(AuthContext);

  return (
    <div>{auth?.userAuth ? <p>login now...</p> : <p>logout now...</p>}</div>
  );
};

export default AuthDisplay;
