
import { createStore, applyMiddleware } from 'redux';
import log from '../react/webpack/logw';
import reducers from './reducers';

// middlewares
import { createLogger } from 'redux-logger';
import promisify from 'redux-promise';
import thunk from 'redux-thunk';

const wrapDispatchWithMiddlewares = (store, middlewares) => {
    middlewares.forEach(middleware => store.dispatch = middleware(store)(store.dispatch))
};

const configureStore = () => {

    const middlewares = [thunk, promisify];

    if (process.env.NODE_ENV !== 'production') {

        middlewares.push(createLogger())
    }

    return createStore(
        reducers,
        applyMiddleware(...middlewares) // applyMiddleware returns an redux enhancer
    );
};

export default configureStore;