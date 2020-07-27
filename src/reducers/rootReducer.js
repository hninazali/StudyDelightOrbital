import authReducer from './authReducer'
import listReducer from "./listReducer";
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase'


const rootReducer = combineReducers({
    lists: listReducer,
    // pool: poolReducer,
    auth: authReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer

// the key name will be the data property on the state object