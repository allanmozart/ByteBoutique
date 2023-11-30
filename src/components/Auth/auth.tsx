import { useState, useEffect, ChangeEvent } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
  Auth as FirebaseAuth,
  onAuthStateChanged,
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
  ToggleSignUp,
} from './style.js';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/reducers.js';
import { clearUser, setUser } from '../../store/authSlice.js';

interface AuthProps {}

const Auth: React.FC<AuthProps> = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isSignUp, setIsSignUp] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth as FirebaseAuth, (user) => {
      if (user) {
        dispatch(setUser(user));
      } else {
        dispatch(clearUser());
      }
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch]);

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

  const toggleSignUp = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <AuthContainer>
      {user ? (
        <LogoutContainer>
          <p>Hello, {user.email}</p>
          <LogoutBtn onClick={logOut}>Logout</LogoutBtn>
        </LogoutContainer>
      ) : (
        <>
          <Inputs>
            <h3>{isSignUp ? 'Sign Up' : 'Sign In'}</h3>
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
            <SignInBtn onClick={isSignUp ? signIn : signInWithGoogle}>
              {isSignUp ? 'Sign Up' : 'Sign In'}
            </SignInBtn>
          </Inputs>
          <GoogleSignInContainer>
            <GoogleSignInBtn onClick={signInWithGoogle}>
              Sign In with Google
            </GoogleSignInBtn>
          </GoogleSignInContainer>
          <p>
            {isSignUp
              ? 'Already have an account?'
              : "Don't have an account? Sign up now!"}
            <ToggleSignUp onClick={toggleSignUp}>
              {isSignUp ? 'Sign In' : 'Sign Up'}
            </ToggleSignUp>
          </p>
        </>
      )}
    </AuthContainer>
  );
};

export default Auth;
