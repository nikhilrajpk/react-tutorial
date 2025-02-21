import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const initialState = {
    user : null,
    loading : false,
    error : null
}

export const fetchUser = createAsyncThunk('user/fetchUser', async (userId)=> {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    return response.json()
})

const userSlice = createSlice({
    name : 'user', initialState,
    reducers : {},
    extraReducers : (builder)=>{
        builder
        .addCase(fetchUser.pending, (state)=>{
            state.loading = true
        })
        .addCase(fetchUser.fulfilled, (state, action)=>{
            state.loading = false
            state.user = action.payload
        })
        .addCase(fetchUser.rejected, (state, action)=>{
            state.loading = false
            state.error = action.error.message
        })
    }
})


export default userSlice.reducer