import { useNavigate } from "react-router-dom";
import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import BlockchainContext from "./Context";

import './custom.css';
function LoginPage(props){

    const [state, setState] = useState('');

    const blockchainContext = useContext(BlockchainContext);
    const { web3, contract, account } = blockchainContext;
    
    const navigate = useNavigate();

    useEffect(() => {
        console.log("account changed")
        getUser()
    }, [account])

    const getUser = async() => {
        const user = await contract.methods.getUser().call({ from: account });
        if(user.id!=0) setState(user.identity)
    }

    const handleClick = (e) => {
        if(state!=0){
            const userObj = { name: state };
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
        <div class="outer_container">
            <div class="login">
                <h2>Welcome to Medicine Tracker</h2>
                
                {state==0 ? 
                    <div class = "submit">
                        <input type="button" onClick={handleSignUp} value="SignUp"/>
                    </div> : 
                    <div class = "submit">
                        <input type="button" onClick={handleClick} value="Login"/>
                    </div>
                }
                
            </div>
        </div>
    );
}
export default LoginPage;