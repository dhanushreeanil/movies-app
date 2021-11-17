import axios from 'axios'

export const startGetMovies = (movie) => {
    return (dispatch) => {
        axios.get(`http://www.omdbapi.com/?apikey=41dd3c3d&s=${movie.title}`)
            .then((response) => {
                const result = response.data.Search
                // console.log("result-api", result)
                dispatch(addMovie({...movie, image : `${result[0].Poster}`}))
                // dispatch(addMovie({...movie,image : `https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`}))
            }) 
            .catch((err) => {
                console.log(err.message)
            })
    }
}

export const addMovie = (movie) =>{
    return {
        type : "ADD_MOVIE",
        payload : movie
    }
}

export const removeMovie = (id) =>{
    return {
        type : "REMOVE_MOVIE",
        payload : id
    }
}
