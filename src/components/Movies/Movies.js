import React from 'react'
import Card from "../card";
import './movies.css'

const Movies = ({movies = []}) =>{
        return (
            <div className='movies'>
                {movies.length ?
                    movies.map((el)=>{
                        return <Card key={el.imdbID} movie={el}/>
                    })
                    : <img className='movies__img' src="https://newyork.forumdaily.com/wp-content/uploads/2021/03/shutterstock_1200786709.jpg" alt=""/>
                }


            </div>
        )

}

export default Movies
