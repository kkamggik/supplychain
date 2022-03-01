import React, { useState, useEffect, useContext } from 'react';
import NavbarPage from './NavbarPage';
import User from './NewUser';
import BlockchainContext from "./Context";

function UserPage() {
    const blockchainContext = useContext(BlockchainContext);
    const { web3, contract, account } = blockchainContext;

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getNewUsers()
    }, [])

    async function getNewUsers() {
        // const user = await contract.methods.newUsers(1).call();
        // console.log(user)
        setUsers([]);
        const users = await contract.methods.newRegistration().call();   
        setUsers(users);
    }

    return (
        <div className="outer_container">
            <div className="home">
                <NavbarPage />
                <div className="user_container">
                    <h3>Manage Users</h3>
                    <br/>
                    <User users={users} getNewUsers={getNewUsers}/>
                </div>
            </div>
        </div>
    );
}
export default UserPage;

