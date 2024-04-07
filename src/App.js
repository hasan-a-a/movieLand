import React from "react";
import { useEffect } from "react";
import "./App.css";

const API_URL = 'https://www.omdbapi.com?apikey=4e66f495'

const App = () => {

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        console.log(data)
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
      onClick={() => searchMovies(searchTerm)}/>
           </div>
        </div>
    )
}
export default App;
