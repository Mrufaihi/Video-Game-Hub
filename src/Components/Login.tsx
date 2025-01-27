import { Button, Image } from '@chakra-ui/react';
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
      <div className="flex-column justify-center self-center w-screen">
        <h1 className='text-2xl'>Logged in, Welcome {auth?.currentUser?.email}</h1>
        <Button className="mt-10" onClick={SignOut}>
          SignOut
        </Button>
      </div>
      : //if not logged 
      <div className='w-screen h-screen flex flex-col items-center justify-center '>
        <h1 className='m-10 text-4xl font-bold'>Not Logged In</h1>
          {/* input 1 */}
          <input
            placeholder="Email"
            className="m-5 w-80 p-3 rounded-lg bg-gray-200"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {/* input 2 */}
          <input
          className='m-5 w-80 p-3 rounded-lg bg-gray-200'
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div>
            <Button className="m-5 p-5 font-xl" onClick={signIn}>
              Regular Sign in
            </Button>
            <Button  className="m-5" onClick={googleSignIn}>
              Google 
              {/* TODO: IMG NOT SHOWING */}
              <Image src='../assets/google-icon.svg'></Image>
            </Button>
          </div>
      </div>
      }
      
    </>
  );
};

export default Login;
