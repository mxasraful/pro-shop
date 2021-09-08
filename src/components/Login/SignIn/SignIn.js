import React, { useEffect, useState } from 'react';
import Message from '../../Reusable/Message/Message';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { login } from '../../../actions/userAction';

const SignIn = () => {

    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [pwdType, setPwdType] = useState(true)

    const history = useHistory()
    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const { error, userInfo } = userLogin

    const redirect = window.location.search ? window.location.search.split("=")[1] : '/'

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
    const handleLoginUser = (e) => {
        dispatch(login(email, password))

        e.preventDefault()
        // e.target.reset()
    }

    return (
        <form onSubmit={handleLoginUser} className="loginSignIn">
            <div className="signInError">
                {
                    error &&
                    <Message variant='danger' message={error}></Message>
                }
            </div>
            <div className="text-center">
                <h5 className="mb-4">Sign In</h5>
            </div>
            <div className="mb-2">
                <label htmlFor="signInEmail">Email <span className="text-danger">*</span></label>
                <input id="signInEmail" type="email" className="form-control form-control-sm" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="mb-2">
                <label htmlFor="signInPassword">Password <span className="text-danger">*</span></label>
                <div className="d-flex">
                    <input id="signInPassword" type={pwdType ? "password" : "text"} className="form-control form-control-sm inputPassword" onChange={(e) => setPassword(e.target.value)} />
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
            <div className="pt-3 d-flex flex-row-reverse mb-3">
                <button type="submit" className="btn btn-outline-danger btn-sm px-4">Sign In</button>
            </div>
            <div className="mb-2 mt-4">
                <button type="button" className="btn btn-outline-secondary btn-sm w-100">
                    <svg style={{ marginTop: "-3px" }} xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-google me-2" viewBox="0 0 16 16">
                        <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                    </svg>
                    <span>Continue With Google</span>
                </button>
            </div>
            <div className="mb-2 text-center">
                <div style={{ cursor: "pointer" }} className="text-info">Forgot Password</div>
            </div>
        </form>
    );
};

export default SignIn;