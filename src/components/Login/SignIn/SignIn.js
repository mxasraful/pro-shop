import React, { useEffect, useState } from 'react';
import Message from '../../Reusable/Message/Message';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { login } from '../../../actions/userAction';
import Loader from '../../Reusable/Loader/Loader';

const SignIn = ({ setSignIn }) => {

    const dispatch = useDispatch()

    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [pwdType, setPwdType] = useState(true)

    const history = useHistory()

    const userLogin = useSelector(state => state.userLogin)
    const { loading, error, userInfo } = userLogin

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
    const handleLoginUser = (e) => {
        dispatch(login(email, password))

        e.preventDefault()
        // e.target.reset()
    }

    return (
        <form onSubmit={handleLoginUser} className="loginSignIn">
            {
                loading ?
                    <div style={{ height: "325px" }} className="loginLoader d-flex justify-content-center align-items-center">
                        <Loader />
                    </div>
                    :
                    <>
                        <div className="signInError">
                            {
                                error &&
                                <Message variant='danger' message={error}></Message>
                            }
                        </div>
                        <h2 className="mb-4">Sign In</h2>
                        <div class="form-floating mb-3">
                            <input type="email" class="form-control" id="signInEmail" placeholder="name1232@example.com" onChange={(e) => setEmail(e.target.value)} />
                            <label for="signInEmail">Email address <span className="text-danger">*</span></label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type={pwdType ? "password" : "text"} class="form-control" id="signInPassword" placeholder="12sdsAR#" onChange={(e) => setPassword(e.target.value)} />
                            <label for="signInPassword">Password <span className="text-danger">*</span></label>
                        </div>

                        <div class="form-check mb-3">
                            <input class="form-check-input" type="checkbox" id="signInPwdToggler" onClick={() => passwordToggle()} checked={pwdType? false : true}/>
                            <label class="form-check-label" for="signInPwdToggler">
                                Show Password
                            </label>
                        </div>

                        <button type="submit" className="w-100 mb-2 btn btn-lg rounded-3 btn-primary">Sign In</button>
                        <div className="mb-2 text-center mt-3">
                            <span>Don't have an account <button onClick={() => setSignIn(false) } className="btn btn-sm btn-light">Sign Up</button></span>
                        </div>
                        <div className="mb-2 text-center mt-3">
                            <div style={{ cursor: "pointer" }} className="text-info">Forgot Password</div>
                        </div>
                        <hr /><br />

                        <div className="">
                            <h2 class="fs-5 fw-bold mb-3">Or use a third-party</h2>
                            <button class="w-100 py-2 mb-2 btn btn-outline-danger rounded-3">
                                <svg style={{ marginTop: "-3px" }} xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-google me-2" viewBox="0 0 16 16">
                                    <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                                </svg>
                                Sign in with Google
                            </button>
                            {/* <button class="w-100 py-2 mb-2 btn btn-outline-primary rounded-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook me-2" viewBox="0 0 16 16">
                                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                </svg>
                                Sign in with Facebook
                            </button> */}
                            {/* <button class="w-100 py-2 mb-2 btn btn-outline-secondary rounded-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github me-2" viewBox="0 0 16 16">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                </svg>
                                Sign in with GitHub
                            </button> */}
                        </div>
                    </>
            }
        </form>
    );
};

export default SignIn;