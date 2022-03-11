import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import NavbarPage from './NavbarPage';
import BlockchainContext from "./Context";

function Settings(props) {
    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');
    const [company, setCompany] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [region, setRegion] = useState('');
    const [postcode, setPostcode] = useState('');
    const [country, setCountry] = useState('');
    const [ABN, setABN] = useState('');
    const [identity, setIdentity] = useState('customer');
    const [user, setUser] = useState(null);

    const blockchainContext = useContext(BlockchainContext);
    const { web3, contract, account } = blockchainContext;

    const navigate = useNavigate();

    useEffect(() => {
        getUser()
    }, [account])

    const getUser = async() => {
        const info = await contract.methods.getUser().call({ from: account });
        setUser(info);
        setABN(info.abn);
        if (info.identity==="2") setIdentity('manufacturer')
        else if (info.identity==='3') setIdentity('supplier')
        else if (info.identity==='4') setIdentity('customer')
    }

    const handleClick = (e) => {
        if (first === '' || last === '' || address === '' || region === '' || postcode === '' || country === '') {
            alert("Fill in all required fields.")
        } else {
            const name = first + " " + last;
            const full_address = `${address}, ${region}, ${country} (${postcode})`;
            contract.methods.register(name, company, phone, full_address, ABN, identity).send({ from: account })
                .once('receipt', (receipt) => {
                    navigate("/");
                })
        }
    }

    return (
        <div className="container_outer">
            <NavbarPage />
            <div className="main">
                <div className="setting">
                    <h2>Edit profile</h2>
                    <div className="signup_input_container">
                        <label>
                            <span>First Name</span>
                            {first === '' ? <input type="text" id="first" placeholder="First Name" value={first} onChange={(e) => setFirst(e.target.value)} style={{ border: "1px solid red" }} />
                                : <input type="text" id="first" placeholder="First Name" value={first} onChange={(e) => setFirst(e.target.value)} />}
                        </label>
                    </div>
                    <div className="signup_input_container">
                        <label>
                            <span>Last Name</span>
                            {last === '' ? <input type="text" id="last" placeholder="Last Name" value={last} onChange={(e) => setLast(e.target.value)} style={{ border: "1px solid red" }} />
                                : <input type="text" id="last" placeholder="Last Name" value={last} onChange={(e) => setLast(e.target.value)} />}
                        </label>
                    </div>
                    <div className="signup_input_container">
                        <label>
                            <span>Phone</span>
                            <input type="tel" id="phone" placeholder="111-222-3333" value={phone} onChange={(e) => setPhone(e.target.value)} />
                        </label>
                    </div>
                    <div className="signup_input_container">
                        <label>
                            <span>Company</span>
                            <input type="text" id="company" placeholder="Company" value={company} onChange={(e) => setCompany(e.target.value)} />
                        </label>
                    </div>
                    <div className="signup_input_container">
                        <label>
                            <span>Address</span>
                            {address === '' ? <input type="text" id="address" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} style={{ border: "1px solid red" }} />
                                : <input type="text" id="address" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />}
                        </label>
                    </div>
                    <div className="signup_input_container">
                        <label>
                            <span>Region</span>
                            {region === '' ? <input type="text" id="region" placeholder="Region" value={region} onChange={(e) => setRegion(e.target.value)} style={{ border: "1px solid red" }} />
                                : <input type="text" id="region" placeholder="Region" value={region} onChange={(e) => setRegion(e.target.value)} />}
                        </label>
                    </div>
                    <div className="signup_input_container">
                        <label>
                            <span>Postcode</span>
                            {postcode === '' ? <input type="text" id="postcode" placeholder="Postcode" value={postcode} onChange={(e) => setPostcode(e.target.value)} style={{ border: "1px solid red" }} />
                                : <input type="text" id="postcode" placeholder="Postcode" value={postcode} onChange={(e) => setPostcode(e.target.value)} />}
                        </label>
                    </div>
                    <div className="signup_input_container">
                        <label>
                            <span>Country</span>
                            {country === '' ? <input type="text" id="country" placeholder="Country" value={country} onChange={(e) => setCountry(e.target.value)} style={{ border: "1px solid red" }} />
                                : <input type="text" id="country" placeholder="Country" value={country} onChange={(e) => setCountry(e.target.value)} />}
                        </label>
                    </div>
                    <div className="signup_input_container">
                        <label>
                            <span>ABN</span>
                            <input type="text" id="abn" value={ABN} readOnly />
                        </label>
                    </div>
                    <div className="signup_input_container">
                        <label>
                            <span>Identity</span>
                            <input type="text" id="identity" value={identity} readOnly />
                        </label>
                    </div>
                    <div className = "submit">
                        <input type="button" onClick={handleClick} value="Submit"/>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Settings;