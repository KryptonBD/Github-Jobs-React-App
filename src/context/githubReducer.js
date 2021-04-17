import { GET_DATA, MAKE_REQUEST, ERROR } from './types';

//eslint-disable-next-line
export default (state, action) => {
    switch (action.type) {
        case GET_DATA:
            return {
                ...state,
                loading: false,
                jobs: action.payload
            }
        case MAKE_REQUEST:
            return {
                ...state,
                loading: true,
                jobs: []
            }
        case ERROR:
            return {
                ...state,
                error: true,
                loading: false,
                jobs: []
            }
        default:
            return {
                state
            }
    }

}