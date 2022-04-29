import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Transaction(props) {
    const transactions = props.transactions
    const display = () => {
        return transactions.map(transaction => {
            return (
                <tr>
                    <td>{transaction.src}</td>
                    <td>{transaction.dest}</td>
                    <td>{transaction.time}</td>
                    {transaction.state === "1" ? <td><span class="status color_instock">Manufactured</span></td> : null}
                    {transaction.state === "2" ? <td><span class="status color_discarded">Discarded</span></td> : null}
                    {transaction.state === "3" ? <td><span class="status color_shipped">Shipped</span></td> : null}
                    {transaction.state === "4" ? <td><span class="status color_received">Received</span></td> : null}
                    {transaction.state === "5" ? <td><span class="status color_delivered">Picked Up</span></td> : null}
                </tr>
            )
        })
    }
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Source</th>
                    <th>Destination</th>
                    <th>Timestamp</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {display()}
            </tbody>
        </Table>
    );
}
export default Transaction;