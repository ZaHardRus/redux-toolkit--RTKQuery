import {combineReducers, configureStore} from "@reduxjs/toolkit";
import UserReducer from "./reducers/userReducer";

const rootReducer = combineReducers({
    userReducer:UserReducer
})
export const setupStore = () => {
    return configureStore({
        reducer:rootReducer,
        devTools:true
    })
}
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']