import React, { useState, ChangeEvent } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
  Auth as FirebaseAuth,
} from 'firebase/auth';
import { auth, googleProvider } from '../../config/firebase.js';
import {
  AuthContainer,
  GoogleSignInBtn,
  GoogleSignInContainer,
  Inputs,
  LogoutBtn,
  LogoutContainer,
  SignInBtn,
} from './style.js';

interface AuthProps {}

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
    <AuthContainer>
      <Inputs>
        <h3>Sign In</h3>
        <input
          style={{ backgroundColor: '#fefefe' }}
          placeholder='Email...'
          value={email}
          onChange={handleEmailChange}
        />
        <input
          style={{ backgroundColor: '#fefefe' }}
          placeholder='Password...'
          type='password'
          value={password}
          onChange={handlePasswordChange}
        />
        <SignInBtn onClick={signIn}>Sign In</SignInBtn>
      </Inputs>
      <GoogleSignInContainer>
        <GoogleSignInBtn onClick={signInWithGoogle}>
          Sign In with Google
        </GoogleSignInBtn>
      </GoogleSignInContainer>
      <LogoutContainer>
        <LogoutBtn onClick={logOut}>Logout</LogoutBtn>
      </LogoutContainer>
    </AuthContainer>
  );
};
export default Auth;
