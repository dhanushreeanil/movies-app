import React from 'react'
import { useSelector } from 'react-redux'

import MoviesForm from './MoviesForm'
import MoviesList from './MoviesList'
import MovieStats from './MovieStats'

const MoviesContainer = (props) => {

    const movies = useSelector((state) =>{
        return state.movies
    })
    
    return <div className="container-fluid">
        <div className="row">
            <div className="col-lg-6 col-sm-6 order-2 order-lg-1">
               {  movies.length > 0 && <MoviesList  /> }
            </div>
            <div className="col-lg-6 col-sm-6 order-1 order-lg-2">
                <MoviesForm />
                { movies.length > 0 && <MovieStats /> }
            </div>
        </div>
    </div>
}

export default MoviesContainer