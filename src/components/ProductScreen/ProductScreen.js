import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { listProductDetails } from '../../actions/productActions';
import Loader from '../Reusable/Loader/Loader';
import Message from '../Reusable/Message/Message';
import Rating from '../Reusable/Product/Rating/Rating';
import RegularStar from '../Reusable/Product/Rating/RegularStar/RegularStar';

const ProductScreen = () => {

    const [qty, setQty] = useState(1)

    const path = useParams()
    const history = useHistory()

    const dispatch = useDispatch()

    const productDetails = useSelector(state => state.productDetails)
    const { loading, error, product } = productDetails

    // Get product data
    useEffect(() => {
        dispatch(listProductDetails(path.id))
    }, [dispatch, path])

    // Back to home
    const backToHome = () => {
        history.goBack()
    }

    // add cart function
    const addToCartHandler = () => {
        history.push(`/cart/${path.id}?qty=${qty}`)
    }

    return (
        <div className="productScreenPage">
            <div className="container">
                <div onClick={backToHome} style={{ textDecoration: "none", cursor: "pointer" }} className="link-secondary h6 d-block my-4 header-color">GO BACK</div>
                {
                    loading ?
                        <div className="productScreeLoader">
                            <div style={{ marginTop: "200px" }} className="text-center">
                                <Loader />
                            </div>
                        </div>
                        : error ?
                            <div className="productScreeError" style={{ marginTop: "30vh" }}>
                                <Message message={error} variant="simple" />
                            </div>
                            :
                            <div className="row">
                                <div className="col-sm-5 productScreenImgs text-center">
                                    <img style={{ height: "400px", objectFit: "contain" }} src={product?.imgs && product?.imgs[0]} alt="" className="img-fluid" />
                                </div>
                                <div className="ps-4 col-sm-4">
                                    <h5 className="productScreeTitle">{product?.title}</h5>
                                    <div className="productScreenRating">
                                        <hr />
                                        {
                                            product.rating ?
                                                <>
                                                    <span style={{ color: "#F3A847" }}>
                                                        <Rating rating={product?.rating} id={product?.id} />
                                                    </span>
                                                    {
                                                        product?.numOfReviews ?
                                                            <small> {product?.numOfReviews} Reviews</small>
                                                            :
                                                            <small> 0 Reviews</small>
                                                    }
                                                </>
                                                :
                                                <span style={{ color: "#F3A847" }}>
                                                    <RegularStar />
                                                    <RegularStar />
                                                    <RegularStar />
                                                    <RegularStar />
                                                    <RegularStar />
                                                </span>
                                        }
                                        <hr />
                                    </div>
                                    <div className="productsScreenPrice">
                                        <small>Price: ${product?.price && product?.price[0]}.99</small>
                                        <hr />
                                    </div>
                                    <div className="productScreenAbout">
                                        Description: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <ul class="list-group">
                                        <li class="list-group-item">
                                            <div className="row">
                                                <div className="col-7">Price: </div>
                                                <div className="col-5">${product?.price && product?.price[0]}.99</div>
                                            </div>
                                        </li>
                                        <li class="list-group-item">
                                            <div className="row">
                                                <div className="col-7">Status: </div>
                                                <div className="col-5">{product.stockItems > 0 ? "In Stock" : "Out Of Stock"}</div>
                                            </div>
                                        </li>
                                        {
                                            product.stockItems > 0 &&
                                            <li class="list-group-item">
                                                <div className="row">
                                                    <div className="col-7">Quantity: </div>
                                                    <div className="col-5">
                                                        <form action="" className="">
                                                            <select className="w-100 form-select form-select-sm" value={qty} name="select-quantity" id="qtySelect" onChange={(e => setQty(e.target.value))}>

                                                                {
                                                                    product?.stockItems > 9 ?
                                                                        [...Array(9).keys()].map(dt => (
                                                                            <option key={dt + 1} value={dt + 1}>{dt + 1}</option>
                                                                        ))
                                                                        :
                                                                        [...Array(product?.stockItems).keys()].map(dt => (
                                                                            <option key={dt + 1} value={dt + 1}>{dt + 1}</option>
                                                                        ))
                                                                        
                                                                }
                                                            </select>
                                                        </form>
                                                    </div>
                                                </div>
                                            </li>
                                        }
                                        <li class="list-group-item">
                                            <button onClick={addToCartHandler} className="btn btn-dark w-100 my-2 py-2" style={{ borderRadius: "npm s" }} disabled={product?.stockItems === 0}>Add To Cart</button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                }
            </div>
        </div>
    );
};

export default ProductScreen;