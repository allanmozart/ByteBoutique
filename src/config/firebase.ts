import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyB22QpaFKGVEpknCFiXRsF-Q7xgI1Y72Gw',
  authDomain: 'byteboutiquefinalproj.firebaseapp.com',
  projectId: 'byteboutiquefinalproj',
  storageBucket: 'byteboutiquefinalproj.appspot.com',
  messagingSenderId: '897330256006',
  appId: '1:897330256006:web:ebac7d90fc728a122c5907',
  measurementId: 'G-4R8Y3PJZV7',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider, signInWithEmailAndPassword };
