
import { createStore, applyMiddleware } from 'redux';
import log from '../react/webpack/logw';
import reducers from './reducers';
import isArray from 'lodash/isArray';

// middlewares
import { createLogger } from 'redux-logger';
import promisify from 'redux-promise';
import thunk from 'redux-thunk';

const wrapDispatchWithMiddlewares = (store, middlewares) => {
    middlewares.forEach(middleware => store.dispatch = middleware(store)(store.dispatch))
};

const triggerMultiple = store => next => action => {

    if (isArray(action.type)) {

        return action.type.forEach(a => next({
            type: a
        }));
    }

    return next(action);
};

const configureStore = () => {

    const middlewares = [triggerMultiple, thunk, promisify];

    if (process.env.NODE_ENV !== 'production') {

        middlewares.push(createLogger())
    }

    return createStore(
        reducers,
        applyMiddleware(...middlewares) // applyMiddleware returns an redux enhancer
    );
};

export default configureStore;