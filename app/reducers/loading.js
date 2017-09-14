
import { LOADER_ON, LOADER_OFF } from '../actions';

const loading = (state = false, action) => {
    switch (action.type) {
        case LOADER_ON:
            return true;
        case LOADER_OFF:
            return false;
        default:
            return state;
    }
}

export default loading;

// selectors
export const getLoader = state => state;

