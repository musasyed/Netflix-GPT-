import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import background from "../Images/background.jpg"

const GptSearch = () => {
  return (
    <>
      <div className='fixed w-full -z-10'>
      <img className='h-screen object-cover md:w-screen' alt='Logo' src={background}/>
     </div>
     <div className='md:p-0'>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
    </>

  )
}

export default GptSearch