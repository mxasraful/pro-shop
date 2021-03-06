import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { signup } from '../../../actions/userAction';
import Loader from '../../Reusable/Loader/Loader';
import Message from '../../Reusable/Message/Message';

const SignUp = () => {

    const dispatch = useDispatch()

    const [name, setName] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [emailOrPwdInvalid, setEmailOrPwdInvalid] = useState(false)
    const [pwdType, setPwdType] = useState(true)

    const history = useHistory()

    const userLogin = useSelector(state => state.userLogin)
    const { loading, error, userInfo } = userLogin

    const redirect = window.location.search ? window.location.search.split("=")[1] : '/'

    // Redirect the page
    useEffect(() => {
        if (userInfo) {
            history.push(redirect)
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

    return (
        <form onSubmit={handleSignUpUser} className="loginSignUp">
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
                        <div className="text-center">
                            <h5 className="mb-4">Create Account</h5>
                        </div>
                        <div className="mb-2">
                            <label htmlFor="signUpFName">Full Name <span className="text-danger">*</span></label>
                            <input id="signUpFName" type="text" className="form-control form-control-sm" onChange={(e) => {
                                setName(e.target.value)
                                setEmailOrPwdInvalid(false)
                            }} required />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="signUpEmail">Email <span className="text-danger">*</span></label>
                            <input id="signUpEmail" type="email" className="form-control form-control-sm" onChange={(e) => {
                                setEmail(e.target.value)
                                setEmailOrPwdInvalid(false)
                            }} required />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="signUpPassword">Password <span className="text-danger">*</span></label>
                            <div className="d-flex">
                                <input id="signUpPassword" type={pwdType ? "password" : "text"} className="form-control form-control-sm inputPassword" onChange={(e) => {
                                    setPassword(e.target.value)
                                    setEmailOrPwdInvalid(false)
                                }} required />
                                <button type="button" onClick={passwordToggle} className="btn btn-sm btn-outline-secondary passwordToggleBtn">
                                    {
                                        pwdType ?
                                            <svg style={{ marginTop: "-3px" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash-fill" viewBox="0 0 16 16">
                                                <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z" />
                                                <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z" />
                                            </svg>
                                            :
                                            <svg style={{ marginTop: "-3px" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                                                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                                                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                                            </svg>
                                    }
                                </button>
                            </div>
                        </div>
                        <div className="pt-4 d-flex flex-row-reverse mb-4">
                            <button type="submit" className="btn btn-outline-danger btn-sm px-4">Sign Up</button>
                        </div>
                    </>
            }
        </form>
    );
};

export default SignUp;