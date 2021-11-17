const moviesInitialState = [{title: "the avengers",id:1,image:"https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_FMjpg_UX1000_.jpg",rating:4}]

const moviesReducer = (state = moviesInitialState, action) =>{
    switch(action.type){
        case "ADD_MOVIE" : {
            return [...state,{...action.payload}]
        }
        case "REMOVE_MOVIE" : {
            return state.filter((movie)=>{
                return movie.id !== action.payload
            })
        }
        default : {
            return [...state] 
        }
    }
}

export default moviesReducer