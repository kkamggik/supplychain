import React from "react";
import { Container, Form, Row, Col, Button, Card, Modal } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './custom.css';
import NavbarPage from './NavbarPage';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function HomePage(props) {
    const [show, setShow] = React.useState(false);
    const [startDate, setStartDate] = React.useState(new Date());
    const [endDate, setEndDate] = React.useState(new Date());
    const [medicineName, setMedicineName] = React.useState('');


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleDate = (e) => {
        setStartDate(e)
        if (e >= endDate) setEndDate(e)
    }
    const handleGenerate = () => {
    }

    return (
        <div class="home_container">
            <div class="home">
                <NavbarPage/>
                <Container>
                    <Form className="mt-3">
                        <Row className="justify-content-end">
                            <Col ml="auto" className="my-1">
                                <Button variant="warning" onClick={handleShow}>Add Medicine</Button>
                            </Col>
                            <Col xs={2} className="my-1">
                                <Form.Select id="sortBy" defaultValue="any">
                                    <option value="any">Any</option>
                                    <option value="manufacturerName">Manufacturer</option>
                                    <option value="medicineName">Name</option>
                                </Form.Select>
                            </Col>
                            <Col xs={2} className="my-1">
                                <Form.Control type="text" id="keyword" placeholder="keyword" />
                            </Col>
                            <Col xs="auto" className="my-1">
                                <Button type="submit">Submit</Button>
                            </Col>
                        </Row>
                    </Form>
                    <Card className="text-center mt-3">
                        <Card.Header>Medicine ID</Card.Header>
                        <Card.Body>
                            <Card.Title>타이레놀</Card.Title>
                            <Card.Text>
                                With supporting text below as a natural lead-in to additional content.
                                    </Card.Text>
                            <Button variant="success">Shipping</Button>
                        </Card.Body>
                    </Card>
                </Container>
                <Modal show={show} onHide={handleClose} backdrop="static">
                    <Modal.Header closeButton>
                        <Modal.Title>new medicine</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="medicineName">
                                <Form.Label>Medicine Name</Form.Label>
                                <Form.Control type="text" placeholder="Medicine Name" onChange={(e) => setMedicineName(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="manufacturerName">
                                <Form.Label>Manufacturer Name</Form.Label>
                                <Form.Control type="text" placeholder="Manufacturer Name" />
                            </Form.Group>
                            <Row className="align-items-center">
                                <Col xs={6}>
                                    <Form.Group className="mb-3" controlId="manufacturerName">
                                        <Form.Label>Manufacturered Date</Form.Label>
                                        <div class="date_container">
                                            <DatePicker selected={startDate} minDate={new Date()} onChange={handleDate} />
                                        </div>
                                    </Form.Group>
                                </Col>
                                <Col xs={6}>
                                    <Form.Group className="mb-3" controlId="manufacturerName">
                                        <Form.Label>Expiry Date</Form.Label>
                                        <div class="date_container">
                                            <DatePicker selected={endDate} minDate={startDate} onChange={(date) => setEndDate(date)} />
                                        </div>
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                            </Button>
                        <Button variant="primary" onClick={handleGenerate}>
                            <Link to={"/qrcode/"+medicineName} target="_blank">
                                Save
                            </Link>
                        </Button>
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