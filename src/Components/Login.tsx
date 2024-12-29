import { Button } from '@chakra-ui/react';
import { auth, googleAuth } from '../firebase config/firebase';
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [loggedin, setLoggedIn] = useState(false)

  console.log(auth?.currentUser?.email); // ? here could be not authorized yet

  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password); //stores in auth ,takes email & pass
    } catch (err) {
      console.error(err);
    }
  };

  const googleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleAuth); // stores  auth ,takes google popout
    } catch (err) {
      console.error(err);
    }
  };

  const SignOut = async () => {
    try {
      await signOut(auth); // stores  auth ,takes google popout
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
    {auth.currentUser ? 
      <div className="w-100% flex-column justify-center">
        <h1 className='text-2xl'>Logged in, Welcome {auth?.currentUser?.email}</h1>
        <Button className="mt-10" onClick={SignOut}>
          SignOut
        </Button>
      </div>
      : //if not logged 
      <div>
        <h1 className='text-2xl'>Not Logged In</h1>
        <div className="login mt-5">
          {/* input 1 */}
          <input
            placeholder="Email"
            className="mb-2"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {/* input 2 */}
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button className="mt-2" onClick={signIn}>
            Regular Sign in
          </Button>
        </div>

        <Button className="mt-2" onClick={googleSignIn}>
          Google Login
        </Button>
      </div>
      }
      
    </>
  );
};

export default Login;
