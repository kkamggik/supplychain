import React, { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import BlockchainContext from "./Context";
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';


function RegisterPage(props){
    const [first,setFirst] = useState('');
    const [last, setLast] = useState('');
    const [company, setCompany] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [ABN, setABN] = useState('');
    const [identity, setIdentity] = useState('customer');

    const blockchainContext = useContext(BlockchainContext);
    const { web3, contract, account } = blockchainContext;

    const navigate = useNavigate();

    const handleClick = (e) => {
        if(first==='' || last==='' || address===''){
            alert("Fill in all required fields.")
        }else{
            contract.methods.register(first, last , company, phone, address.label, ABN, identity).send({ from: account })
            .once('receipt', (receipt) => {
                navigate("/login");
            })
        }
    }
    return(
        <div class="container_home">
            <div class="signup">
                <h2>Register</h2>
                <div className="setting_input">
                    <label>
                        <span>First Name</span>
                        {first==='' ? <input type="text" id="first" placeholder="First Name" value={first} onChange={(e) => setFirst(e.target.value)} style={{border: "1px solid red"}}/> 
                        : <input type="text" id="first" placeholder="First Name" value={first} onChange={(e) => setFirst(e.target.value)}/>}  
                    </label>
                    <label>
                        <span>Last Name</span>
                        {last==='' ? <input type="text" id="last" placeholder="Last Name" value={last} onChange={(e) => setLast(e.target.value)} style={{border: "1px solid red"}}/> 
                        : <input type="text" id="last" placeholder="Last Name" value={last} onChange={(e) => setLast(e.target.value)}/>}  
                    </label>
                </div>
                <div className="setting_input">
                    <label>
                        <span>Phone</span>
                        <input type="tel" id="phone" placeholder="111-222-3333" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                    </label>
                    <label>
                        <span>Company</span>
                        <input type="text" id="company" placeholder="Company" value={company} onChange={(e) => setCompany(e.target.value)}/>
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
                        <input type="text" id="abn" placeholder="Australian Business Number" value={ABN} onChange={(e) => setABN(e.target.value)}/>
                    </label>
                    <label>
                        <span>Identity</span>
                        <select className="select_container" value={identity} onChange={(e) => setIdentity(e.target.value)}>
                        <option selected value="customer">Customer</option>
                        <option value="supplier">Supplier</option>
                        <option value="manufacturer">Manufacturer</option>
                    </select>
                    </label>
                </div>
                <div className="options">
                    <div className = "log_in">
                        <Link to="/login">Already have an account?</Link>
                    </div>
                </div>
                <div className = "submit">
                    <input type="button" onClick={handleClick} value="Sign Up"/>
                </div>
            </div>
        </div>
    );
}
export default RegisterPage;