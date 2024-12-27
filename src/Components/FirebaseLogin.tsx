// import React from 'react';
// import auth, { googleAuthProvider } from '../firebase config/firebase';
// import { Button } from '@chakra-ui/react';

// const FirebaseLogin = () => {
//   const user = null;
//   const username = null;

//   //1.user signined in but no username -> <UsernameForm>
//   //2.user signedin -> <SignOutButton>
//   //3.user signout -> <SignInbutton>
//   {
//     user ? !username ? <UsernameForm /> : <SignOutButton /> : <SignInButton />;
//   }

//   function SignInButton() {
//     const signInWithGoogle = async () => {
//       // use auth sign popup
//       await auth.signInWithPopup(googleAuthProvider);
//     };
//   }

//   function SignOutButton() {
//     //use auth sign out
//     return <Button onClick={() => auth.signOut()}>Signout</Button>;
//   }

//   function UsernameForm() {}
//   return <Button onClick={signInWithGoogle}>Google Login</Button>;
// };

// export default FirebaseLogin;
