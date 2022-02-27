import React, {useState} from 'react';
import {ethers} from 'ethers';
function WalletCard(){
    const [errorMessage, setErrorMessage] = useState(null);
    const [defaultAccount, setDefaultAccount] = useState(null);
    const [userBalance, setUserBalance] = useState(null);

    const connectionWalletHandler = () => {
        if (window.ethereum){
            // metamask is here I think...
            window.ethereum.request({method: 'eth_requestAccounts'})
            .then(result => {
                // grap the first account among many accounts
                accountChangeHandler(result[0]);
            })    
        }else{
            // user probably does not have a metamask installed
            setErrorMessage("Install Metamask please")
        }
    }

    const accountChangeHandler = (newAccount) => {
        setDefaultAccount(newAccount);
        getUserBalance(newAccount.toString());
    }

    const getUserBalance = (address) => {
        window.ethereum.request({method: 'eth_getBalance', params: [address, 'latest']})
        .then(balance => {
            setUserBalance(ethers.utils.formatEther(balance));
        })
    }

    window.ethereum.on('accountChanged', accountChangeHandler)

    return(
        <div className="walletCard">
            <h4> "Connection to Metamask using window.ethereum methods"</h4>
            <button onClick={connectionWalletHandler}>Connect Wallet</button>
            <div className="accountDisplay">
                <h3>Current Account: {defaultAccount}</h3>
            </div>
            <div className="balanceDisplay">
                <h3>Current Balance: {userBalance}</h3>
            </div>
            {errorMessage}
        </div>
    )
}
export default WalletCard;