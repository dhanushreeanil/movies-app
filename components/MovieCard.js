import React, { useEffect, useState } from 'react'
import { removeMovie } from '../actions/moviesAction'
import { useDispatch, useSelector } from 'react-redux'
import { Card, Button } from 'react-bootstrap'


const MovieCard = (props) => {

    const moviesData = useSelector((state) =>{
        return state.movies
    })
    console.log("moviesdata",moviesData)

    const [selectOrder, setSelectOrder] = useState('')
    const [movies,setMovies] = useState([])

    useEffect(()=>{
        setMovies(moviesData)
    },[moviesData])

    const dispatch = useDispatch()
  
    const handleRemove = (id) =>{
        dispatch(removeMovie(id))
    }
    const handleSelect = (e) =>{
        const selectInput = e.target.value
        setSelectOrder(selectInput)

            if (selectOrder === 'ascendingName') {
                const sortedMovies = [...movies].sort((a, b) => {
                    return (b.title > a.title) ? 1 : (a.title > b.title) ? -1 : 0
                })
                setMovies(sortedMovies)
            }
            else if (selectOrder === "descendingName") {
                const sortedMovies = [...movies].sort((a, b) => {
                    return (a.title > b.title) ? 1 : (b.title > a.title) ? -1 : 0
                })
                setMovies(sortedMovies)
            }   
            else if(selectInput == "ascendingRating"){
                const sortedMovies = [...movies].sort((a, b) => {
                    return parseFloat(b.rating) - parseFloat(a.rating)
                })
                setMovies(sortedMovies)
                console.log("acsending", sortedMovies)
            }
            else if(selectInput == "descendingRating"){
                const sortedMovies = movies.sort((a, b) => {
                  return  parseFloat(a.rating) - parseFloat(b.rating)
                })
                setMovies(sortedMovies)
                console.log("descending", sortedMovies)
            }
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
    }
    
    return (
        <div>
            <div>
            <form onSubmit = { handleSubmit }>
                <select value = { selectOrder } onChange = { handleSelect }>
                    <option value = "orderBy"> order by </option>
                    <option value = "ascendingName" >Name ( A - Z ) </option>
                    <option value = "descendingName" >Name ( Z - A )</option>
                    <option value = "ascendingRating" > Ranking ( High - Low ) </option>
                    <option value = "descendingRating" > Ranking ( Low - High ) </option>
                </select>
            </form>
            </div>
            <hr/>
            <div className="row">
            { movies.map((movie)=>{
               return <div className="col-3">
               <Card className="box" style={{ width: '11rem' }}>
                <Card.Img className="card-img-top" variant="top" src={ movie.image } height="150" width="100" />
                <Card.Body>
                  <Card.Title className="movieCard">{ movie.title }</Card.Title>
                  <Card.Text className="movieCard">  # { movie.rating } </Card.Text>
                  <Button className="movieButton" variant="primary"
                    onClick = {()=>{ handleRemove(movie.id)} } > remove </Button>
                </Card.Body>
              </Card>
                {/* // return <div key = { movie.id }>
                //     <img src={ movie.image } height="150" width="100"/>
                //     <p className="text-capitalize font-weight-bold"> { movie.title } </p>
                //     <p className=""> # { movie.rating }   
                //         <button className="bg-warning" onClick = {()=>
                //         { handleRemove(movie.id)} }> remove </button>
                //     </p> */}
                </div>
            }) }
            </div>
        </div>
    )
}

export default MovieCard

// import React from 'react'
// import { useDispatch } from 'react-redux'

// import { removeMovie } from '../actions/moviesAction'

// const MovieCard = (props) => {
//     const { movies } = props

//     console.log("movies-card", movies)

//     const dispatch = useDispatch()

//     const handleRemove = (id) =>{
//         dispatch(removeMovie(id))
//     }

//     return (
//         <div>
//             { movies.map((ele)=>{
//                 <div key = { ele.id }>
//                     <img src={ele.image}/>
//                     <h3>{ele.title}</h3>
//                     <p>{ele.rating}</p>
//                     <button onClick={() => {
//                         handleRemove(ele.id)
//                     }}>Remove</button>
//                 </div>
//             }) }
            
//         </div>
//     )
// }

// export default MovieCard