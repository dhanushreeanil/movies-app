import moviesReducer from '../reducers/moviesReducer'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const ConfigureStore = () =>{
    const store = createStore(combineReducers({
        movies : moviesReducer,
    }), applyMiddleware(thunk))
    return store
}

export default ConfigureStore
