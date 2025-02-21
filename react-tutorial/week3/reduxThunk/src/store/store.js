import {configureStore} from '@reduxjs/toolkit'
import logger from 'redux-logger'
import userReducer from './userSlice'
import { apiSlice } from './apiSlice'

const store = configureStore({
    reducer : {
        user : userReducer,
        [apiSlice.reducerPath] : apiSlice.reducer,
    },
    middleware : (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(logger, apiSlice.middleware)
})

export default store