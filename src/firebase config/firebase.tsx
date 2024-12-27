import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth'; // we need provider for external services
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCNxXTOy9pdwAmiFsxOSDHg2F9B2Vu2kzE',
  authDomain: 'video-game-hub-52b3b.firebaseapp.com',
  projectId: 'video-game-hub-52b3b',
  storageBucket: 'video-game-hub-52b3b.firebasestorage.app',
  messagingSenderId: '251088183164',
  appId: '1:251088183164:web:f297078e62d861b0d50ef9',
  measurementId: 'G-SGRYPY2DND',
};

// Initialize Firebase with configs above
const app = initializeApp(firebaseConfig);
//auth
export const auth = getAuth(app);
export const googleAuth = new GoogleAuthProvider();

//database
export const db = getFirestore(app);
