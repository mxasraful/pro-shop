import React from 'react';

const OrderItem = ({ item }) => {
    return (
        <div className="orderItem card mb-3 px-2 py-2">
            <div className="d-flex">
                <div className="orderItemImg" style={{ width: "10%" }}>
                    <img style={{ maxHeight: "70px" }} src={item.image} alt="" className="img-fluid" />
                </div>
                <div className={item.name.length > 6 ? "orderItemName pt-1" : "orderItemName pt-3"} style={{ width: "25%" }}>
                <span><a href={`/product/`} className="h6 text-dark">{item.name.length > 60 ? item.name.slice(0, 60) + "..." : item.name}</a></span>
                </div>
                <div className="orderItemQty pt-3 text-center h6 me-4" style={{ width: "10%" }}>
                    Qty: {item.qty}
                </div>
                <div className=" orderItemStatus mt-2 me-4 text-center text-uppercase" style={{ width: "20%" }}>
                    <div className="px-2 py-2 rounded bg-secondary text-light">{item.status}</div>
                </div>
                <div className=" orderItemPrice pt-3 text-center" style={{ width: "10%" }}>
                    <span className="text-dark h6">${item.price*item.qty}.00</span>
                </div>
                <div className="orderItemDeliveredDate me-4 ms-2" style={{ width: "22%" }}>

                </div>
                <div className="pt-3 orderItemRemove" style={{ width: "8%" }}>
                    <button className="btn btn-sm btn-outline-danger px-2">Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default OrderItem;