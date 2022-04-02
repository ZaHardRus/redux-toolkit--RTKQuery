import React, {useEffect} from 'react';
import {fetchUsers} from "./redux/reducers/userReducer";
import {useAppDispatch} from "./redux/hooks/storeHooks";


function App() {
    const dispatch = useAppDispatch()
    useEffect(()=>{
        dispatch(fetchUsers())
    },[])
    return (
        <div>

        </div>
    );
}

export default App;
