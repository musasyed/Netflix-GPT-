import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedMovies } from "../redux/moviesSlice";
import { useEffect } from "react";



const useTopRatedMovies=()=>{

const dispatch=useDispatch();

const TopRatedMovies=useSelector(store=>store.movies.TopRatedMovies)

  const getTopRatedMovies=async()=>{
    const data=await fetch("https://api.themoviedb.org/3/movie/top_rated",API_OPTIONS);
    const json=await data.json();
    // console.log(json)
    dispatch(addTopRatedMovies(json.results))
  };

  useEffect(()=>{
      // Memmoizatio for not repeat the API again and again
    !TopRatedMovies && getTopRatedMovies();
  },[])
}


export default useTopRatedMovies;