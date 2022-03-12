import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Transaction(props) {
    const transactions = props.transactions
    const display = () => {
        return transactions.map(transaction => {
            return (
                <tr>
                    <td>{transaction.from}</td>
                    <td>{transaction.to}</td>
                    <td>{transaction.time}</td>
                    {transaction.state==="1" ? <td><span class="status">Manufactured</span></td> : null}
                    {transaction.state==="2" ? <td><span class="status">Discarded</span></td> : null}
                    {transaction.state==="3" ? <td><span class="status">Delivered</span></td> : null}
                    {transaction.state==="4" ? <td><span class="status">Received</span></td> : null}
                </tr>
            )
        })
    }
    return (
        // <div className="medicine_container">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>From</th>
                        <th>To</th>
                        <th>Timestamp</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {display()}
                </tbody>
            </Table>
        // </div>
    );
}
export default Transaction;