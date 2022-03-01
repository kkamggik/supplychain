import React, { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import BlockchainContext from "./Context";

function RegisterPage(props){
    const [first,setFirst] = useState('');
    const [last, setLast] = useState('');
    const [company, setCompany] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [region, setRegion] = useState('');
    const [postcode, setPostcode] = useState('');
    const [country, setCountry] = useState('');
    const [ABN, setABN] = useState('');
    const [identity, setIdentity] = useState('customer');

    const blockchainContext = useContext(BlockchainContext);
    const { web3, contract, account } = blockchainContext;

    const navigate = useNavigate();

    const handleClick = (e) => {
        if(first==='' || last==='' || address==='' || region==='' || postcode==='' || country===''){
            alert("Fill in all required fields.")
        }else{
            const name = first+" "+last;
            const full_address = `${address}, ${region}, ${country} (${postcode})`;
            contract.methods.register(name, company, phone, full_address, ABN, identity).send({ from: account })
            .once('receipt', (receipt) => {
                navigate("/login");
            })
        }
    }
    return(
        <div class="outer_container">
            <div class="signup">
                <h2>Register</h2>
                <div class="signup_input_container">
                    <label>
                        <span>First Name</span>
                        {first==='' ? <input type="text" id="first" placeholder="First Name" value={first} onChange={(e) => setFirst(e.target.value)} style={{border: "1px solid red"}}/> 
                        : <input type="text" id="first" placeholder="First Name" value={first} onChange={(e) => setFirst(e.target.value)}/>}  
                    </label>
                </div>
                <div class="signup_input_container">
                    <label>
                        <span>Last Name</span>
                        {last==='' ? <input type="text" id="last" placeholder="Last Name" value={last} onChange={(e) => setLast(e.target.value)} style={{border: "1px solid red"}}/> 
                        : <input type="text" id="last" placeholder="Last Name" value={last} onChange={(e) => setLast(e.target.value)}/>}  
                    </label>
                </div>
                <div class="signup_input_container">
                    <label>
                        <span>Phone</span>
                        <input type="tel" id="phone" placeholder="111-222-3333" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                    </label>
                </div>
                <div class="signup_input_container">
                    <label>
                        <span>Company</span>
                        <input type="text" id="company" placeholder="Company" value={company} onChange={(e) => setCompany(e.target.value)}/>
                    </label>
                </div>
                <div class="signup_input_container">
                    <label>
                        <span>Address</span>
                        {address==='' ? <input type="text" id="address" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} style={{border: "1px solid red"}}/>
                        : <input type="text" id="address" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)}/>}  
                    </label>
                </div>
                <div class="signup_input_container">
                    <label>
                        <span>Region</span>
                        {region==='' ? <input type="text" id="region" placeholder="Region" value={region} onChange={(e) => setRegion(e.target.value)} style={{border: "1px solid red"}}/> 
                        : <input type="text" id="region" placeholder="Region" value={region} onChange={(e) => setRegion(e.target.value)}/>}  
                    </label>
                </div>
                <div class="signup_input_container">
                    <label>
                        <span>Postcode</span>
                        {postcode==='' ? <input type="text" id="postcode" placeholder="Postcode" value={postcode} onChange={(e) => setPostcode(e.target.value)} style={{border: "1px solid red"}}/> 
                        : <input type="text" id="postcode" placeholder="Postcode" value={postcode} onChange={(e) => setPostcode(e.target.value)}/>}  
                    </label>
                </div>
                <div class="signup_input_container">
                    <label>
                        <span>Country</span>
                        {country==='' ? <input type="text" id="country" placeholder="Country" value={country} onChange={(e) => setCountry(e.target.value)} style={{border: "1px solid red"}}/> 
                        : <input type="text" id="country" placeholder="Country" value={country} onChange={(e) => setCountry(e.target.value)}/>}  
                    </label>
                </div>
                <div class="signup_input_container">
                    <label>
                        <span>ABN</span>
                        <input type="text" id="abn" placeholder="Australian Business Number" value={ABN} onChange={(e) => setABN(e.target.value)}/>
                    </label>
                </div>
                <div class="signup_input_container">
                    <label>
                        <span>Identity</span>
                        <select class="select_container" value={identity} onChange={(e) => setIdentity(e.target.value)}>
                        <option selected value="customer">Customer</option>
                        <option value="supplier">Supplier</option>
                        <option value="manufacturer">Manufacturer</option>
                    </select>
                    </label>
                </div>
                <div class="options">
                    <div class = "log_in">
                        <Link to="/login">Already have an account?</Link>
                    </div>
                </div>
                <div class = "submit">
                    <input type="button" onClick={handleClick} value="Sign Up"/>
                </div>
            </div>
        </div>
    );
}
export default RegisterPage;