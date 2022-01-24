import React from "react";
import './LoginPage.css';
function LoginPage(props){
    const [email,setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const handleClick = () => {
        alert("email: "+email+" password: "+password);
        setEmail('');
        setPassword('');
    }
    return(
        <div class="container">
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
                <div class="options">
                    <div class = "sign_up">
                        <a href = "">Sign Up</a>
                    </div>
                    <div class = "forget_pw">
                        <a href = "">Forgot Password?</a>
                    </div>
                </div>
                <div class = "submit">
                    <input type="button" onClick={handleClick} value="로그인"/>
                </div>
            </div>
        </div>
    );
}
export default LoginPage;