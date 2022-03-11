import React, { useState, useEffect, useContext } from 'react';
import NavbarPage from './NavbarPage';
import BlockchainContext from "./Context";
import Display from './Display';
import Search from './Search';
import MedicineModal from './MedicineModal';
import { Link } from 'react-router-dom';
import { CgPill } from "react-icons/cg";


function HomePage() {

    const [show, setShow] = useState(false);

    const blockchainContext = useContext(BlockchainContext);
    const { web3, contract, account } = blockchainContext;

    const [medicines, setMedicines] = useState([]);
    const identity = JSON.parse(window.localStorage.getItem("user")).identity;

    useEffect(() => {
        getMedicines()
    }, [])

    async function getMedicines() {
        setMedicines([]);
        const id = JSON.parse(window.localStorage.getItem("user")).id;
        const medicines = await contract.methods.getMedicine(id).call();
        setMedicines(medicines)
    }

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <div className="container_outer">
            <NavbarPage />
                <div className="main">
                    <div className="box">
                        {identity==="2" ? <button className="button_medicine" onClick={handleShow}>Add Medicine</button> : "" }
                        <Search/>
                        <Display medicines={medicines} />
                    </div>
                </div>
                <MedicineModal show={show} handleClose={handleClose} getMedicines={getMedicines} />
        </div>
 
    );
}
export default HomePage;

