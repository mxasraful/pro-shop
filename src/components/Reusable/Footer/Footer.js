import React from 'react';
import './Footer.css'

const Footer = () => {

    const path = window.location.pathname

    return (
        <div className={path === "/login" ? "footer-for-login footerComp" : "footerComp"}>
            <div className="container text-center">
                <h6 className="text-dark py-4">Copyright &copy; All Rights Reserved <a href="https://asrafulweb.com" className="text-info">AsrafulWeb</a></h6>
            </div>
        </div>

        // THIS CODE WILL BREAK YOUR APP
    );
};

export default Footer;