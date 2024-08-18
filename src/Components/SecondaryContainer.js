import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

  const movies=useSelector((store)=>store.movies)
  // console.log(movies, "Movies")


  return (
    <div className=' mt-[70%] md:mt-20 bg-black'>
      <div className='-mt-96 z-10 relative pl-12'>
      <MovieList title={"Now Playing"}   movies={movies.nowPlayingMovies}/>
      <MovieList title={"Top Rated Movies"}   movies={movies.TopRatedMovies}/>
      <MovieList title={"Popular Movies"}   movies={movies.PopularMovies}/>
      <MovieList title={"Upcoming Movies"}   movies={movies.UpcomingMovies}/>
      <MovieList title={"Horror Movies"}   movies={movies.nowPlayingMovies}/>
      </div>
    </div>
  )
}

export default SecondaryContainer