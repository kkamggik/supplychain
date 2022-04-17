import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Display(props) {
    const medicines = props.medicines
    const displayMedicines = () => {
        return medicines.map(medicine => {
            return (
                <tr>
                    <td>{medicine.id}</td>
                    <td>{medicine.name}</td>
                    <td><Link to="/medicine" state={{ medicine: medicine }}> {medicine.serial}</Link></td>
                    {medicine.state==="1" ? <td><span class="color_instock">In Stock</span></td> : null}
                    {/* {medicine.state==="2" ? <td><span class="color_delivered">In Progress</span></td> : null} */}
                    {medicine.state==="3" ? <td><span class="color_shipped">Shipped</span></td> : null}
                </tr>
            )
        })
    }
    return (
        // <div className="medicine_container">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
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