import React from 'react';
import {Route, Routes} from 'react-router-dom';
import { MainPage } from './MainPage';
import {PostDetails} from './PostDetails';
import {IPost, PostService} from "./redux/services/PostService";


function App() {
    // const dispatch = useAppDispatch()
    // useEffect(()=>{
    //     dispatch(fetchUsers())
    // },[])
    return (
        <Routes>
            <Route path={'/'} element={<MainPage/>}/>
            <Route path={'posts/:id'} element={<PostDetails/>}/>
        </Routes>
    );
}

export default App;
