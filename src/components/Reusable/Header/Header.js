import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../../actions/userAction';
import './Header.css'

const Header = () => {

    const dispatch = useDispatch()

    const { userInfo } = useSelector(state => state.userLogin)

    // Logout handler
    const logoutHandler = () => {
        dispatch(logout())
    }

    return (
        <div className="headerComp">
            <nav class="navbar navbar-expand-lg navbar-dark text-light bg-secondary py-4">
                <div class="container">
                    <Link class="navbar-brand" to="/">
                        <svg class="b6ax4al1 me-1" style={{ marginTop: "-5px" }} viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg" fill="#fff">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.81832 12.3781C0.641541 13.6853 0.172694 15.2929 0.740548 16.6638C1.3084 18.0347 2.77666 18.8399 4.53307 18.9322C4.81971 18.9472 5.05279 19.1803 5.06784 19.4669C5.16003 21.2234 5.96524 22.6916 7.33617 23.2595C8.7071 23.8273 10.3147 23.3585 11.6219 22.1817C11.8352 21.9896 12.1648 21.9896 12.3782 22.1817C13.6853 23.3585 15.2929 23.8273 16.6638 23.2595C18.0347 22.6916 18.84 21.2234 18.9322 19.467C18.9472 19.1803 19.1803 18.9472 19.4669 18.9322C21.2234 18.84 22.6916 18.0348 23.2595 16.6639C23.8273 15.2929 23.3585 13.6853 22.1817 12.3782C21.9896 12.1648 21.9896 11.8352 22.1817 11.6219C23.3585 10.3147 23.8273 8.70712 23.2595 7.33619C22.6916 5.96526 21.2233 5.16005 19.4669 5.06786C19.1803 5.05281 18.9472 4.81973 18.9321 4.53309C18.8399 2.77665 18.0347 1.30838 16.6638 0.740519C15.2929 0.172663 13.6853 0.641513 12.3781 1.8183C12.1648 2.01034 11.8352 2.01034 11.6218 1.8183C10.3147 0.641545 8.7071 0.172712 7.33619 0.74056C5.96527 1.30841 5.16006 2.77667 5.06785 4.53308C5.05281 4.81972 4.81972 5.0528 4.53308 5.06784C2.77665 5.16004 1.30838 5.96524 0.740519 7.33617C0.17266 8.7071 0.641519 10.3147 1.81831 11.6219C2.01036 11.8352 2.01036 12.1648 1.81832 12.3781ZM17.3648 8.00218C17.6421 7.52457 17.4797 6.91258 17.0021 6.63525C16.5245 6.35793 15.9125 6.5203 15.6352 6.99791L11.2253 14.5927C11.1429 14.7347 10.9484 14.76 10.8323 14.644L8.20711 12.0187C7.81658 11.6282 7.18342 11.6282 6.79289 12.0187C6.40237 12.4093 6.40237 13.0424 6.79289 13.433L10.5671 17.2071C10.7866 17.4267 11.0956 17.5318 11.4035 17.4916C11.7113 17.4515 11.9831 17.2707 12.139 17.0022L17.3648 8.00218Z"></path>
                        </svg>
                        <span> PRO SHOP</span>
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            {/* <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/shop">Shop</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/">Link</Link>
                            </li> */}
                        </ul>
                        <div class="d-flex">
                            <Link to="/cart" className="text-light me-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
                                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                </svg>
                                <div style={{ marginTop: "-12px", position: "absolute", marginLeft: "-5px" }} class="badge text-light">.</div>
                            </Link>
                            {
                                userInfo ?
                                    <div className="ms-3 loggedInUserHeaderAcDropdown">
                                        <div class="dropdown">
                                            <div class="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                {userInfo.name}
                                            </div>
                                            <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton1">
                                                <li><Link class="dropdown-item" to="/user/account">Account</Link></li>
                                                {/* <li><Link class="dropdown-item" to="/user/profile">Profile</Link></li> */}
                                                <li><button onClick={logoutHandler} class="dropdown-item">Sign Out</button></li>
                                            </ul>
                                        </div>
                                    </div>
                                    :
                                    <Link to="/login" className="btn btn-outline-light btn-sm px-4 ms-3">Sign In</Link>
                            }
                        </div>
                    </div>
                    <div className="responsive-nav-items d-flex">
                        <Link to="/cart" className="responsive-nav-item-cart">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cart3 me-3 text-light" viewBox="0 0 16 16">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                            </svg>
                        </Link>
                        <Link to="/login">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-person text-light" viewBox="0 0 16 16">
                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;