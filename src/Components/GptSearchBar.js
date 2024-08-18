import React, { useRef } from 'react'
import lang from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import openai from '../utils/openai'
import { API_OPTIONS } from '../utils/constants'
import { json } from 'react-router-dom'
import { addGPTMovieResult } from '../redux/gptSlice'

  const GptSearchBar = () => {
    const searchText=useRef(null)
    const dispatch=useDispatch();

  const langKey=useSelector((store)=>store.config.lang)


  // Search Movie in TMDB when search from chatgpt then match with TMDB
  const searchMovieTMDB=async(movie)=>{
    const data= await fetch("https://api.themoviedb.org/3/search/movie?query=" +movie+"&include_adult=false&language=en-US&page=1'",API_OPTIONS);
    const json=await data.json()
    return json.results;
  }

  const handleGPTSearch=async ()=>{
      console.log(searchText.current.value)
      // Make API Call to GPT API Get Movie Results
      const gptQuery= "Act as a Movie Recommendation System and suggest some movies for the querry"+searchText.current.value + "Only Give me names of 05 movies,comma seperated like the example that given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
      const gptResults=await openai.chat.completions.create({
        messages: [{ role: 'user', content: gptQuery}],
        model: 'gpt-3.5-turbo',
      });
      console.log(gptResults.choices?.[0]?.message?.content);
      // Movies lsit come
     const gptMovies=gptResults.choices?.[0]?.message?.content.split(",");
    //  ["Movie Name","Movie Name","Movie Name","Movie Name","Movie Name",]

    //  [Get the array of list after applying split]
    // Now For Each movie search TMDB API

    const promiseArray=gptMovies.map((movie)=>searchMovieTMDB(movie))
    // ["Promise","Promise","Promise","Promise","Promise"}

    const tmdbResults=await Promise.all(promiseArray);
    console.log(tmdbResults)
    dispatch(addGPTMovieResult({movieNames:gptMovies,movieResults:tmdbResults}))
    

    }
  return (
    <div className='pt-[50%] md:pt-[10%] flex justify-center'>
        <form className='w-full md:w-1/2 bg-black grid grid-cols-12' onSubmit={(e)=>e.preventDefault()}>
            <input ref={searchText} type='text' className='p-4 m-4 col-span-9 rounded-lg' placeholder={lang[langKey].gptSearchPlaceHolder}/>
            <button className='px-4 m-4 col-span-3 rounded-lg py-2 font-bold text-lg bg-red-700 text-white'
            onClick={handleGPTSearch}
            >
                {lang[langKey].search}
            </button>
        </form>
    </div>
  )
}

export default GptSearchBar;