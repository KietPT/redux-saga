import { createStore, compose, applyMiddleware } from 'redux';
import rootReducers from '../reducers/index';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'
import rootSage from './../sagas'

const composeEnhancers = process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' && 
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        shouldHotReload: false
    }): compose;

const sagaMiddleware = createSagaMiddleware()

const configStore = () => {
    const middleWare = [thunk, sagaMiddleware];
    const enhancers = [
        applyMiddleware(...middleWare)
    ];
    const store = createStore(rootReducers, composeEnhancers(...enhancers));
    sagaMiddleware.run(rootSage);
    return store;
};



export default configStore;