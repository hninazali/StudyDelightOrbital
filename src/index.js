import React from 'react';
import ReactDOM from 'react-dom';
import {Provider, useSelector} from "react-redux";
//import store from "./store";
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware, compose} from "redux"; //need to import applyMiddleware() too
import rootReducer from "./reducers/rootReducer";
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore, createFirestoreInstance } from 'redux-firestore'
import {ReactReduxFirebaseProvider, getFirebase, isLoaded, reactReduxFirebase} from 'react-redux-firebase'
import fbConfig from './config/fbConfig'
import firebase from 'firebase/app'
import './components/index.css';

const store = createStore(rootReducer, compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(firebase, fbConfig),
   //reactReduxFirebase(fbConfig, {useFirestoreForProfile: true, userProfile: 'users'})
));

const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true
}

const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance,
    presence: 'presence',
    sessions: 'sessions'
}

function AuthIsLoaded({ children }) {
    const auth = useSelector(state => state.firebase.auth)
    if (!isLoaded(auth)) return <div>Loading Screen...</div>;
    return children
}

ReactDOM.render(
    <Provider store = {store}>
        <ReactReduxFirebaseProvider { ...rrfProps }>
            <AuthIsLoaded>
                <App />
            </AuthIsLoaded>
        </ReactReduxFirebaseProvider>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
