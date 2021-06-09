import React from 'react'
import AppBar from './Pages/AppBar' ;
import MovieList from './components/Movies/MovieList' ;
function Home() {
    return (
        <div>
            <AppBar/>
            <MovieList/>
        </div>
    )
}

export default Home
