import React from 'react'
import { useSelector } from 'react-redux'

const MovieStats = (props) => {

    const movies = useSelector((state) =>{
        return state.movies
    })

    const topRatedMovie = Math.min.apply(Math, movies.map(function(ele) { 
        return ele.rating 
    }))
    const topMovie = movies.find((ele)=>{
        return ele.rating == topRatedMovie
    })
    // console.log("topratedmovie", topRatedMovie)
    // console.log("moviename", topMovie)

    return (
        <div>
            <h2> Movie Stats </h2>
            <h3> Total Movies - { movies.length } </h3>
            <h4> # { topMovie.title.toUpperCase() } </h4>
        </div>
    )
}

export default MovieStats
