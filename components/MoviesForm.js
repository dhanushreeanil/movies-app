import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'

import { startGetMovies } from '../actions/moviesAction'

const MoviesForm = (props) => {

    const dispatch = useDispatch()

    const [movie, setMovie] = useState({
        title : "",
        rating : "",
    })
    const [formErrors, setFormErrors] = useState({})
    const errors = {}

    const handleChange = (e) =>{
        if(e.target.name === "title"){
            setMovie({...movie, title : e.target.value})
        }
        else if(e.target.name === "rating"){
            setMovie({...movie, rating : e.target.value})
        }
    }
    const resetForm = () =>{
        setMovie({
            title: "",
            rating: "",
        })
    }
    const runValidations = () => {
        // name
        if((movie.title).trim().length === 0) {
            errors.title = "movie name can't be blank"
        }

        // rank
        if((movie.rating).trim().length === 0) {
            errors.rating = "imdb ranking can't be blank"
        }
    }
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        runValidations()
        const { title, rating } = movie
        if(Object.keys(errors).length === 0){
            setFormErrors({})
            const formData = {
                id : uuidv4(),
                title,
                rating,
            }
            dispatch(startGetMovies(formData))
            resetForm()
        }
        else{
            setFormErrors(errors)
        }
    }
    
    return (
        <div>
            <h2> Add Movie </h2>
            <form onSubmit = { handleSubmit }>
                <input type="text"
                     name = "title"
                     placeholder="Enter a movie name" 
                     value = { movie.title } 
                     onChange = { handleChange }
                /><br/>
                {formErrors.title && <p style={{color: 'red'}}>{formErrors.title}</p>}
                <input type="text" 
                    name = "rating"
                    placeholder="IMDB ranking" 
                    value = { movie.rating } 
                    onChange = { handleChange }
                /><br/>
                {formErrors.rating && <p style={{color: 'red'}}>{formErrors.rating}</p>}
                <input type="submit" value = "add" />
            </form>
        </div>
    )
}

export default MoviesForm
