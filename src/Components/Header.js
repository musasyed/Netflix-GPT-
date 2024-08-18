import React, { useEffect } from 'react'
import "../index.css"
import logo from "../Images/logo.png"
import { auth } from '../utils/Firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, removeUser } from '../redux/userSLice'
import { toggleGPTSearchView } from '../redux/gptSlice'
import { Supported_Lanuguages } from '../utils/constants'
import {changeLanguage} from "../redux/configSlice"



const Header = () => {
  const navigate = useNavigate();
  const dispatch=useDispatch()
  const user=useSelector(store=>store.user)
  const showGptSearch=useSelector((store)=>store.gpt.showGptSearch)

  const HandleSignOut=()=>{
    signOut(auth).then(() => {
    }).catch((error) => {
      // An error happened.
    });
  }

  const handleGPTSearch=()=>{
    // Toggle GPT Search
    dispatch(toggleGPTSearchView())
  }

  const handleLanguageChange=(e)=>{
    // console.log(e.target.value)
    dispatch(changeLanguage(e.target.value))
  }

    // UseEffect because we want to use this once
useEffect(()=>{
  const unsubscribe=onAuthStateChanged(auth, (user) => {
    if (user) {
      // Sign In Case
      const {uid, email,displayName,photoURL} = user;
      dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
      navigate("/browse")
    } else {
      // Sign Out Case
      dispatch(removeUser());
      navigate("/")
    
    }
  });

  return ()=>{
    unsubscribe();
  }
},[])

  return (
    <div className='flex justify-between items-center absolute w-full z-10'>
        <div className=' flex w-screen justify-between bg-gradient-to-b from-black  flex-col md:flex-row'>
        <img  className=' p-7 w-44 mx-auto md:mx-0' alt='Logo' src={logo}/>
        {user &&
        <div className=' flex p-2 mr-0 items-center gap-2 justify-center  md:mr-10 '>
{showGptSearch &&(<select className='m-2 p-2 bg-green-900 text-white' onChange={handleLanguageChange}>
            {Supported_Lanuguages.map(lang=><option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
          </select>)}
        <img className='w-12 h-12 rounded-lg' alt='user-icon' src={user?.photoURL}/>
        <button onClick={handleGPTSearch} className='bg-purple-700 text-white rounded-lg p-2'>
          {showGptSearch?"Home Page": "Show GPT Search"}
          </button>
        <button onClick={HandleSignOut} className='bg-red-700 text-white rounded-lg p-2'>Sign Out</button>
        {/* <p className='invisible md:visible bg-red-700 text-white rounded-lg p-2'>{user.email}</p> */}
        </div>
        }
        </div>
    </div>
  )
}  

export default Header