import React from 'react'
import '../components/login.css'

const login = () => {
  return (
    <section>
        <div className='login_page'>


            <div className='btn'>
                <img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png" alt="" />
                <button >Google</button>
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

        <h1>Email</h1>

    </section>
  )
}

export default login