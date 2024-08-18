import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'


const MovieCard = ({NewMoviePoster,MovieTitle}) => {
  if(!NewMoviePoster) return null
  return (
    <div className='w-28 md:w-48 pr-2'>
         <img className='' src={IMG_CDN_URL + NewMoviePoster} alt='Movie Poster' />
         <h2 className='  md:mt-2 pt-3 text-sm  md:text-lg'>{MovieTitle}</h2>
    </div>
  )
}

export default MovieCard