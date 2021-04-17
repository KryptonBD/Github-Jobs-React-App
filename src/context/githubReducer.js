import { GET_DATA, MAKE_REQUEST, ERROR, SET_PAGE, NEXT_PAGE } from './types';

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
        case SET_PAGE:
            return {
                ...state,
                page: action.payload
            }
        case NEXT_PAGE:
            return {
                ...state,
                hasNextPage: action.payload
            }
        default:
            return {
                state
            }
    }

}