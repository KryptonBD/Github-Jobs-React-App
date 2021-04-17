import React from 'react';
import { Pagination } from 'react-bootstrap';

const JobsPagination = ({ page, changePage, hasNextPage }) => {

    const switchPage = (pg) => {
        changePage(page + pg)
    }

    return (
        <Pagination>
            {page !== 1 && <Pagination.Prev onClick={() => switchPage(-1)} />}
            {page > 2 && <Pagination.Item onClick={() => changePage(1)}>1</Pagination.Item>}
            {page !== 1 && <Pagination.Item onClick={() => switchPage(-1)}>{page - 1}</Pagination.Item>}
            {page > 3 && <Pagination.Ellipsis />}

            <Pagination.Item active>{page}</Pagination.Item>

            {hasNextPage && <Pagination.Item onClick={() => switchPage(1)}>{page + 1}</Pagination.Item>}
            {hasNextPage && <Pagination.Next onClick={() => switchPage(-1)} />}
        </Pagination>
    )
}

export default JobsPagination
