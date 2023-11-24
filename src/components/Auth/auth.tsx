import React, { useState, ChangeEvent } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
  Auth as FirebaseAuth,
} from 'firebase/auth';
import { auth, googleProvider } from '../../config/firebase.js';

interface AuthProps {
  // Your component props, if any
}

const Auth: React.FC<AuthProps> = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(
        auth as FirebaseAuth,
        email,
        password
      );
    } catch (err) {
      console.error(err);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth as FirebaseAuth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  };

  const logOut = async () => {
    try {
      await signOut(auth as FirebaseAuth);
    } catch (err) {
      console.error(err);
    }
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <input
        placeholder='Email...'
        value={email}
        onChange={handleEmailChange}
      />
      <input
        placeholder='Password...'
        type='password'
        value={password}
        onChange={handlePasswordChange}
      />
      <button onClick={signIn}>Sign In</button>
      <button onClick={signInWithGoogle}>Sign In with Google</button>
      <button onClick={logOut}>Logout</button>
    </div>
  );
};

export default Auth;
