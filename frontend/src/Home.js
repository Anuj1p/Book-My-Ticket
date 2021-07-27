import React from 'react'
import AppBar from './Pages/AppBar' ;
import MovieList from './components/Movies/MovieList' ;
import Checkin from './Pages/Public/Checkin/Checkin'
function Home() {
    return (
        <div>
            <AppBar/>
            <MovieList/>
            {/* <Checkin/> */}
        </div>
    )
}

export default Home
