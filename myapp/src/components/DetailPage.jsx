import { React, useContext} from "react";
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

    const url = "https://api.qrserver.com/v1/create-qr-code/?data="+medicine.serial;

    const handleRemove = (e) => {
        console.log("remove clicked");
        contract.methods.removeMedicine(e.target.value).send({ from: account })
            .once('receipt', (receipt) => {
            navigate("/");
        })
    }

    return (
        <div className="home_container">
            <div className="home">
                <NavbarPage />
                {console.log(account)}
                <div className="medicine">
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
                        <Button variant="danger" value={medicine.id} onClick={handleRemove}>Discard</Button>
                        <Button variant="warning">Ship</Button>
                    </Card.Body>
                </Card>
                </div>
            </div>
        </div>
    );
}
export default DetailPage;