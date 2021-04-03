import React from 'react';
import {useParams} from 'react-router-dom' ;
import Movie from './Movie' ;
import './Movie.css' ;


let i=0 ;
const DUMMY_MOVIES = [
    {
        id: i++,
        title:'WORLD TRADE PARK',
        url:'https://free4kwallpapers.com/uploads/originals/2015/10/08/world-trade-park-jaipur.jpg',
        description:'One of the biggest malls in India!',
        imdb : '8' 
        
    },
    {
        id: i++,
        title:'JAL MAHAL JAIPUR',
        url:'https://images.unsplash.com/photo-1504705759706-c5ee7158f8bb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8amFsJTIwbWFoYWx8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
        description:'One of the fascinating sites to visit in India! ',
        imdb : '8'
        
    }, 

    {
        id: i++,
        title:'ALBERT HALL JAIPUR',
        url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwmbXVHt8JY-h4pSCD05aDD1j19KLGF5HTZDvMJwRYF9UmDKmpWDnZ2mdQynY4Gl0XeTw&usqp=CAU',
        description:'Albert Hall Museum Jaipur !',
        imdb : '8'
        
    },
    {
        id: i++,
        title:'AMER FORT JAIPUR',
        url:'https://www.rajasthantourplanner.com/images/amberfortjaipur.jpg',
        description:'Jaipur Memories',
        imdb : '8'
    }

] ;

const MovieList = () => {
    // const userId = useParams().userId ;
    return (
        <ul className="movie-list">
            {DUMMY_MOVIES.map((movie) => (
                <Movie 
                    key={movie.id}
                    id={movie.id}
                    url={movie.url}
                    title={movie.title}
                    description={movie.description}
                    imdb={movie.imdb}
                />
            ))}
        </ul>
    ) ;
}


export default MovieList;