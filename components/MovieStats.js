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
            <h3> Movie Stats </h3>
            <h5 className="text-muted"> Total Movies - { movies.length } </h5>
            <h5> # { topMovie.title.toUpperCase() } </h5>
        </div>
    )
}

export default MovieStats
