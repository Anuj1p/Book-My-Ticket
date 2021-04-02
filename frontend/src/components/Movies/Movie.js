import React from 'react';
import './Movie.css' ;

const Movie = (props) => {
    return(
        <div className="movie">
            <img src={props.url} alt={props.title} />
            <div className="movie-info">
                <h3>{props.title}</h3>
                <span>{props.imdb}</span>

            </div>

        </div>
    );
};

export default Movie;   