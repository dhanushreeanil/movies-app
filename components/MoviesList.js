import React from 'react'
import { useSelector } from 'react-redux'

import MovieCard from './MovieCard'
import MoviesSearch from './MoviesSearch'

const MoviesList = (props) => {

    const movies = useSelector((state) =>{
        return state.movies
    })

    return (
        <div>
            <div className=""> <MoviesSearch /></div>
            <div className=""><MovieCard /></div>
        </div>
    )
}

export default MoviesList
