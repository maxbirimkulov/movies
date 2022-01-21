import React from 'react';
import './card.css'

const Card = ({movie}) => {
    return (
        <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
                <img className="activator card__img" src={movie.Poster === "N/A"
                    ? `https://via.placeholder.com/468x300?text=${movie.Title}`
                    : movie.Poster}/>
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">{movie.Title}</span>
                <div className='card__descr'>
                    <p>{movie.Year}</p>
                    <p>{movie.Type}</p>
                </div>

            </div>

        </div>
    );
};

export default Card;