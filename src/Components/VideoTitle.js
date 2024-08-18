import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='md:w-screen pt-[30%] right-0 left-0 md:pt-[20%] aspect-video px-16 md:px-24 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-2xl md:text-6xl font-bold'>{title}</h1>
      <p className='hidden md:inline-block py-5 text-lg w-1/4 '>{overview}</p>
      <div className='my-2 md:m-0'>
        <button className='py-2 md:py-4 px-6 md:px-12 w-15 bg-white text-black  rounded-md text-lg hover:bg-opacity-80' >▶ Play</button>
        <button className='hidden md:inline-block mx-2 p-4 px-12 w-15 bg-gray-500 text-white  bg-opacity-50 rounded-md text-lg'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle