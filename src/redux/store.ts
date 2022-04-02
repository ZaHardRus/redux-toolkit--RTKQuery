import {combineReducers, configureStore} from "@reduxjs/toolkit";
import UserReducer from "./reducers/userReducer";
import {PostService} from "./services/PostService";

const rootReducer = combineReducers({
    userReducer:UserReducer,
    [PostService.reducerPath]: PostService.reducer
})
export const setupStore = () => {
    return configureStore({
        reducer:rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware()
                .concat(PostService.middleware),
        devTools:true
    })
}
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']