import { useNavigate } from "react-router-dom";
import React, { useState, useEffect, useContext } from 'react';
import BlockchainContext from "./Context";

import './custom.css';
function LoginPage(props){

    const [identity, setIdentity] = useState('');
    const [id, setId] = useState('');

    const blockchainContext = useContext(BlockchainContext);
    const { web3, contract, account } = blockchainContext;
    
    const navigate = useNavigate();

    useEffect(() => {
        getUser()
    }, [account])

    const getUser = async() => {
        const user = await contract.methods.getUser().call({ from: account });
        if(user.id!==0){
            setIdentity(user.identity);
            setId(user.id);
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
        <div className="outer_container">
            <div className="login">
                <h2>Welcome to Medicine Tracker</h2>
                
                {id==='' ? 
                    <div className = "submit">
                        <input type="button" onClick={handleSignUp} value="SignUp"/>
                    </div> : 
                    <div className = "submit">
                        <input type="button" onClick={handleClick} value="Login"/>
                    </div>
                }
                
            </div>
        </div>
    );
}
export default LoginPage;