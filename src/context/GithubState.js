import React, { useReducer } from 'react';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import { GET_DATA, MAKE_REQUEST, ERROR } from './types'

const GithubState = (props) => {
    const initialState = {
        jobs: [],
        loading: true,
        error: false
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState);
    const BASE_URL = process.env.REACT_APP_GITHUB_JOBS_URL;

    const makeRequest = () => {
        dispatch({ type: MAKE_REQUEST });
    }
    
    const getJobs = async (params, page) => {
        try {
            const res = await fetch(`${BASE_URL}positions.json?page=${page}&markdown=true`);
            const data = await res.json()
            dispatch({
                type: GET_DATA,
                payload: data
            })
        } catch (err) {
            console.log("THE ERROR => ",err);
            dispatch({type: ERROR})
        }
    }

    return (
        <GithubContext.Provider
            value={{
                jobs: state.jobs,
                loading: state.loading,
                error: state.error,
                makeRequest,
                getJobs
            }}
        >
            {props.children}
        </GithubContext.Provider>
    )
}

export default GithubState;
