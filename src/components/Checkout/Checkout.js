import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const Checkout = () => {

    const [appliedPromo, setAppliedPromo] = useState(null)

    const cartItems = useSelector((state) => state?.cart?.cartItems ? state?.cart?.cartItems.length < 1 ? null : state?.cart?.cartItems : null)

    return (
        <div className="checkoutPage">
            <div className="container">
                <h4 className="text-secondary mt-3">Checkout</h4>
                <main className='mt-5'>
                    <div class="row g-5">
                        <div class="col-md-5 col-lg-4 order-md-last">
                            <h4 class="d-flex justify-content-between align-items-center mb-3">
                                <span class="text-primary">Your cart</span>
                                <span class="badge bg-primary rounded-pill">{cartItems ? <>{cartItems?.reduce((acc, item) => acc + item.qty, 0)}</>: "0"}</span>
                            </h4>
                            <ul class="list-group mb-3">
                                {
                                    cartItems?.map(dt => (
                                        <li class="list-group-item d-flex justify-content-between py-3">
                                            <div>
                                                <span class="my-0">{dt.name}</span>
                                                <small class="text-muted">{dt.description ? dt.description : ""}</small>
                                            </div>
                                            <span class="text-muted">${dt.price} {dt.qty > 1 && `x ${dt.qty}`}</span>
                                        </li>
                                    ))
                                }
                                {
                                    appliedPromo &&
                                    <li class="list-group-item d-flex justify-content-between bg-light ">
                                        <div class="text-success">
                                            <h6 class="my-0">Promo code</h6>
                                            <small>EXAMPLECODE</small>
                                        </div>
                                        <span class="text-success">−$5</span>
                                    </li>
                                }
                                <li class="list-group-item d-flex justify-content-between">
                                    <strong>Total (USD)</strong>
                                    <strong>${cartItems?.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}</strong>
                                </li>
                            </ul>

                            <form class="card p-2">
                                <div class="input-group">
                                    <input type="text" class="form-control" placeholder="Promo code" />
                                    <button type="submit" class="btn btn-secondary">Redeem</button>
                                </div>
                            </form>
                        </div>
                        <div class="col-md-7 col-lg-8">
                            <form class="needs-validation" novalidate="">
                                <h4 class="mb-3">Payment</h4>

                                <form class="my-3">
                                    <div class="form-check">
                                        <input id="credit-pay" name="paymentMethodItem" type="radio" class="form-check-input" checked />
                                        <label class="form-check-label" for="credit-pay">Credit card</label>
                                    </div>
                                    <div class="form-check">
                                        <input id="debit-pay" name="paymentMethodItem" type="radio" class="form-check-input" />
                                        <label class="form-check-label" for="debit-pay">Debit card</label>
                                    </div>
                                    <div class="form-check">
                                        <input id="paypal-pay" name="paymentMethodItem" type="radio" class="form-check-input" />
                                        <label class="form-check-label" for="paypal-pay">PayPal</label>
                                    </div>
                                </form>

                                <div class="row gy-3">
                                    <div class="col-md-6">
                                        <label for="cc-name" class="form-label">Name on card</label>
                                        <input type="text" class="form-control" id="cc-name" placeholder="" required="" />
                                        <small class="text-muted">Full name as displayed on card</small>
                                        <div class="invalid-feedback">
                                            Name on card is required
                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <label for="cc-number" class="form-label">Credit card number <span className="text-danger">*</span></label>
                                        <input type="text" class="form-control" id="cc-number" placeholder="" required="" />
                                        <div class="invalid-feedback">
                                            Credit card number is required
                                        </div>
                                    </div>

                                    <div class="col-md-3">
                                        <label for="cc-expiration" class="form-label">Expiration <span className="text-danger">*</span></label>
                                        <input type="text" class="form-control" id="cc-expiration" placeholder="" required="" />
                                        <div class="invalid-feedback">
                                            Expiration date required
                                        </div>
                                    </div>

                                    <div class="col-md-3">
                                        <label for="cc-cvv" class="form-label">CVV <span className="text-danger">*</span></label>
                                        <input type="text" class="form-control" id="cc-cvv" placeholder="" required="" />
                                        <div class="invalid-feedback">
                                            Security code required
                                        </div>
                                    </div>
                                </div>

                                <hr class="my-4" />

                                <button class="w-100 btn btn-primary btn-lg" type="submit">Continue to checkout</button>
                            </form>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Checkout;