import React from "react";
import { useNavigate } from "react-router-dom";
import './LoginPage.css';
function LoginPage(props){
    const [email,setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [identity, setIdentity] = React.useState('customer');
    const navigate = useNavigate();

    const handleClick = (e) => {
        navigate("/");
    }
    return(
        <div class="login_container">
            <div class="login">
                <h2>Login</h2>
                <div class="email_container">
                    <h4>Email</h4>
                    <input type="text" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div class="password_container">
                    <h4>Password</h4>
                    <input type="password" id="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div class="identity_container">
                    <h4>Identity</h4>
                    <select class="select_container" value={identity} onChange={(e) => setIdentity(e.target.value)}>
                        <option selected value="customer">Customer</option>
                        <option value="pharmacist">Pharmacist</option>
                        <option value="manufacturer">Manufacturer</option>
                    </select>
                </div>
                <div class="options">
                    <div class = "sign_up">
                        <a href = "/">Sign Up</a>
                    </div>
                    <br/>
                    <div class = "forget_pw">
                        <a href = "/">Forgot Password?</a>
                    </div>
                </div>
                <div class = "submit">
                    <input type="button" onClick={handleClick} value="Login"/>
                </div>
            </div>
        </div>
    );
}
export default LoginPage;