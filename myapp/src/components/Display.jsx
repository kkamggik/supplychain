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
                </tr>
            )
        })
    }
    return (
        <div className="medicine_container">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Medicine Name</th>
                        <th>Serial Number</th>
                    </tr>
                </thead>
                <tbody>
                    {displayMedicines()}
                </tbody>
            </Table>
        </div>
    );
}
export default Display;