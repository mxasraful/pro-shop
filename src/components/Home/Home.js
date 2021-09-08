import React, { useEffect } from 'react';
import Product from '../Reusable/Product/Product';
import { useDispatch, useSelector } from 'react-redux';
import './Home.css'
import { listProducts } from '../../actions/productActions';
import Loader from '../Reusable/Loader/Loader';
import Message from '../Reusable/Message/Message';

const Home = () => {

    const dispatch = useDispatch()

    const productList = useSelector(state => state.productList)
    const { loading, error, products } = productList

    // get products data
    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    return (
        <div className="homeComp my-5">
            <div className="container">
                <div className="homeProducts">
                    <div className="homeLatestProducts row">
                        {
                            loading ?
                                <div className="homeLProductsLoader" style={{ marginTop: "30vh" }}>
                                    <Loader />
                                </div>
                                : error ?
                                    <div className="homeProductsError" style={{ marginTop: "30vh" }}>
                                        <Message />
                                    </div>
                                    : products ?
                                        <>
                                            <h2 className="homeLProductsTitle text-uppercase mb-4">Latest Products</h2>
                                            {
                                                products?.map(dt => (
                                                    <div className="col-sm-3 mb-5">
                                                        <div className="card">
                                                            <div className="card-body">
                                                                <Product dt={dt} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </>
                                        :
                                        <div className="homeProductsError" style={{ marginTop: "30vh" }}>
                                            <div className="text-center">
                                                <div>Products not found.</div>
                                            </div>
                                        </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;