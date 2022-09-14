import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="banner-main card mb-5" style={{ maxHeight: "400px" }}>
            <div className="card-body">
                <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active text-center" style={{ height: "366px" }}>
                            <img src="https://www.apple.com/v/macbook-pro-14-and-16/b/images/meta/macbook-pro-14-and-16_overview__fz0lron5xyuu_og.png" class="d-block" alt="" style={{ height: "inherit", margin: "0 auto"}} />
                            <div class="carousel-caption d-none d-md-block text-start" style={{ bottom: "11rem", left: "7%" }}>
                                <h5 className=" text-dark">Apple MacBook Pro M2 - 16 Inch</h5>
                                <p className='text-dark'>Some representative placeholder content for the first slide.</p>
                                <Link to={`/product/606ec8561c25b14678022a0e`}><button className="btn btn-outline-danger btn-sm mt-2 px-4">Buy Now</button></Link>
                            </div>
                        </div>
                        <div class="carousel-item text-center" style={{ height: "366px" }}>
                            <img src="https://i.dell.com/is/image/DellContent//content/dam/ss2/product-images/dell-client-products/notebooks/inspiron-notebooks/inspiron-14-5410/pdp/notebook-inspiron-14-5410-pdp-mod04.jpg?fmt=jpg&wid=965&hei=475" class="d-block" alt="" style={{ height: "inherit", margin: "0 auto" }} />
                            <div class="carousel-caption d-none d-md-block text-start" style={{ bottom: "11rem", left: "7%" }}>
                                <h5 className=" text-dark">Dell - Inspiron 14 7000 2-in-1 Laptop</h5>
                                <p className='text-dark'>Some representative placeholder content for the first slide.</p>
                                <Link to={`/product/606ec8561c25b14678022a10`}><button className="btn btn-outline-danger btn-sm mt-2 px-4">Buy Now</button></Link>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev text-dark" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev" style={{width: "7%"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
                        </svg>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next text-dark" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next" style={{width: "7%"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                        </svg>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;