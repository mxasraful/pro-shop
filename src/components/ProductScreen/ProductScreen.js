import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { listProductDetails } from '../../actions/productActions';
import Loader from '../Reusable/Loader/Loader';
import Message from '../Reusable/Message/Message';
import Rating from '../Reusable/Product/Rating/Rating';
import RegularStar from '../Reusable/Product/Rating/RegularStar/RegularStar';

const ProductScreen = () => {

    const [screenImage, setScreenImage] = useState(null)
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

    // Set defult image
    useEffect(() => {
        if (product?.imgs) {
            setScreenImage(product.imgs[0])
        }
    }, [product])

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
                                    <img style={{ height: "400px", objectFit: "contain" }} src={screenImage && screenImage} alt="" className="img-fluid py-4" />
                                    <div className="item-images w-100 row">
                                        {
                                            product?.imgs?.map(dt => (
                                                <div className="card p-1 me-1 d-flex justify-content-center align-items-center mb-3" style={{width: "100px", height: "100px", cursor: "pointer"}} onClick={() => setScreenImage(dt)}>
                                                    <img src={dt} alt={product?.title} style={{maxWidth: "90px", maxHeight: "-webkit-fill-available", margin: "0 auto"}}/>
                                                </div>
                                            ))
                                        }
                                    </div>
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
                                        <><b>Price:</b>  ${product?.price && product?.price[0]}.00</>
                                        <hr />
                                    </div>
                                    <div className="productScreenSpecs">
                                        <b> Specs:</b>
                                        <table class="table table-bordered mt-2 productsScreenPriceTable">
                                            <tbody>
                                                <tr>
                                                    <td>Brand </td>
                                                    <td>{product?.brand && product?.brand}</td>
                                                </tr>
                                                {
                                                    product.specs?.map(dt => (
                                                        <tr>
                                                            <td>{dt.title}</td>
                                                            <td>{dt.data}</td>
                                                        </tr>
                                                    ))
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="productScreenAbout">
                                        {
                                            product.description ?
                                                <>
                                                    <b> Description: </b>{product.description}
                                                </>
                                                : <>
                                                    <b> Description:</b> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                                </>
                                        }
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <ul class="list-group">
                                        <li class="list-group-item">
                                            <div className="row">
                                                <div className="col-7">Price: </div>
                                                <div className="col-5">${product?.price && product?.price[0]}.00</div>
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