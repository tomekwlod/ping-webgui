
// top level reducers file

import { combineReducers } from 'redux';

// import byId, * as fromById from './byId';

// import createList, * as fromList from './createList';

import loader, * as fromLoader from './loading';

// log('fromLoader', fromLoader)

import list, * as fromList from './list';

const reducers = combineReducers({
    loader,
    list
})

export default reducers;

// selectors
export const getLoader = state => {
    return fromLoader.getLoader(state.loader);
}

export const getList = state => fromList.getIds(state.list).map(id => fromList.getById(state.list, id));