import React from "react";
import { useNavigate } from "react-router-dom";
import './RegisterPage.css';
function RegisterPage(props){
    const [email,setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirm, setConfirm] = React.useState('');
    const [identity, setIdentity] = React.useState('customer');
    const navigate = useNavigate();

    const handleClick = (e) => {
        navigate("/login");
    }
    return(
        <div class="register_container">
            <div class="register">
                <h2>Register</h2>
                <div class="email_container">
                    <h5>Email</h5>
                    <input type="text" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div class="password_container">
                    <h5>Password</h5>
                    <input type="password" id="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div class="confirm_container">
                    <h5>Confirm Password</h5>
                    <input type="password" id="password" placeholder="confirm password" value={confirm} onChange={(e) => setConfirm(e.target.value)}/>
                </div>
                <div class="identity_container">
                    <h5>Identity</h5>
                    <select class="select_container" value={identity} onChange={(e) => setIdentity(e.target.value)}>
                        <option selected value="customer">Customer</option>
                        <option value="pharmacist">Pharmacist</option>
                        <option value="manufacturer">Manufacturer</option>
                    </select>
                </div>
                <div class="options">
                    <div class = "log_in">
                        <a href = "/login">Already have an account?</a>
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