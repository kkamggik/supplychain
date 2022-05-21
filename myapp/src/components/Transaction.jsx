import { Table } from 'react-bootstrap';

function Transaction(props) {
    const transactions = props.transactions
    const display = () => {
        return transactions.map(transaction => {
            return (
                <tr>
                    {transaction.state === "1" ? <td><span class="status color_instock">Manufactured</span></td> : null}
                    {transaction.state === "2" ? <td><span class="status color_discarded">Discarded</span></td> : null}
                    {transaction.state === "3" ? <td><span class="status color_shipped">Shipped</span></td> : null}
                    {transaction.state === "4" ? <td><span class="status color_received">Received</span></td> : null}
                    {transaction.state === "5" ? <td><span class="status color_delivered">Picked Up</span></td> : null}
                    <td>From : {transaction.src_addr} ({transaction.src})<br/>
                    To : {transaction.dest_addr} ({transaction.dest})<br/>
                    Timestamp : {transaction.time}</td>
                </tr>
            )
        })
    }
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Status</th>
                    <th>Detail</th>
                </tr>
            </thead>
            <tbody>
                {display()}
            </tbody>
        </Table>
    );
}
export default Transaction;