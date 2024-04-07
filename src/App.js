import React from "react";
import {useState ,useEffect } from "react";
import MovieCard from "./moviecard";
import "./App.css";

const API_URL = 'https://www.omdbapi.com?apikey=4e66f495'

const movie1 = {
    "Title": "Amazing Spiderman Syndrome",
    "Year": "2012",
    "imdbID": "tt2586634",
    "Type": "movie",
    "Poster": "N/A"
}

const App = () => {
    const [movies, setMovies] = useState([])

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.search)
    }

    useEffect (() =>{
        searchMovies("Spiderman")

    },[])

    return (
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input type="text" placeholder="Search for movies"
                value="superman"
                onChange={() =>{}}
                />
                <img src="https://raw.githubusercontent.com/gist/adrianhajdin/997a8cdf94234e889fa47be89a4759f1/raw/f13e5a9a0d1e299696aa4a0fe3a0026fa2a387f7/search.svg"
                        alt="search"
                        />
           </div>
           {
                        movies?.length > 0 
                        ?(
                        <div className="container">
                            {movies.map((movie)=> (
                                <MovieCard movie={movie}/>

                            ))}
                            
                            
            
                        </div>
            
                        ) : (
                            <div className="empty">
                                <h2>No movies found</h2>

                            </div>
                            
                        )
           }


        </div>
    )
}
export default App;
