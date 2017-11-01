
import {
    REFRESH_INTERVAL_SET
} from '../actions';

const refreshInterval = (state = 60000, action) => {
    switch(action.type) {
        case REFRESH_INTERVAL_SET:
            return action.payload;
        default:
            return state;
    }
}

export default refreshInterval;

// selectors
export const getInterval = state => state;