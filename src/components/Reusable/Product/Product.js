import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css'
import Rating from './Rating/Rating';
import RegularStar from './Rating/RegularStar/RegularStar';

const Product = ({ dt }) => {

    return (
        <div className="product">
            <Link to={`/product/${dt?._id}`} className="">
                <div className="productImg text-center">
                    <img src={dt?.imgs[0]} alt="" className="img-fluid" />
                </div>
            </Link>
            <div className="div">
                <Link to={`/product/${dt?._id}`} className="productTitle">
                    {dt?.title.slice(0, 50)}
                    {dt?.title.length >= 31 ?
                        <>...</>
                        :
                        <>
                            <br />
                            <br />
                        </>
                    }
                </Link>
            </div>
            <div style={{ color: "#484848" }} className="productReviews mt-2">
                {
                    dt.rating ?
                        <>
                            <Rating rating={dt?.rating} id={dt?._id} />
                            {
                                dt?.numOfReviews &&
                                <small> {dt?.numOfReviews} Reviews</small>
                            }
                        </>
                        :
                        <>
                            <RegularStar />
                            <RegularStar />
                            <RegularStar />
                            <RegularStar />
                            <RegularStar />
                        </>
                }
            </div>
            <h4 className="productPrice text-color mt-1">$ {dt?.price[0]}.00</h4>
        </div>
    );
};

export default Product;