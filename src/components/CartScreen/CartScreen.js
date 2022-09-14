import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { addToCart, removeCart } from '../../actions/cartAction';
import Message from '../Reusable/Message/Message';

const CartScreen = () => {

    const productId = useParams().id
    const location = useLocation()
    const qty = location.search ? location.search.split("=")[1] > 0 ? Number(location.search.split("=")[1]) : null : null

    const dispatch = useDispatch()

    // get cart items from state
    const cartItems = useSelector((state) => state?.cart?.cartItems ? state?.cart?.cartItems.length < 1 ? null : state?.cart?.cartItems : null)

    // get user info form state
    const { userInfo } = useSelector(state => state.userLogin)

    // Automatic add cart item
    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty))
        }
    }, [productId, dispatch, qty])

    // Remove item form cart
    const removeItem = (id) => {
        dispatch(removeCart(id))
    }

    // Checkout handler
    const checkoutHandler = () => {
        if (userInfo) {
            window.location.replace('/shipping')
        } else {
            window.location.replace('/login?from=/shipping')
        }
    }

    console.log(cartItems)

    // Url query string to array convert
    // function URLToArray(url) {
    //     var request = {};
    //     var pairs = url.substring(url.indexOf('?') + 1).split('&');
    //     for (var i = 0; i < pairs.length; i++) {
    //         if(!pairs[i])
    //             continue;
    //         var pair = pairs[i].split('=');
    //         request[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
    //      }
    //      return request;
    // }

    return (
        <div className="cartScreenComp">
            <div className="container">
                <h4 className="text-secondary mt-3">Shopping Cart</h4>
                <div className="row">
                    {
                        cartItems ?
                            <>
                                <div className="col-md-8 mt-4">
                                    <h5 className="text-dark mt-3">Cart Items</h5>
                                    <div className="cartItems mt-3">
                                        {
                                            cartItems.map(item => (
                                                <div className="cartItem card mb-3 px-2 py-2">
                                                    <div className="row">
                                                        <div className="col-sm-2 cartItemImg">
                                                            <img style={{ maxHeight: "70px" }} src={item.image} alt="" className="img-fluid" />
                                                        </div>
                                                        <div className={item.name.length > 29 ? "col-4 cartItemName pt-1" : "col-4 cartItemName pt-3"}>
                                                            <a href={`/product/${item.product}`} className="h6 text-dark">{item.name.length > 60 ? item.name.slice(0, 60) + "..." : item.name}</a>
                                                        </div>
                                                        <div className="col-sm-3 cartItemPrice pt-3">
                                                            <div className="h5 text-dark">$ {item.price}.00</div>
                                                        </div>
                                                        <div className="col-2 cartItemQty pt-3" style={{ padding: "0px" }}>
                                                            <form action="" className="">
                                                                <select onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))} className="w-50 form-select form-select-sm" value={item.qty} name="select-quantity" id="qtySelect">
                                                                    {
                                                                        item?.stockItems > 9 ?
                                                                            [...Array(9).keys()].map(dt => (
                                                                                <option key={dt + 1} value={dt + 1}>{dt + 1}</option>
                                                                            ))
                                                                            :
                                                                            [...Array(item?.stockItems).keys()].map(dt => (
                                                                                <option key={dt + 1} value={dt + 1}>{dt + 1}</option>
                                                                            ))

                                                                    }
                                                                </select>
                                                            </form>
                                                        </div>
                                                        <div className="col-1 pt-3 cartItemRemove">
                                                            <div className="cartItemRemoveBtn" onClick={() => removeItem(item.product)} style={{ cursor: "pointer", marginTop: "2px" }}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                                                                    <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card mt-5">
                                        <div className="card-body">
                                            <h5 className="text-dark mt-1">Subtotal {cartItems ? <>{cartItems?.reduce((acc, item) => acc + item.qty, 0)}</> : "0"} Items </h5>
                                            {
                                                cartItems ?
                                                    <h6>
                                                        ${cartItems?.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}
                                                    </h6>
                                                    :
                                                    ""
                                            }
                                            <br /><br />
                                            <button className="btn btn-dark w-100" disabled={cartItems === null} onClick={checkoutHandler}>Proceed To Checkout</button>
                                        </div>
                                    </div>
                                </div>
                            </>
                            :
                            <div className="cartItemsError text-center" style={{minHeight: "75vh", paddingTop: "31vh"}}>
                                <Message message="Don't have any item in cart" />
                                <br />
                                <Link to="/" className="btn btn-sm btn-outline-info">Shop Now</Link>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default CartScreen;