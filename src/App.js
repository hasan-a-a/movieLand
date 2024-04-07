import React from "react";
import { useState, useEffect } from "react";
import MovieCard from "./Moviecard";
import "./App.css";

const API_URL = "https://www.omdbapi.com?apikey=4e66f495"
// const API_URL = "https://www.omdbapi.com?apikey=b6003d8a"

const App = () => {
    const [searchTerm,setSearchTerm] = useState("")
    const [movies, setMovies] = useState([])
    useEffect(() => {
        searchMovies("Spiderman")

    }, [])

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data)
    }



    return (
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input type="text" placeholder="Search for movies"
                    value= {searchTerm} 
                    onChange={(e) => setSearchTerm(e.target.value)}
                    />
                <img src="https://raw.githubusercontent.com/gist/adrianhajdin/997a8cdf94234e889fa47be89a4759f1/raw/f13e5a9a0d1e299696aa4a0fe3a0026fa2a387f7/search.svg"
                    alt="search"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>
            {
                movies?.length > 0
                    ? (
                        <div className="container">
                            {movies.map((movie) => (
                                <MovieCard movie={movie} />

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
