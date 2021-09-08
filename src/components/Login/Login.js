import React, { useState } from 'react';
import "./Login.css"
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';

const Login = () => {

    const [signIn, setSignIn] = useState(true)

    return (
        <div className="loginPage">
            <div className="container">
                <br /><br />
                <div style={{ margin: "0 auto" }} className="col-3 card">
                    <div className="loginPageConverter">
                        <button onClick={() => setSignIn(true)} className={signIn ? "btn btn-outline-info loginSignInBtn loginActiveBtn" : "btn btn-outline-info loginSignInBtn"}>Sign In</button>
                        <button onClick={() => setSignIn(false)} className={signIn ? "btn btn-outline-info loginSignUpBtn " : "btn btn-outline-info loginSignUpBtn loginActiveBtn"}>Sign Up</button>
                    </div>
                    <div className="card-body">
                        {
                            signIn ?
                                <SignIn />
                                :
                                <SignUp />
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;