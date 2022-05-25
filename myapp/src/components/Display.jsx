import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Display(props) {
    const medicines = props.medicines
    const displayMedicines = () => {
        return medicines.map(medicine => {
            return (
                <tr>
                    <td>{medicine.manufacturer}</td>
                    <td>{medicine.name}</td>
                    <td><Link to="/medicine" state={{ medicine: medicine }}> {medicine.serial}</Link></td>
                    <td>
                        {medicine.state==="1"? <span class="color_instock">In Stock</span> : ""}
                        {medicine.state==="0"? <span class="color_discarded">Discarded</span> : ""}
                        {medicine.state==="3"? <span class="color_shipped">Shipped</span> : ""}
                        {medicine.state==="5"? <span class="color_delivered">Picked Up</span> : ""}
                    </td>
                </tr>
            )
        })
    }
    return (
        // <div className="medicine_container">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Manufacturing Company</th>
                        <th>Medicine Name</th>
                        <th>Serial Number</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {displayMedicines()}
                </tbody>
            </Table>
        // </div>
    );
}
export default Display;