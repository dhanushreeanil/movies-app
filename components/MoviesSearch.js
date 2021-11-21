import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const MoviesSearch = (props) => {

    const movies = useSelector((state)=>{
        return state.movies
    })

    const [search, setSearch] = useState('')
    const [searchedMovie, setSearchedMovie] = useState({})

    const handleSearch = (e) =>{
        const searchInput = e.target.value
        setSearch(searchInput)

        const searchMovie = movies.find((ele)=>{
            return searchInput.toLowerCase() == ele.title.toLowerCase()
        })
        setSearchedMovie(searchMovie)
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        setSearch('')
    }

    return (
        <div>
            <form onSubmit = { handleSubmit }>
                <input type="search" 
                    value = { search } 
                    onChange = { handleSearch } 
                    placeholder="Search by movie name"    
                />
            </form>
            { searchedMovie ? <div>
                {/* <h3> Searched Movie </h3>  */}
                <h4> { searchedMovie.title } - { searchedMovie.rating } </h4> 
            </div> : null }
        </div>
    )
}

export default MoviesSearch
