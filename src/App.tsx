import React from 'react';
import logo from './logo.svg';
import './App.css';
import { AuthProvider } from './context/AuthContext';
import UserAuth from './components/userAuth/UserAuth';
import AuthDisplay from './components/userAuth/AuthDisplay';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <h2>useContext</h2>
        <UserAuth />
        <AuthDisplay />
      </div>
    </AuthProvider>
  );
}

export default App;
