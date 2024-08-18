import React from 'react'
import MovieCard from './MovieCard'
import "../style.css"

const MovieList = ({title,movies}) => {
    // console.log(movies)

  return (
    <div className='p-6  text-white w-full'>
            <h1 className=' text-2xl md:text-3xl py-6'>{title}</h1>
        <div className='flex overflow-x-scroll overscroll-x-none no-scrollbar'>
            <div className='flex'>
              {/* Check if movies is an array before mapping */}
              {movies && movies.length > 0 ? (
                        movies.map((movie, index) => (
                            <MovieCard key={index} NewMoviePoster={movie.poster_path} MovieTitle={movie.title}/>
                        ))
                    ) : (
                        <p>No movies available...</p>  // Fallback message
                    )}
                {/* <MovieCard  NewMoviePoster={movies[0].poster_path}/> */}
            </div>
        </div>
       
    </div>
  )
}

export default MovieList