import React from 'react';
import { Col, Form } from 'react-bootstrap';

const SearchForms = ({ onParamChange }) => {
    return (
        <Form className="mb-4">
            <Form.Row className="align-items-end">
                <Form.Group as={Col}>
                    <Form.Label>Description</Form.Label>
                    <Form.Control onChange={onParamChange} name="description" type="text" />
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>Location</Form.Label>
                    <Form.Control onChange={onParamChange} name="location" type="text" />
                </Form.Group>
                <Form.Group as={Col} xs="auto" className="ml-2">
                    <Form.Check onChange={onParamChange} name="full_time" className="mb-2" label="Only Full Time" />
                </Form.Group>
            </Form.Row>
        </Form>
    )
}

export default SearchForms;
