import { useNavigate } from "react-router-dom";
import React, { useState, useEffect, useContext } from 'react';
import BlockchainContext from "./Context";

import './custom.css';
function LoginPage(props){

    const [identity, setIdentity] = useState('');
    const [id, setId] = useState('');
    const [status, setStatus] = useState('');

    const blockchainContext = useContext(BlockchainContext);
    const { web3, contract, account } = blockchainContext;
    
    const navigate = useNavigate();

    useEffect(() => {
        getUser()
    }, [account])

    const getUser = async() => {
        const user = await contract.methods.getUser().call({ from: account });
        if(user.id!=="0"){
            setIdentity(user.identity);
            setId(user.id);
            setStatus(user.state);
        }else{
            setIdentity('');
            setId('');
            setStatus('');
        }
    }

    const handleClick = (e) => {
        if(id!==''){
            const userObj = { id: id, identity:identity };
            window.localStorage.setItem("user", JSON.stringify(userObj));
            navigate("/")
        }else{
            alert("User account does not exist")
        }
    }
    const handleSignUp = (e) => {
        navigate("/register")
    }

    return(
        <div className="container_home">
            <div className="login">
                <h2>Welcome to Medicine Tracker</h2>
                {status==='' ?  <div className = "submit"><input type="button" onClick={handleSignUp} value="SignUp"/></div> : null }
                {status==='1' ? <div className = "submit"><input type="button" onClick={handleClick} value="Go to website"/></div> : null }
                {status==='0' ? <h3>Registration in progress</h3> : null }
            </div>
        </div>
    );
}
export default LoginPage;