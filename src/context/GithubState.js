import React, { useReducer } from 'react';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import { GET_DATA, MAKE_REQUEST, ERROR, SET_PAGE, NEXT_PAGE } from './types'

const GithubState = (props) => {
    const initialState = {
        jobs: [],
        loading: true,
        error: false,
        params: {},
        page: 1,
        hasNextPage: false
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState);
    const BASE_URL = process.env.REACT_APP_GITHUB_JOBS_URL;

    const _CONTROLLER = new AbortController();
    const { signal: _SIGNAL } = _CONTROLLER;


    //DURING MAKING REQUEST RESET Everything
    const makeRequest = () => {
        dispatch({ type: MAKE_REQUEST });
    }

    //Getting jobs from api
    const getJobs = async (pg, params = {}) => {
        console.log("I was called");
        try {
            let res;
            if (params && params !== null) {
                res = await fetch(`${BASE_URL}positions.json?page=${pg}&markdown=true&` + new URLSearchParams(params), { _SIGNAL });
            } else {
                res = await fetch(`${BASE_URL}positions.json?page=${pg}&markdown=true`, { _SIGNAL });
            }
            const data = await res.json()
            dispatch({
                type: GET_DATA,
                payload: data
            })
        } catch (err) {
            if (err.name === "AbortError") return;
            console.log("THE ERROR => ", err);
            dispatch({ type: ERROR })
        }
    }

    // Check Next Page
    const checkNextPage = async (pg) => {
        try {
            const res = await fetch(`${BASE_URL}positions.json?page=${pg}`, { _SIGNAL });
            const data = await res.json()
            dispatch({
                type: NEXT_PAGE,
                payload: data.length !== 0
            })
        } catch (err) {
            if (err.name === "AbortError") return;
            console.log("NEXT PAGE ERROR => ", err);
            dispatch({ type: ERROR })
        }
    }


    // Pagination page change
    const changePage = (curPage) => {
        dispatch({ type: SET_PAGE, payload: curPage })
    }
    return (
        <GithubContext.Provider
            value={{
                jobs: state.jobs,
                loading: state.loading,
                error: state.error,
                page: state.page,
                params: state.params,
                hasNextPage: state.hasNextPage,
                makeRequest,
                getJobs,
                changePage,
                checkNextPage
            }}
        >
            {props.children}
        </GithubContext.Provider>
    )
}

export default GithubState;
