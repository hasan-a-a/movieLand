import React from "react";
import { useEffect } from "react";

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
        <h1>App</h1>
    )
}
export default App;
