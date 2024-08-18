import React, { useRef, useState } from 'react'
import Header from './Header'
import background from "../Images/background.jpg"
import { checkValidData } from '../utils/Validate';
import {createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import { auth } from '../utils/Firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/userSLice';

const Login = () => {

  const [isSignInForm,setIsSignInForm]= useState(true);
  const [errorMessage,setErrorMessage]=useState(null)
  const dispatch=useDispatch();

  const name=useRef(null)
  const email=useRef(null);
  const password=useRef(null);

  const handleButtonClick=()=>{
    // Validate the Form Data
    const message=checkValidData(email.current.value,password.current.value);
    // console.log("Check Validation Message",message)
    setErrorMessage(message)

    // Sign In Sign Up Logic
    if(!isSignInForm){
      // Sign Up Logic
    createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
      displayName:name.current.value,photoURL: "https://avatars.githubusercontent.com/u/66136377?v=4"
    }).then(() => {
      // Profile updated!
      const {uid, email,displayName,photoURL} = auth.currentUser;
      dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
    }).catch((error) => {
      // An error occurred
    setErrorMessage(error.message)
    });
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+ "-" +errorMessage)
  });
    }
    else{
      signInWithEmailAndPassword(auth,email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // console.log(user)

      
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode+ "-" +errorMessage)
      });
    }
  }

  const toggleSignInForm=()=>{
    setIsSignInForm(!isSignInForm);
  }

  return (
    <div className='relative'>
     <Header/>
     <div className=''>
      <img   alt='Logo' src={background} className=' h-screen object-cover w-full'/>
     </div>
     <form onSubmit={(e)=>e.preventDefault()} className='p-12 rounded-md bg-black text-white absolute top-32 my-32 mx-auto right-0 left-0 w-96 md:w-3/12 bg-opacity-80 '>
        <h1 className='font-bold text-3xl py-4'>{isSignInForm? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && (<input  ref={name} type='text' placeholder='Full Name' className='p-4 my-2 w-full bg-gray-700'/>)}

        <input  ref={email} type='email' placeholder='Email Address' className='p-4 my-2 w-full bg-gray-700'/>

        <input ref={password} type='password' placeholder='Password' className='p-4 my-2 w-full bg-gray-700'/>

        <p className= ' font-bold text-lg text-red-500'>{errorMessage}</p>
        <button  onClick={handleButtonClick} className='my-6 p-4  bg-red-700 w-full rounded-md'>{isSignInForm? "Sign In" : "Sign Up"}</button>

        <p className='py-2 cursor-pointer' onClick={toggleSignInForm}>
        {isSignInForm? "New to Netflix? Sign Up Now" : "Already a User? Sign In Now"}
          </p>
     </form>
    </div>
  )
}

export default Login