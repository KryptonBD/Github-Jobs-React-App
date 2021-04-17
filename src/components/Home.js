import React from 'react';
import GithubContext from '../context/githubContext';
import { useContext, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Job from './Job';
import JobsPagination from './JobsPagination';
import SearchForms from './SearchForms';


const Jobs = () => {
    const githubContext = useContext(GithubContext);
    const { getJobs, params, page, loading, error, jobs, changePage, checkNextPage, hasNextPage } = githubContext;

    useEffect(() => {
        getJobs(page);
        checkNextPage(page + 1);
        //eslint-disable-next-line
    }, [page, params])

    let ob = {};
    const handleParamsChange = e => {
        const param = e.target.name;
        const value = e.target.value;
        ob = { ...params, [param]: value }
        getJobs(1, ob)
    }

    return (
        <Container className="my-4">
            <h1 className="mb-4">Github Jobs</h1>
            <SearchForms onParamChange={handleParamsChange} />
            {!loading && !error && <JobsPagination page={page} changePage={changePage} hasNextPage={hasNextPage} />}
            {loading && <h2>Loading ... </h2>}
            {!loading && error && <h2>Please Try Refreshing</h2>}
            {!loading && !error && jobs.length > 0 && jobs.map(job => <Job job={job} key={job.id} />)}
        </Container>
    )
}

export default Jobs;
