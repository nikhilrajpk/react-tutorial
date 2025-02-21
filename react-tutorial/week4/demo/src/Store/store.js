import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './todoSllice'
export const store = configureStore({
    reducer : {
        'todo' : todoReducer
    }
})