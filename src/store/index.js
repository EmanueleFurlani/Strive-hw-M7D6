import { createStore, compose, applyMiddleware, combineReducers } from "redux"
//import { mainReducer } from "../reducers/likesReducer"
import thunk from "redux-thunk"
import { likesReducer } from "../reducers/likesReducer"
import { jobsReducer } from "../reducers/jobsReducer"
import { persistStore, persistReducer } from 'redux-persist'
// import localStorage from 'redux-persist/lib/storage'
import storageSession from 'redux-persist/lib/storage/session'
import { encryptTransform } from 'redux-persist-transform-encrypt'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose



export const intialState = {
    likes: {
        elements: []
    },

    jobs: {
        elements: [],
        isError: false,
        isLoading: false,
    }
}

const persistConfig = {
    key: "root",
    storage: storageSession,
    transform: [
        encryptTransform({
            secretKey: process.env.REACT_APP_SECRET_KEY,
            onError: (error) => {
                console.log(error)
            }
        })
    ]
}

// combine the reducers
 const mainReducer = combineReducers({
     likes: likesReducer,
     jobs: jobsReducer
 })

const persistedReducer  = persistReducer(persistConfig, mainReducer)

const configureStore = createStore(
    persistedReducer ,
    intialState,
    composeEnhancers(applyMiddleware(thunk))
)

const persistor = persistStore(configureStore)

export {configureStore, persistor}