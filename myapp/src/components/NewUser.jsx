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
    const removeUser = async(e) => {
        // const response = await contract.methods.addUser(e.target.value).call({ from: account })
        // console.log(response)
        contract.methods.deleteUser(e.target.value).send({ from: account })
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
                    <td>{user.first}, {user.last}</td>
                    <td>{user.company}</td>
                    <td>{user.addr}</td>
                    <td>{user.abn}</td>
                    <td>{
                        user.state==="0"?
                        <button class="button_confirm" value={user.id} onClick={addUser}>Confirm</button> :
                        <button class="button_discard" value={user.id} onClick={removeUser} disabled={true ? user.identity==="1": false}>Remove</button> 
                    }
                    </td>
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