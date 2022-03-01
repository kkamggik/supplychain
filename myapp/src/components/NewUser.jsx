import React, { useContext } from 'react';
import { Table } from 'react-bootstrap';
import BlockchainContext from "./Context";


function NewUser(props) {
    const users = props.users;
    const getNewUsers = props.getNewUsers;

    const blockchainContext = useContext(BlockchainContext);
    const { web3, contract, account } = blockchainContext;

    const addUser = async(e) => {
        // const response = await contract.methods.addUser(e.target.value).call({ from: account })
        // console.log(response)
        contract.methods.addUser(e.target.value).send({ from: account })
            .once('receipt', (receipt) => {
                getNewUsers();
            })
        e.preventDefault();
    }

    const displayNewUsers = () => {
        return users.map(user => {
            return (
                <tr>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.company}</td>
                    <td>{user.addr}</td>
                    <td>{user.abn}</td>
                    <td><button class="button_confirm" value={user.id} onClick={addUser}>confirm</button></td>
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
                        <th>User Name</th>
                        <th>Company</th>
                        <th>Address</th>
                        <th>ABN</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {displayNewUsers()}
                </tbody>
            </Table>
        </div>
    );
}
export default NewUser;