import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from "redux-saga/effects";
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('GET_MOVIES', getMovies);
    yield takeEvery('GET_DETAILS', getDeetz);
    yield takeEvery('UPDATE_MOVIE', putMovie);
}

function* getMovies(action) {
    try {
        const getResponse = yield axios.get('/api');
        yield put({ type: 'SET_MOVIES', payload: getResponse.data })
    } catch (error) {
        console.log('error renting movies', error)
    }
}
//below uses id of the movie clicked to pull specific genre data from database
function* getDeetz(action) {
    try {
        const getDeetResponse = yield axios.get(`/api/details/${action.payload.id}`);
        yield put({ type: 'SET_GENRES', payload: getDeetResponse.data })
        console.log(getDeetResponse.data)
    } catch (error) {
        console.log('error getting the DEETZ', error);
    }
}
//cannot get PUT to work correctly. I am still fuzzy on the relationship between redux and sagas
// function* putMovie(action) {
//     try {
//         yield axios.put(`/api/edit/${action.payload.id}`);
//     }catch (error) {
//         console.log('error updating', error);
//     }
// }
//new one below
function* putMovie(action) {
    try {
        yield axios.put(`/api/edit_movie/`, (action.payload));
        yield put({ type: 'GET_MOVIES' })
    } catch (error) {
        console.log('error updating movie', error)
    }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload; //may need to spread -> return [ ...state, ...action.payload ];
        case 'GET_DETAILS':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload; //getDeetsResponse.data
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>,
    document.getElementById('root'));
registerServiceWorker();
