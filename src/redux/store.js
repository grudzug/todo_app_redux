import { applyMiddleware, createStore } from 'redux'
import rootReducer from './reducer'
import { save, load } from "redux-localstorage-simple"

const createStoreWithMiddleware 
    = applyMiddleware(
        save({ states: ["todos", "user"] }) // Saving user and todos to localstorage
    )(createStore)

const store = createStoreWithMiddleware(
    rootReducer,    
    load({ states: ["todos", "user"] }) // Loading user and todos from localstorage
)  

export default store