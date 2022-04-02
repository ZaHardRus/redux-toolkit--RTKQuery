import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";

const initialState: UserState = {
    users: [],
    isLoading: false,
    error: '',
    count: 0
}
export const fetchUsers = createAsyncThunk(
    'users/fetchAll',
    async (payload, thunkApi) => {
       try {
           const response = await axios.get('https://jsonplaceholder.typicode.com/users')
           return response.data
       }catch (e){
           return thunkApi.rejectWithValue('Ошибка при запросе')
       }
    }
)
export const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchUsers.fulfilled.type]: (state, action: PayloadAction<Array<IUser>>) => {
            state.isLoading = false
            state.error = ''
            state.users = action.payload
        },
        [fetchUsers.rejected.type]: (state) => {
            state.isLoading = false
            state.error = 'произошла ошибка'
        },
        [fetchUsers.pending.type]: (state) => {
            state.isLoading = true
        },
    }
})
export default UserSlice.reducer

interface IUser {
    id: number
    name: string
    email: string
}

interface UserState {
    users: Array<IUser>
    isLoading: boolean
    error: string
    count: number
}
