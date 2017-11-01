
import { createStore, applyMiddleware, compose } from 'redux';
import log from '../react/webpack/logw';
import reducers from './reducers';
import isArray from 'lodash/isArray';

// middlewares
import { createLogger } from 'redux-logger';
import promisify from 'redux-promise';
import thunk from 'redux-thunk';

// for getData
import { matchPath } from 'react-router';
import routes from './routes';

const wrapDispatchWithMiddlewares = (store, middlewares) => {
    middlewares.forEach(middleware => store.dispatch = middleware(store)(store.dispatch))
};

const dom = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

const triggerMultiple = store => next => action => {

    if (isArray(action.type)) {

        return action.type.forEach(a => next({
            type: a
        }));
    }

    return next(action);
};

const configureStore = preloadedState => {

    const middlewares = [triggerMultiple, thunk, promisify];

    // http://extension.remotedev.io/#usage
    let composeEnhancers = compose;

    if (dom && process.env.NODE_ENV !== 'production') {

        middlewares.push(createLogger());

        composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    }

    if (preloadedState) {

        return createStore(
            reducers,
            preloadedState,
            composeEnhancers(
                applyMiddleware(...middlewares) // applyMiddleware returns an redux enhancer
            )
        );
    }
    return createStore(
        reducers,
        composeEnhancers(
            applyMiddleware(...middlewares) // applyMiddleware returns an redux enhancer
        )
    );

};

export default configureStore;

export const fetchData = (url, store) => {

    const route = routes.find(route => matchPath(url, route));

    let promise;

    try {
        promise = route.component.fetchData(store, matchPath(url, route));
    }
    catch (e) {
        /**
         * Find how to find name/namespace of component
         */
        // log('fetchData not found', route ? route.component : {});
    }

    return Promise.resolve(promise);
}