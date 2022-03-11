import React, { useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';

function Search(props) {
    const [sort, setSort] = useState('any');
    const [keyword, setKeyword] = useState('');    

    const handleSort = (e) => {
    }

    return (
        <Form className="mb-2">
            <Row className="justify-content-end">
                <Col xs={2} className="my-1">
                    <Form.Select id="sortBy" defaultValue="any" onChange={(e) => setSort(e.target.value)}>
                        <option value="any">Search By</option>
                        <option value="id">ID</option>
                        <option value="serialNumber">Serial Number</option>
                        <option value="medicineName">Medicine Name</option>
                    </Form.Select>
                </Col>
                <Col xs={2} className="my-1">
                    <Form.Control type="text" id="keyword" placeholder="keyword" onChange={(e) => setKeyword(e.target.value)} />
                </Col>
                <Col xs="auto" className="my-1">
                    <Button type="submit" onClick={handleSort}>Submit</Button>
                </Col>
            </Row>
        </Form>
    );
}
export default Search;