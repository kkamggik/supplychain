import React, { useState, useEffect, useContext } from 'react';
import { Table } from 'react-bootstrap';
import BlockchainContext from "./Context";
import { Link } from 'react-router-dom';
import InTransit from './InTransit';
import NavbarPage from './NavbarPage';

function TransitPage(props) {

    const blockchainContext = useContext(BlockchainContext);
    const { web3, contract, account } = blockchainContext;

    const [medicines, setMedicines] = useState([]);

    useEffect(() => {
        getMedicines()
    }, [])

    async function getMedicines() {
        setMedicines([]);
        const id = JSON.parse(window.localStorage.getItem("user")).id;
        const medicines = await contract.methods.getMedicineOnTransit(id).call();
        setMedicines(medicines)
    }
    
    return (
        <div className="container_outer">
            <NavbarPage/>
            <div className="main">
                <div className="user_container">
                    <h2>Medicines in transit</h2>
                    <br/>
                    <InTransit medicines={medicines}/>
                </div>
            </div>
        </div>
    );
}
export default TransitPage;