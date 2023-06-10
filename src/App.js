import React from 'react';
import '../src/App.css';

import {auth,provider} from "./firebase"
import {signInWithPopup} from "firebase/auth"
import { useState } from 'react'


const App = () => {

  const [value, setUser] = useState(null);

  const googleLogin = () =>{
        signInWithPopup(auth,provider).then((data)=>{
            setUser(data.user.email)
            localStorage.setItem("email",data.user.email)
        })
  }

  return (
    
      <section>
         <div className='login_page'>


             <div className='btn' >
                <img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png" alt="" />
                 <button onClick={googleLogin}>Google</button>
             </div>


             <div className='btn'>
                 <img src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png" alt="" />
                 <button>FaceBook</button>
             </div>


            <div className='btn'>
                 <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" />
                 <button>Github</button>
             </div>
         </div>
        {value}
    </section>
  )
}

export default App