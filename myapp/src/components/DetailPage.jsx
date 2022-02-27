import { React, useContext, useState, useEffect} from "react";
import { useLocation, useNavigate } from 'react-router-dom'
import NavbarPage from './NavbarPage';
import { Card, Form, Row, Col, Button, Modal, Table } from 'react-bootstrap';
import BlockchainContext from "./Context";


function DetailPage() {
    const location = useLocation();
    const navigate = useNavigate();

    const { medicine } = location.state;

    const blockchainContext = useContext(BlockchainContext);
    const {web3, contract, account} = blockchainContext;

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [users, setUsers] = useState([]);
    const [destination, setDestination] = useState(0);

    useEffect(() => {
        getUsers()
    },[])

    // 나중에 2로 바까야대
    async function getUsers() {
        setUsers([]);
        const userCnt = await contract.methods.userCount().call();
        for (let i = 1; i <= userCnt; i++) {
            const user = await contract.methods.users(i).call();
            if(user.identity==="2" || user.identity==="3") setUsers(users => [...users, user])
        }
    }

    const url = "https://api.qrserver.com/v1/create-qr-code/?data="+medicine.serial;

    const handleRemove = (e) => {
        console.log(`remove medicine #${medicine.id}`);
        contract.methods.removeMedicine(medicine.id).send({ from: account })
            .once('receipt', (receipt) => {
            navigate("/");
        })
    }

    const handleShip = (e) => {
        console.log("ship medicine");
        contract.methods.send(destination, medicine.id).send({ from: account })
            .once('receipt', (receipt) => {
            navigate("/");
        })
    }
    
    const handleReceive = (e) => {
        console.log("receive medicine");
        contract.methods.receive(medicine.id).send({ from: account })
            .once('receipt', (receipt) => {
            navigate("/");
        })
    }

    return (
        <div className="outer_container">
            <div className="home">
                <NavbarPage />
                <Card className="text-center" style={{marginTop: 50}}>
                    <Card.Img variant="top" src={url} style={{width: 200, height: 200, margin: "auto", marginTop:20}}/>
                    <Card.Body>
                        <Card.Title>{medicine.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{medicine.serial}</Card.Subtitle>
                        <Card.Text>
                            <div>Manufacturer: {medicine.mName}</div>
                            <div>Manufactured Date: {medicine.mDate}</div>
                            <div>Expiry Date: {medicine.eDate}</div>
                            <div>Directions:</div>
                            <div style={{whiteSpace: "pre-wrap"}}>{medicine.directions}</div>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <div className="button_container">
                    <button className="button_remove" onClick={handleRemove}>Discard</button>
                    <button className="button_ship" onClick={handleShow}>Ship</button>
                    <button className="button_receive" onClick={handleReceive}>Receive</button>
                </div>
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
                                            <option value={user.id}>{user.company} ({user.addr})</option>
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