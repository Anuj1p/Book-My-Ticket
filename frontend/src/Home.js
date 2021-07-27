import React from 'react'
import AppBar from './Pages/AppBar' ;
import MovieList from './components/Movies/MovieList' ;
import Checkin from './Pages/Public/Checkin/Checkin'
import New from './components/Movies/New';

function Home() {
    return (
        <div>
            <AppBar/>
            <MovieList/>
            <New/>
            {/* <Checkin/> */}
        </div>
    )
}

export default Home
