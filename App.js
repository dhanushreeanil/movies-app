import React from 'react'
import "./card.css"
import MoviesContainer from './components/MoviesContainer'

const App = (props) => {
    return (
        <div className="container-fluid">
            <h1 className="heading"> Movies List </h1>
            <div className="moviesContainer"><MoviesContainer /></div>
        </div>
    )
}

export default App