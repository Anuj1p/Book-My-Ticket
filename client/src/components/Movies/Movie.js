import React from 'react';
import './Movie.css' ;
import StarIcon from '@material-ui/icons/Star';
// import 'bootstrap/dist/css/bootstrap.min.css';

const Movie = (props) => {
    return(
        <div className="container-card">
            <div className="movie-card">
                <div className="movie">
                    <img src={props.url} alt={props.title} />
                    <div className="movie-info">
                        <h3>{props.title}</h3>
                        <span>{props.imdb}<StarIcon style={{paddingTop:7, fontSize: 20}}/></span>
                    </div>
                    <div className="movie-overview">
                        <h2>OVERVIEW:</h2>
                        <p>{props.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Movie;   