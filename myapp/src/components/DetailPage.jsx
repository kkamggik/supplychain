import { React, useContext, useState, useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom'
import NavbarPage from './NavbarPage';
import Transaction from './Transaction';
import { Card, Form, Row, Col, Button, Modal, Table } from 'react-bootstrap';
import BlockchainContext from "./Context";


function DetailPage() {
    const location = useLocation();
    const navigate = useNavigate();

    const { medicine } = location.state;

    const blockchainContext = useContext(BlockchainContext);
    const { web3, contract, account } = blockchainContext;

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [users, setUsers] = useState([]);
    const [destination, setDestination] = useState(0);
    const [transactions, setTransactions] = useState([]);
    const [last, setLast] = useState(null);

    const current_user = JSON.parse(window.localStorage.getItem("user")).id;
    const current_identity = JSON.parse(window.localStorage.getItem("user")).identity;
    useEffect(() => {
        getUsers()
    }, [])

    useEffect(() => {
        async function getTransaction() {
            const transaction = await contract.methods.getTransactions(medicine.id).call();
            setTransactions(transaction);
            setLast(transaction[transaction.length - 1]);
        }
        getTransaction();
    }, [])
    async function getUsers() {
        setUsers([]);
        const userCnt = await contract.methods.userCount().call();
        for (let i = 1; i <= userCnt; i++) {
            const user = await contract.methods.users(i).call();
            if (user.state==1 && (user.identity === "2" || user.identity === "3" || user.identity === "4")) setUsers(users => [...users, user])
        }
    }

    const url = "https://api.qrserver.com/v1/create-qr-code/?data=" + medicine.serial;

    const handleRemove = (e) => {
        console.log(`remove medicine #${medicine.id}`);
        const time = new Date().toUTCString();
        contract.methods.removeMedicine(medicine.id, time).send({ from: account })
            .once('receipt', (receipt) => {
                navigate("/");
            })
    }

    const handlePickUp = (e) => {
        console.log(`deliver medicine #${medicine.id} to patient`);
        const time = new Date().toUTCString();
        contract.methods.deliverMedicine(medicine.id, time).send({ from: account })
            .once('receipt', (receipt) => {
                navigate("/");
            })
    }

    const handleShip = (e) => {
        console.log("ship medicine");
        const time = new Date().toUTCString()
        contract.methods.send(destination, medicine.id, time).send({ from: account })
            .once('receipt', (receipt) => {
                navigate("/");
            })
    }

    const handleReceive = (e) => {
        console.log("receive medicine");
        const time = new Date().toUTCString()
        contract.methods.receive(medicine.id, time).send({ from: account })
            .once('receipt', (receipt) => {
                navigate("/");
            })
    }

    return (
        <div className="container_outer">
            <NavbarPage />
            <div className="main">
            {medicine.id!=="0" ? 
                <div>
                    <Card className="text-center" style={{ marginTop: "50px", border: "none" }}>
                        <Card.Img variant="top" src={url} style={{ width: 200, height: 200, margin: "auto", marginTop: 20 }} />
                        <Card.Body>
                            <Card.Title>{medicine.name}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{medicine.serial}</Card.Subtitle>
                            <Card.Text>
                                <div>Manufacturer: {medicine.manufacturer}</div>
                                <div>Manufactured Date: {medicine.mDate}</div>
                                <div>Expiry Date: {medicine.eDate}</div>
                                <div>Directions:</div>
                                <div style={{ whiteSpace: "pre-wrap" }}>{medicine.directions}</div>
                                <br/>
                                {last!=null ? 
                                    <div className="button_container">
                                        { (current_identity==="2" || current_identity==="4" ) && (last.to === current_user) && (last.state == 1 || last.state == 4) ? <button className="button_remove" onClick={handleRemove}>Discard</button>
                                            : <button className="button_remove" disabled>Discard</button>}
                                        { (current_identity==="4") && (last.to === current_user) && (last.state == 1 || last.state == 4) ? <button className="button_pickup" onClick={handlePickUp}>PickUp</button>
                                            : <button className="button_pickup" disabled>PickUp</button>}
                                        {last.to === current_user && (last.state == 1 || last.state == 4) ? <button className="button_ship" onClick={handleShow}>Send</button>
                                            : <button className="button_ship" disabled>Ship</button>}
                                        {last.to === current_user && last.state == 3 ? <button className="button_receive" onClick={handleReceive}>Receive</button>
                                            : <button className="button_receive" disabled>Receive</button>}
                                    </div> : ""
                                }
                                <br/>
                                <Transaction transactions={transactions}/>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                : <h3 style={{marginTop:"100px"}}>Medicine Not Found</h3> }
            </div>
            <Modal show={show} onHide={handleClose} backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>Ship Medicine</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="direction">
                            <Form.Label>Shipping Addresses</Form.Label>
                            <Form.Select onChange={(e) => setDestination(e.target.value)}>
                                <option value="0"> Select destination</option>
                                {users.map(user => {
                                    return (
                                        <option value={user.id}>{user.account} - {user.company} ({user.addr})</option>
                                    )
                                })}
                            </Form.Select>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="primary" onClick={handleShip}>Submit</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
export default DetailPage;