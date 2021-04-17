import React from 'react';
import GithubContext from './context/githubContext';
import { useContext, useEffect } from 'react';


const Jobs = () => {
    const githubContext = useContext(GithubContext);
    const { getJobs } = githubContext;

    useEffect(() => {
        getJobs({}, 1);
        //eslint-disable-next-line
    }, [])

    return (
        <div>
            Welcome Home
        </div>
    )
}

export default Jobs;
