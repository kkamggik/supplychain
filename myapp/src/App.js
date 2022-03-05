import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import RegisterPage from './components/RegisterPage';
import Medicine from './components/DetailPage';
import Scan from './components/ScanPage';
import UserRegister from './components/UserPage';
import TransitPage from './components/TransitPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import BlockchainContext from "./components/Context";
import Web3 from 'web3/dist/web3.min.js';
import { SUPPLY_CHAIN_ABI, SUPPLY_CHAIN_ADDRESS } from './config';

function App() {
  const [account, setAccount] = useState(null);
  const [contract, setContract] = useState(null);
  const [web3, setWeb3] = useState(null);

  useEffect(() => {
    async function loadBlockchainData() {
        const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
        setWeb3(web3);
        const accounts = await web3.eth.getAccounts();
        setAccount(accounts[0]);
        const supplychain = new web3.eth.Contract(SUPPLY_CHAIN_ABI, SUPPLY_CHAIN_ADDRESS)
        setContract(supplychain);
    }
    loadBlockchainData();
  }, []);

  useEffect(() => {
    async function listenMMAccount() {
      window.ethereum.on("accountsChanged", async function() {
        // Time to reload your interface with accounts[0]!
        const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
        const accounts = await web3.eth.getAccounts();
        // accounts = await web3.eth.getAccounts();
        setAccount(accounts[0]);
        window.location.href = 'http://127.0.0.1:3000/login';
      });
    }
    listenMMAccount();
  }, []);

  if (web3==null || account==null || contract==null){
    return(
      <div className="outer_container">
        connecting...
      </div>
    )
  }
  return (
    <BlockchainContext.Provider value={{web3, account, contract}}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/medicine" element={<Medicine/>} />
        <Route path="/scan" element={<Scan/>} />
        <Route path="/users" element={<UserRegister/>} />
        <Route path="/transit" element={<TransitPage/>} />
      </Routes>
    </BrowserRouter>
    </BlockchainContext.Provider> 
  );
}
export default App;
