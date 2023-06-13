import './Login.css';
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, signInWithEmailAndPassword, signInWithGoogle } from '../../firebase';
import { useAuthState } from "react-firebase-hooks/auth";  
// import signup from '../Signup/Signup';


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if(loading)
        {
            return;
        }
        if(user) navigate("/dashboard");
    },[user, loading]);
  return (
    <body>
        <div class="wrapper">
            <div class="form-wrapper sign-in">
                <form action="">
                    <h2>Login</h2>
                    <div class="input-group">
                        <input 
                            type="text" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='E-mail Address'
                            required 
                            />
                        {/* <label for="">Email</label> */}
                    </div>
                    <div class="input-group">
                        <input 
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder='Password'
                            required 
                        />
                        {/* <label for="">Password</label> */}
                    </div>
                    <div class="forgot-pass">
                        <a href="#">Forgot Password?</a>
                    </div>
                    <button class="btn" onClick={() => signInWithEmailAndPassword(email, password)}>Login</button>
                    <button class=" btn btn-google" onClick={signInWithGoogle}>Signin With Google</button>
                    <div class="sign-link">
                        <p>Don't have an account? <Link to="/signup" class="signUp-link">Sign Up</Link></p>
                    </div>
                </form>
            </div>
        </div>
    </body>
  )
}

export default Login