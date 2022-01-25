import { applyMiddleware, createStore } from 'redux'
import rootReducer from './reducer'
import { save, load } from "redux-localstorage-simple"

const createStoreWithMiddleware 
    = applyMiddleware(
        save({ states: ["todos", "user"] }) // Saving done here
    )(createStore)

const store = createStoreWithMiddleware(
    rootReducer,    
    load({ states: ["todos", "user"] }) // Loading done here
)  

export default store