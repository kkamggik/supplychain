import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Container, Form, Row, Col, Button, Modal, Table } from 'react-bootstrap';
import NavbarPage from './NavbarPage';
import BlockchainContext from "./Context";

var generator = require('generate-serial-number');

function HomePage(props) {

    const [show, setShow] = useState(false);
    const [sort, setSort] = useState('any');
    const [keyword, setKeyword] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [medicineName, setMedicineName] = useState('');
    const [manufacturerName, setManufacturerName] = useState('');
    const [direction, setDirection] = useState('');

    const blockchainContext = useContext(BlockchainContext);
    const {web3, contract, account} = blockchainContext;

    const [medcnt, setMedcnt] = useState(0);
    const [medicines, setMedicines] = useState([]);

    useEffect(() => {
        getMedicines()
    },[])

    async function getMedicines() {
        setMedicines([]);
        const medicineCount = await contract.methods.medicineCount().call();
        setMedcnt(medicineCount);
        for (let i = 1; i <= medicineCount; i++) {
            const medicine = await contract.methods.medicines(i).call();
            if (medicine.state === "1") setMedicines(medicines => [...medicines, medicine])
        }
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleGenerate = (e) => {
        var serialNumber = generator.generate(16);
        contract.methods.addMedicine(medicineName, manufacturerName, serialNumber, direction, startDate, endDate).send({ from: account })
            .once('receipt', (receipt) => {
                getMedicines();
                window.open(`/qrcode/${serialNumber}`, "_blank");
            })
        handleClose();
        e.preventDefault();
    }

    const displayMedicines = () => {
        return medicines.map(medicine => {
            return (
                <tr>
                    <td>{medicine.id}</td>
                    <td>{medicine.name}</td>
                    <td><Link to="/medicine" state={{ medicine: medicine }}> {medicine.serial}</Link></td>
                </tr>
            )
        })
    }

    const handleSort = (e) => {
        // let filtered;
        // if(keyword==='') filtered = medicines;
        // else if(sort==="medicineName"){
        //     filtered = medicines.filter((medicine) => medicine.name===keyword);
        // }else if(sort==="serialNumber"){
        //     filtered = medicines.filter((medicine) => medicine.medicine_serial===keyword);
        // }else if(sort==="id"){
        //     filtered = medicines.filter((medicine) => medicine.id===keyword);
        // }
        // displayMedicines();
        // e.preventDefault();
    }

    return (
        <div className="home_container">
            <div className="home">
                <NavbarPage />
                <Container>
                    <Form className="mt-3">
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
                                <Form.Control type="text" id="keyword" placeholder="keyword" onChange={(e) => setKeyword(e.target.value)}/>
                            </Col>
                            <Col xs="auto" className="my-1">
                                <Button type="submit" onClick={handleSort}>Submit</Button>
                            </Col>
                        </Row>
                    </Form>
                    <div className="medicine">
                        <Button variant="warning" onClick={handleShow}>Add Medicine</Button>
                        <div className="medicine_container">
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Medicine Name</th>
                                        <th>Serial Number</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {displayMedicines(medicines)}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </Container>
                <Modal show={show} onHide={handleClose} backdrop="static">
                    <Modal.Header closeButton>
                        <Modal.Title>New Medicine</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="medicineName">
                                <Form.Label>Medicine Name</Form.Label>
                                <Form.Control type="text" placeholder="Medicine Name" onChange={(e) => setMedicineName(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="manufacturerName">
                                <Form.Label>Manufacturer Name</Form.Label>
                                <Form.Control type="text" placeholder="Manufacturer Name" onChange={(e) => setManufacturerName(e.target.value)} />
                            </Form.Group>
                            <Row className="align-items-center">
                                <Col xs={6}>
                                    <Form.Group className="mb-3" controlId="manufacturerName">
                                        <Form.Label>Manufacturered Date</Form.Label>
                                        <div class="date_container">
                                            <input type="date" onChange={(e) => setStartDate(e.target.value)}/>
                                        </div>
                                    </Form.Group>
                                </Col>
                                <Col xs={6}>
                                    <Form.Group className="mb-3" controlId="manufacturerName">
                                        <Form.Label>Expiry Date</Form.Label>
                                        <div class="date_container">
                                            <input type="date" onChange={(e) => setEndDate(e.target.value)}/>
                                        </div>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Form.Group className="mb-3" controlId="direaction">
                                <Form.Label>Directions</Form.Label>
                                <Form.Control as="textarea" placeholder="Describe directions" onChange={(e) => setDirection(e.target.value)} rows={4} />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>Close</Button>
                        <Button variant="primary" onClick={handleGenerate}>Save</Button>
                    </Modal.Footer>
                </Modal>

                {/* To read a qrcode
                    <form enctype="multipart/form-data" action="http://api.qrserver.com/v1/read-qr-code/" method="POST">
                    <input type="hidden" name="MAX_FILE_SIZE" value="1048576" />
                    Choose QR code image to read/scan: <input name="file" type="file" />
                    <input type="submit" value="Read QR code" />
                </form> */}
            </div>
        </div>
    );
}
export default HomePage;

