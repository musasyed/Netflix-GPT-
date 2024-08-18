import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import {addUpcomingMovies } from "../redux/moviesSlice";
import { useEffect } from "react";


const useUpcomingMovies=()=>{

const dispatch=useDispatch();
const upcomingMovies=useSelector(store=>store.movies.UpcomingMovies)

  const getUpcomingMovies=async()=>{
    const data=await fetch("https://api.themoviedb.org/3/movie/upcoming",API_OPTIONS);
    const json=await data.json();
    // console.log(json,"Upcoming")
    dispatch(addUpcomingMovies(json.results))
  };

  useEffect(()=>{

    // Memmoizatio for not repeat the API again and again
   !upcomingMovies &&  getUpcomingMovies();
  },[])
}


export default useUpcomingMovies;