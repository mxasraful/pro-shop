import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const Shipping = ({ history }) => {

    const [name, setName] = useState(null)
    const [email, setEmail] = useState(null)
    const [phone, setPhone] = useState(null)
    const [address, setAddress] = useState(null)
    const [address2, setAddress2] = useState(null)
    const [city, setCity] = useState(null)
    const [division, setDivision] = useState(null)
    const [district, setDistrict] = useState(null)
    const [postalCode, setPostalCode] = useState(null)
    const [country, setCountry] = useState(null)
    const [selectedDivision, setSelectedDivision] = useState(null)

    const [bdStates, setBdStates] = useState(null)

    const [appliedPromo, setAppliedPromo] = useState(null)


    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const cartItems = useSelector((state) => state?.cart?.cartItems ? state?.cart?.cartItems.length < 1 ? null : state?.cart?.cartItems : null)

    // Handel Main Submit
    const handelSubmit = (e) => {
        e.preventDefault()
        console.log("submit")
    }

    // Set Defult data
    useEffect(() => {
        if (userInfo) {
            setName(userInfo.name)
            setEmail(userInfo.email)
            if (userInfo?.phone) {
                setPhone(userInfo.phone)
            }
        }
    }, [userInfo])

    useEffect(() => {
        fetch('https://arcane-sierra-30035.herokuapp.com/districts')
            .then(res => res.json())
            .then(data => setBdStates(data))
    }, [])

    useEffect(() => {
        const selectedDivisionFilter = bdStates?.find(dt => dt.name === division)
        if (selectedDivisionFilter === undefined) {
            setSelectedDivision(null)
        } else {
            setSelectedDivision(selectedDivisionFilter)
        }
    }, [bdStates, division])


    return (
        <div className="shippingPage">
            <div className="container">
                <h4 className="text-secondary mt-3">Shipping</h4>
                <main className='mt-5'>
                    <div class="row g-5">
                        <div class="col-md-7 col-lg-8">
                            <h4 class="mb-3">Billing address</h4>
                            <form class="needs-validation" onSubmit={handelSubmit}>
                                <div class="row g-3">
                                    <div class="col-sm-6">
                                        <label for="fullName" class="form-label">Full name <span className="text-danger">*</span></label>
                                        <input type="text" class="form-control" id="fullName" placeholder="" value={name} onChange={(e) => setName(e.target.value)} required />
                                        <div class="invalid-feedback">
                                            Valid first full name is required.
                                        </div>
                                    </div>

                                    <div className="col-sm-6">
                                        <label for="phone" class="form-label">Phone <span className="text-danger">*</span></label>
                                        <div class="input-group has-validation">
                                            <span class="input-group-text"> +880 </span>
                                            <input type="number" class="form-control" id="phone" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                                            <div class="invalid-feedback">
                                                Your Phone is required.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-6">
                                        <label for="email" class="form-label">Email <span class="text-muted">(Optional)</span></label>
                                        <input type="email" class="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" />
                                        <div class="invalid-feedback">
                                            Please enter a valid email address for shipping updates.
                                        </div>
                                    </div>

                                    <div class="col-sm-6">
                                        <label for="country" class="form-label">Country <span className="text-danger">*</span></label>
                                        <select onChange={(e) => setCountry(e.target.value)} class="form-select" id="country" required="">
                                            <option value="null">Choose...</option>
                                            <option value="Bangladesh">Bangladesh</option>
                                        </select>
                                        <div class="invalid-feedback">
                                            Please select a valid country.
                                        </div>
                                    </div>

                                    <div class="col-sm-3">
                                        <label for="division" class="form-label">Division <span className="text-danger">*</span></label>
                                        <select onChange={(e) => e.target.value === "null" ? setDivision(null) : setDivision(e.target.value)} class="form-select" id="division" required>
                                            {
                                                country === 'Bangladesh' ?
                                                    <>
                                                        <option value="null">Choose...</option>
                                                        {
                                                            bdStates?.map(dt => <option value={dt.name}>{dt.name}</option>)
                                                        }
                                                    </>
                                                    :
                                                    <option value="null">Please Choose Country...</option>
                                            }
                                        </select>
                                        <div class="invalid-feedback">
                                            Please provide a valid state.
                                        </div>
                                    </div>

                                    <div class="col-sm-3">
                                        <label for="districts" class="form-label">Districts <span className="text-danger">*</span></label>
                                        <select onChange={(e) => e.target.value === "null" ? setDistrict(null) : setDistrict(e.target.value)} class="form-select" id="districts" required>
                                            {
                                                division === null ?
                                                    <option value="null">Please Choose Division...</option>
                                                    :
                                                    <>
                                                        <option value="null">Choose...</option>
                                                        {
                                                            selectedDivision?.districts.map(dt => (
                                                                <option value={dt}>{dt}</option>
                                                            ))
                                                        }
                                                    </>
                                            }
                                        </select>
                                        <div class="invalid-feedback">
                                            Please provide a valid districts.
                                        </div>
                                    </div>

                                    <div class="col-sm-3">
                                        <label for="city" class="form-label">City <span className="text-danger">*</span></label>
                                        <input onChange={(e) => setCity(e.target.value)} value={city} type="text" class="form-control" id="city" placeholder="" required />
                                        <div class="invalid-feedback">
                                            Please provide a valid districts.
                                        </div>
                                    </div>

                                    <div class="col-md-3">
                                        <label for="zip" class="form-label">Zip <span className="text-danger">*</span></label>
                                        <input onChange={(e) => setPostalCode(e.target.value)} value={postalCode} type="text" class="form-control" id="zip" placeholder="" required />
                                        <div class="invalid-feedback">
                                            Zip code required.
                                        </div>
                                    </div>

                                    <div class="col-12">
                                        <label for="address" class="form-label">Address <span className="text-danger">*</span></label>
                                        <input onChange={(e) => setAddress(e.target.value)} value={address} type="text" class="form-control" id="address" placeholder="1234 Main St" required="" />
                                        <div class="invalid-feedback">
                                            Please enter your shipping address.
                                        </div>
                                    </div>

                                    <div class="col-12">
                                        <label for="address2" class="form-label">Address 2 <span class="text-muted">(Optional)</span></label>
                                        <input onChange={(e) => setAddress2(e.target.value)} value={address2} type="text" class="form-control" id="address2" placeholder="Apartment or suite" />
                                    </div>
                                </div>

                                <hr class="my-4" />
                                <div class="form-check">
                                    <input type="checkbox" class="form-check-input" id="same-address" required />
                                    <label class="form-check-label" for="same-address">Shipping address is the same as my billing address <span className="text-danger">*</span></label>
                                </div>

                                {/* <div class="form-check">
                                    <input type="checkbox" class="form-check-input" id="save-info" />
                                    <label class="form-check-label" for="save-info">Save this information for next time</label>
                                </div> */}

                                <hr class="my-4" />

                                <input class="w-100 btn btn-primary btn-lg" type="submit" value="Continue For Payment" />
                            </form>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Shipping;