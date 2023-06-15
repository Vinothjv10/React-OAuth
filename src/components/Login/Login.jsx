import './Login.css';

import { Link, useNavigate } from "react-router-dom";
import { auth, provider} from '../../firebase';
import { signInWithPopup } from 'firebase/auth';



const Login = () => {

    const signInWithGoogle = async ()=> {
        try {
            const userCredential = await signInWithPopup(auth,provider);
            const user = userCredential.user;
            const name = user.displayName;
            const email = user.email;

            console.log('name : ',name);
            console.log('email : ',email);
            console.log('Details : ',user);


        } catch (error) {
            console.log(error);
        }
    }
    
  return (
    <div className='body'>
        <div className="wrapper">
            <div className="form-wrapper sign-in">
                <form action="">
                    <h2>Login</h2>
                    <div className="input-group">
                        <input 
                            type="text" 
                            // value={email}
                            // onChange={(e) => setEmail(e.target.value)}
                            placeholder='E-mail Address'
                            required 
                            />
                        {/* <label for="">Email</label> */}
                    </div>
                    <div className="input-group">
                        <input 
                            type="password"
                            // value={password}
                            // onChange={(e) => setPassword(e.target.value)}
                            placeholder='Password'
                            required 
                        />
                        {/* <label for="">Password</label> */}
                    </div>
                    <div className="forgot-pass">
                        <a href="#">Forgot Password?</a>
                    </div>
                    {/* <button className="btn" onClick={() => signInWithEmailAndPassword(email, password)}>Login</button> */}
                    <button className=" btn btn-google" onClick={signInWithGoogle}>Signin With Google</button>
                    <div className="sign-link">
                        <p>Don't have an account? <Link to="/signup" className="signUp-link">Sign Up</Link></p>
                    </div>
                </form>
            </div>
        </div>
    </div >
  )
}

export default Login