import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { getUserDetails, updateUserProfile } from '../../actions/userAction';
import OrderItem from './OrderItem/OrderItem';
import './AccountScreen.css'
import Message from '../Reusable/Message/Message';
import Loader from '../Reusable/Loader/Loader';

const AccountScreen = () => {

    const dispatch = useDispatch()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [newPassword, setNewPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [message, setMessage] = useState(null)


    const [updateDetailsOpt, setUpdateDetailsOpt] = useState(false)

    const history = useHistory()

    const userDetails = useSelector(state => state.userDetails)
    const { loading, error, user } = userDetails

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const userUpdateProfile = useSelector(state => state.userUpdateProfile)
    const { success } = userUpdateProfile

    console.log(error)

    // Handle update user profile
    const submitHandler = (e) => {
        if (confirmPassword !== newPassword) {
            setMessage("Your details is updated.")
        } else {
            console.log("Ok")
            dispatch(updateUserProfile({ id: user._id, name, email, newPassword }))
        }
        e.preventDefault()
    }

    // Redirect the page
    useEffect(() => {
        if (!userInfo) {
            window.location.replace('/login')
        } else {
            if (!user?.name) {
                dispatch(getUserDetails("profile"))
            } else {
                setName(userInfo.name)
                setEmail(userInfo.email)
            }
        }
    }, [dispatch, history, userInfo, user])


    console.log(message)

    const items = [
        {
            name: "Samsung Galaxy M20",
            image: "https://b2b-pickaboocdn.azureedge.net/media/catalog/product/cache/c9c3ae6e3f78df4924e8b3b9bf50d8e7/s/a/samsung-galaxy-a52-white.jpg",
            price: 123,
            qty: 2,
            deliveryCharge: 5,
            delivered: false,
            status: 'Processing'
        },

        {
            name: "Realme 7i 8GB/128GB",
            image: "https://i2.wp.com/www.mobilebd.co/wp-content/uploads/2020/09/Realme-7i--500x500.png",
            price: 123,
            qty: 2,
            deliveryCharge: 5,
            delivered: false,
            status: 'Processing'
        },

        {
            name: "Samsung Galaxy A21 Factory Unlocked",
            image: "https://image-us.samsung.com/SamsungUS/home/mobile/phones/galaxy-a/galaxy-a21/pdp/06092020/PDP-GALLERY-A21-black-02-1600x1200.jpg",
            price: 123,
            qty: 2,
            deliveryCharge: 5,
            delivered: false,
            status: 'Processing'
        },

        {
            name: "Samsung Galaxy A52",
            image: "https://b2b-pickaboocdn.azureedge.net/media/catalog/product/cache/c9c3ae6e3f78df4924e8b3b9bf50d8e7/s/a/samsung-galaxy-a52-white.jpg",
            price: 123,
            qty: 2,
            deliveryCharge: 5,
            delivered: false,
            status: 'Processing'
        }

    ]

    return (
        <div className="profilePage">
            <div className="container">
                <h4 className="text-secondary mt-3">My Account</h4>
                <div className="mt-3 mb-3">
                    {
                        message && <Message variant="danger">{message}</Message>
                    }
                    {
                        error && <Message variant="danger">{error}</Message>
                    }
                    {
                        success && <Message variant="success">Profile Update Successfuly.</Message>
                    }
                    {
                        loading && <Loader />
                    }
                </div>
                {
                    user &&
                    <>
                        <div className="row mt-5">
                            <div className="col-sm-3">
                                <div className="card" style={{ height: "60vh" }}>
                                    <div className="card-body">
                                        {
                                            updateDetailsOpt ?
                                                <form onSubmit={submitHandler} className="updateUserDetails text-left">
                                                    <h5 className="mt-2 text-center">Update User Profile</h5>
                                                    <hr />
                                                    <div className="mb-3">
                                                        <label htmlFor="updateUserName" class="form-label">Name</label>
                                                        <input type="text" name="name" placeholder={user?.name} className="form-control form-control-sm border" id="updateUserName" onChange={(e) => setName(e.target.value)} value={name} />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="updateUserEmail" class="form-label">Email</label>
                                                        <input type="email" placeholder={user?.email} name="email" className="form-control form-control-sm border" id="updateUserEmail" onChange={(e) => setEmail(e.target.value)} value={email} />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="updateUserCPwd" class="form-label">Password <span className="text-danger">*</span></label>
                                                        <input type="password" placeholder='Type Your Password' name="new-password" className="form-control form-control-sm border" id="updateUserCPwd" onChange={(e) => setNewPassword(e.target.value)} />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="updateUserCPwd" class="form-label">Confirm Password <span className="text-danger">*</span></label>
                                                        <input type="password" placeholder='Confirm Your Password' name="confirm-password" className="form-control form-control-sm border" id="updateUserCPwd" onChange={(e) => setConfirmPassword(e.target.value)} required />
                                                    </div>
                                                    <div className="d-flex">
                                                        <button type="submit" className="btn btn-sm btn-info mt-4 px-4 ms-auto float-right text-light">SAVE</button>
                                                    </div>
                                                </form>
                                                :
                                                <div className="userDetails text-center">
                                                    <h5 className="mt-2">User Profile</h5>
                                                    <hr />
                                                    {
                                                        user?.img &&
                                                        <img src={user?.img} alt="" className="img-fluid rounded-circle mt-4 w-25" />
                                                    }
                                                    <div className="mb-2 mt-4">
                                                        <h6>{user?.name}</h6>
                                                    </div>
                                                    <div className="mb-2">
                                                        <div>{user?.email}</div>
                                                    </div>
                                                    <div className="mt-3">
                                                        <button className="btn btn-outline-info px-4 btn-sm" onClick={() => setUpdateDetailsOpt(true)}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" style={{ marginTop: "-3px" }} width="15" height="15" fill="currentColor" class="bi bi-pen me-2" viewBox="0 0 16 16">
                                                                <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z" />
                                                            </svg>
                                                            <span>Update Profile</span>
                                                        </button>
                                                    </div>
                                                </div>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-9">
                                <div className="card" style={{ height: "60vh" }}>
                                    <div className="card-body">
                                        <h5 className="mt-2 text-center">My Orders</h5>
                                        <hr />
                                        <div className="accountMyOrderItems" style={{ overflowY: "scroll", overflowX: "hidden", height: "46vh" }}>
                                            {
                                                items?.map(item => (
                                                    <OrderItem item={item} />
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                }
            </div>
        </div>
    );
};

export default AccountScreen;