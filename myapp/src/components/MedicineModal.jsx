import React, { useState, useContext } from 'react';
import { Form, Row, Col, Button, Modal } from 'react-bootstrap';
import BlockchainContext from "./Context";

var generator = require('generate-serial-number');

function MedicineModal(props) {
    const show = props.show;
    const handleClose = props.handleClose;
    const getMedicines = props.getMedicines;

    const blockchainContext = useContext(BlockchainContext);
    const { web3, contract, account } = blockchainContext;

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [medicineName, setMedicineName] = useState('');
    const [manufacturerName, setManufacturerName] = useState('');
    const [direction, setDirection] = useState('');
    const [serialNumber, setSerialNumber] = useState('');
    const [showQR, setShowQR] = useState(false);

    const handleQRClose = () => setShowQR(false);
    const handleQRShow = () => setShowQR(true);


    const handleGenerate = (e) => {
        handleClose();
        var serial = generator.generate(16);
        setSerialNumber(serial);
        const time = new Date().toUTCString();
        contract.methods.addMedicine(medicineName, serial, direction, startDate, endDate, time).send({ from: account })
            .once('receipt', (receipt) => {
                handleQRShow();
                getMedicines();
            })
        e.preventDefault();
    }

    return (
        <div>
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
                                        <input type="date" onChange={(e) => setStartDate(e.target.value)} />
                                    </div>
                                </Form.Group>
                            </Col>
                            <Col xs={6}>
                                <Form.Group className="mb-3" controlId="manufacturerName">
                                    <Form.Label>Expiry Date</Form.Label>
                                    <div class="date_container">
                                        <input type="date" onChange={(e) => setEndDate(e.target.value)} />
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
            <Modal show={showQR} onHide={handleQRClose} backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>QR code</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <img src={"https://api.qrserver.com/v1/create-qr-code/?data=" + serialNumber + "&amp;size=100x100"} alt="" title="qrcode" />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleQRClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
export default MedicineModal;