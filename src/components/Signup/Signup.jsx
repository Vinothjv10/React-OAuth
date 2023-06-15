import React, {  useState } from 'react';
import { Link } from 'react-router-dom';
import {
    auth, provider,
} from '../../firebase';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';


const Signin = () => {
    const [emailSignUp, setEmailSignUp] = useState('')
     const [passwordSignUp, setPasswordSignUp] = useState('')

    const signUp = async () => {
        try {
            const email = emailSignUp;
               const password = passwordSignUp;

               const userCredential = await createUserWithEmailAndPassword(auth, email, password)
               const user = userCredential.user;

               setEmailSignUp("");
               setPasswordSignUp("");

               console.log(userCredential)

            alert("Register Successfully");

        } catch (error) {
            const msg = error;
            alert(msg);
        }
    }

    const signInWithGoogle = async ()=> {
        try {
            const userCredential = await signInWithPopup(auth,provider);
            console.log('userCredential : ', userCredential)
        } catch (error) {
            console.log(error);
        }
    }
   
  return (
    <div className='body'>
        <div className="wrapper">
            <div className="form-wrapper sign-up">
                <form action="">
                    <h2>Sign Up</h2>
                    {/* <div className="input-group">
                        <input 
                            type="text" 
                            placeholder='Username'
                            // value={name}
                            // onChange={(e) => setName(e.target.value)}
                            required 
                        />
                        <label for="">Username</label>
                    </div> */}
                    <div className="input-group">
                        <input
                            type='email' 
                            placeholder='Email' 
                            value={emailSignUp}
                             onChange={e => setEmailSignUp(e.target.value)} 
                        />
                        {/* <label for="">Email</label> */}
                    </div>
                    <div className="input-group">
                    <input 
                        type='password' 
                        placeholder='Password'  
                        value={passwordSignUp} 
                        onChange={e => setPasswordSignUp(e.target.value)} 
                    />
                        {/* <label for="">Password</label> */}
                    </div>
                    <button className="btn" onClick={signUp}>Sign Up</button>
                    <button className=" btn btn-google" onClick={signInWithGoogle}>Signin With Google</button>
                    <div className="sign-link">
                        <p>Already have an account? <Link to="/" className="signIn-link">Sign In</Link></p>
                    </div>
                </form>
            </div>

        </div>
    </div>
  )
}

export default Signin