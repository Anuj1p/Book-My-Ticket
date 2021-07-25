import React from 'react';
import {useParams} from 'react-router-dom' ;
import Movie from './Movie' ;
import './Movie.css' ;
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


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
        url:'https://www.rajasthantourplanner.com/images/amberfortjaipur.jpg',
        description:'Albert Hall Museum Jaipur !',
        imdb : '8'
        
    },
    {
        id: i++,
        title:'AMER FORT JAIPUR',
        url:'https://www.rajasthantourplanner.com/images/amberfortjaipur.jpg',
        description:'Jaipur Memories',
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
        url:'https://www.rajasthantourplanner.com/images/amberfortjaipur.jpg',
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
        <div className="movie-list">
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
        </div>
    ) ;
}


export default MovieList;