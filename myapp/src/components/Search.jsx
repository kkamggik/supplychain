import React, { useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';

function Search({medicines, setMedicines}) {
    const [sort, setSort] = useState('serialNumber');
    const [keyword, setKeyword] = useState('');    

    const handleSort = (e) => {
        e.preventDefault();
        if(sort==="serialNumber") setMedicines(medicines.filter(medicine => medicine.serial===keyword))
        else if(sort==="medicineName") setMedicines(medicines.filter(medicine => medicine.name===keyword))
        else if(sort==="manufacturer") setMedicines(medicines.filter(medicine => medicine.manufacturer===keyword))
    }
    const handleReset = (e) => {
        e.preventDefault();
        setMedicines(medicines)
    }

    return (
        <Form className="mb-2">
            <Row className="justify-content-end">
                <Col xs={2} className="my-1">
                    <Form.Select id="sortBy" defaultValue="any" onChange={(e) => setSort(e.target.value)}>
                        <option value="serialNumber">Serial Number</option>
                        <option value="medicineName">Medicine Name</option>
                        <option value="manufacturer">Manufacturing Company</option>
                    </Form.Select>
                </Col>
                <Col xs={2} className="my-1">
                    <Form.Control type="text" id="keyword" placeholder="keyword" onChange={(e) => setKeyword(e.target.value)} />
                </Col>
                <Col xs="auto" className="my-1">
                    <Button type="submit" onClick={handleSort}>Submit</Button>
                </Col>
                <Col xs="auto" className="my-1">
                    <Button type="submit" style={{background: 'green', border: 'none'}} onClick={handleReset}>Reset</Button>
                </Col>
            </Row>
        </Form>
    );
}
export default Search;