import React, { useState, useEffect, useContext } from 'react';
import { Table } from 'react-bootstrap';
import BlockchainContext from "./Context";
import { Link } from 'react-router-dom';

function InTransit(props) {
    const medicines = props.medicines;
    
    const displayMedicines = () => {
        return medicines.map(medicine => {
            return (
                <tr>
                    <td>{medicine.medicine_id}</td>
                    <td>{medicine.name}</td>
                    <td><Link to="/medicine" state={{ medicine: medicine }}> {medicine.serial}</Link></td>
                    <td>{medicine.src}</td>
                    <td>{medicine.dest}</td>
                </tr>
            )
        })
    }

    return (
        <div className="medicine_container">
            {console.log(medicines)}
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Medicine Name</th>
                        <th>Serial Number</th>
                        <th>Source</th>
                        <th>Destination</th>
                    </tr>
                </thead>
                <tbody>
                    {displayMedicines()}
                </tbody>
            </Table>
        </div>
    );
}
export default InTransit;