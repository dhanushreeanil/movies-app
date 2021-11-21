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
            <div className="col-8">
               {  movies.length > 0 ? <MoviesList /> : <p> No movies found... </p> }
            </div>
            <div className="col-4">
                <MoviesForm />
                <hr/>
                { movies.length > 0 ? <MovieStats /> : <p> No movies found... </p> }
            </div>
        </div>
    </div>
}

export default MoviesContainer