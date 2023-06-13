import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import {
    auth,
    registerWithEmailAndPassword,
    signInWithGoogle,
} from '../../firebase';
import { useNavigate } from 'react-router-dom';


const Signin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    const register = () => {
        if(!name) alert("Please Enter Name ");
        registerWithEmailAndPassword(name, email, password);
    };

    useEffect(() =>{
        if(loading) return;
        if(user) navigate("/dashboard");
    }, [user, loading]);

  return (
    <body>
        <div class="wrapper">
            <div class="form-wrapper sign-up">
                <form action="">
                    <h2>Sign Up</h2>
                    <div class="input-group">
                        <input 
                            type="text" 
                            placeholder='Username'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required 
                        />
                        {/* <label for="">Username</label> */}
                    </div>
                    <div class="input-group">
                        <input
                            type="email"
                            placeholder='Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required 
                        />
                        {/* <label for="">Email</label> */}
                    </div>
                    <div class="input-group">
                        <input 
                            type="password" 
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required 
                        />
                        {/* <label for="">Password</label> */}
                    </div>
                    <button class="btn" onClick={register}>Sign Up</button>
                    <button class=" btn btn-google" onClick={signInWithGoogle}>Signin With Google</button>
                    <div class="sign-link">
                        <p>Already have an account? <Link to="/" class="signIn-link">Sign In</Link></p>
                    </div>
                </form>
            </div>

        </div>
    </body>
  )
}

export default Signin