import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { signup } from '../../../actions/userAction';
import Loader from '../../Reusable/Loader/Loader';
import Message from '../../Reusable/Message/Message';

const SignUp = ({ setSignIn }) => {

    const dispatch = useDispatch()

    const [name, setName] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [emailOrPwdInvalid, setEmailOrPwdInvalid] = useState(false)
    const [pwdType, setPwdType] = useState(true)

    const history = useHistory()

    const userRegister = useSelector(state => state.userRegister)
    const { loading, error, userInfo } = userRegister

    const redirect = window.location.search ? window.location.search.split("=")[1] : '/'

    // Redirect the page
    useEffect(() => {
        if (userInfo) {
            window.location.replace(redirect)
        }
    }, [history, userInfo, redirect])


    // password type toggle
    const passwordToggle = () => {
        if (pwdType) {
            setPwdType(false)
        } else {
            setPwdType(true)
        }
    }

    // Handle login user
    const handleSignUpUser = (e) => {
        if (/\S+@\S+\.\S+/.test(email) && /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password)) {
            setEmailOrPwdInvalid(false)
            dispatch(signup(name, email, password))
        } else {
            setEmailOrPwdInvalid(true)
        }
        e.preventDefault()
    }

    console.log(userInfo)

    return (
        <div className="loginSignUp">
            {
                loading ?
                    <div style={{ height: "325px" }} className="loginLoader d-flex justify-content-center align-items-center">
                        <Loader />
                    </div>
                    :
                    <>
                        {
                            emailOrPwdInvalid ?
                                <Message variant="warning" message="Email Or Password is invalid. Please type valid email and password" />
                                :
                                <>
                                    {
                                        error &&
                                        <Message variant="danger" message={error} />
                                    }
                                </>
                        }
                        <h2 className="mb-4">Create Account</h2>

                        <form action="" onSubmit={handleSignUpUser}>
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="signUpFName" placeholder="Jhon Duo" onChange={(e) => {
                                    setName(e.target.value)
                                    setEmailOrPwdInvalid(false)
                                }} />
                                <label for="signUpFName">Full Name <span className="text-danger">*</span></label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="email" class="form-control" id="signInEmail" placeholder="name1232@example.com" onChange={(e) => {
                                    setEmail(e.target.value)
                                    setEmailOrPwdInvalid(false)
                                }} />
                                <label for="signInEmail">Email Address <span className="text-danger">*</span></label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type={pwdType ? "password" : "text"} class="form-control" id="signInPassword" placeholder="12sdsAR#" onChange={(e) => {
                                    setPassword(e.target.value)
                                    setEmailOrPwdInvalid(false)
                                }} />
                                <label for="signInPassword">Password <span className="text-danger">*</span></label>
                            </div>

                            <div class="form-check mb-3">
                                <input class="form-check-input" type="checkbox" id="signInPwdToggler" onClick={() => passwordToggle()} checked={pwdType ? false : true} />
                                <label class="form-check-label" for="signInPwdToggler">
                                    Show Password
                                </label>
                            </div>

                            <button type="submit" className="w-100 mb-2 btn btn-lg rounded-3 btn-primary">Create Account</button>
                        </form>
                        <div className="mb-2 text-center mt-3">
                            <span>Have an account <button onClick={() => setSignIn(true)} className="btn btn-sm btn-light">Sign In</button></span>
                        </div>
                        <hr /><br />

                        <div className="">
                            <h2 class="fs-5 fw-bold mb-3">Or use a third-party</h2>
                            <button class="w-100 py-2 mb-2 btn btn-outline-danger rounded-3">
                                <svg style={{ marginTop: "-3px" }} xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-google me-2" viewBox="0 0 16 16">
                                    <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                                </svg>
                                Sign up with Google
                            </button>
                        </div>
                    </>
            }
        </div>
    );
};

export default SignUp;