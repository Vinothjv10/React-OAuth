import React from 'react';

const Signin = () => {
  return (
    <body>
        <div class="wrapper">
            <div class="form-wrapper sign-up">
                <form action="">
                    <h2>Sign Up</h2>
                    <div class="input-group">
                        <input type="text" required />
                        <label for="">Username</label>
                    </div>
                    <div class="input-group">
                        <input type="email" required />
                        <label for="">Email</label>
                    </div>
                    <div class="input-group">
                        <input type="password" required />
                        <label for="">Password</label>
                    </div>
                    <button type="submit" class="btn">Sign Up</button>
                    <div class="sign-link">
                        <p>Already have an account? <a href="#" class="signIn-link">Sign In</a></p>
                    </div>
                </form>
            </div>

        </div>
    </body>
  )
}

export default Signin