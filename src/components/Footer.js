import React from "react"

const footer = () => {
    return (
        <div className="container mt-5 pt-5">
            <div className="text-center">
                <div className="footer-logo">
                    <img src="../img/bookicon.svg">
                </div>
                <hr>
                <span>어린이책방</span>
            </div>
            <div className="footer-contact">
                <p>interpark nyt bestseller api</p>
                <div className="footer-icon">
                    <a href="" className="icon"><i className="fas fa-phone-alt m-3"></i></a>
                    <a href="" className="icon"><i className="fab fa-google m-3"></i></a>
                    <a href="" className="icon"><i className="fab fa-instagram m-3"></i></a>
                </div>
            </div>
        </div>
    )
}