import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import NavbarPage from './NavbarPage';
import BlockchainContext from "./Context";
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';


function Settings(props) {
    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');
    const [company, setCompany] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [ABN, setABN] = useState('');
    const [identity, setIdentity] = useState('customer');
    const [user, setUser] = useState(null);

    const blockchainContext = useContext(BlockchainContext);
    const { web3, contract, account } = blockchainContext;

    const navigate = useNavigate();

    useEffect(() => {
        getUser()
    }, [account])

    const getUser = async () => {
        const info = await contract.methods.getUser().call({ from: account });
        setUser(info);
        setABN(info.abn);
        if (info.identity === "2") setIdentity('manufacturer')
        else if (info.identity === '3') setIdentity('supplier')
        else if (info.identity === '4') setIdentity('customer')
    }

    const handleClick = (e) => {
        if (first === '' || last === '' || address === '') {
            alert("Fill in all required fields.")
        } else {
            const name = first + " " + last;
            contract.methods.register(name, company, phone, address.label, ABN, identity).send({ from: account })
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
                    <div className="setting_input">
                        <label>
                            <span>First Name</span>
                            {first === '' ? <input type="text" id="first" placeholder="First Name" value={first} onChange={(e) => setFirst(e.target.value)} style={{ border: "1px solid red" }} />
                                : <input type="text" id="first" placeholder="First Name" value={first} onChange={(e) => setFirst(e.target.value)} />}
                        </label>
                        <label>
                            <span>Last Name</span>
                            {last === '' ? <input type="text" id="last" placeholder="Last Name" value={last} onChange={(e) => setLast(e.target.value)} style={{ border: "1px solid red" }} />
                                : <input type="text" id="last" placeholder="Last Name" value={last} onChange={(e) => setLast(e.target.value)} />}
                        </label>
                    </div>
                    <div className="setting_input">
                        <label>
                            <span>Phone</span>
                            <input type="tel" id="phone" placeholder="111-222-3333" value={phone} onChange={(e) => setPhone(e.target.value)} />
                        </label>
                        <label>
                            <span>Company</span>
                            <input type="text" id="company" placeholder="Company" value={company} onChange={(e) => setCompany(e.target.value)} />
                        </label>
                    </div>
                    <div className="setting_input">
                        <label style={{width: "88%" }}>
                            <span>Address</span>
                            <GooglePlacesAutocomplete
                            apiKey="AIzaSyAJMNRK_il0FStU0WGKZEoYUWb3p6kP5k4"
                            selectProps={{ address, onChange: setAddress }}
                            />
                        </label>
                    </div>
                    <div className="setting_input">
                        <label>
                            <span>ABN</span>
                            <input type="text" id="abn" value={ABN} readOnly />
                        </label>
                        <label>
                            <span>Identity</span>
                            <input type="text" id="identity" value={identity} readOnly />
                        </label>
                    </div>
                    <div className="submit">
                        <input type="button" onClick={handleClick} value="Submit" />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Settings;