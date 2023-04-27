import React from 'react'
import Logo from '../images/logo-bg.png'
import MobileSign from '../images/c.png'
const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg nav_section">
                <div className="container-fluid mt-3">
                    <div className="logo">
                        <img className="logo-img" src={Logo} alt="" />
                        <h2 className="logo-txt">TravelPey</h2>
                    </div>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item ">
                                <a className="nav-link" aria-current="page" href="index.html">Flights</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" href="#">Hotels</a>
                            </li>

                            <li className="nav-item ">
                                <a className="nav-link" href="./tax.html">Privacy Policy</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" href="./privacy.html">Terms & Conditions</a>
                            </li>

                        </ul>
                        <li className="nav-item " style={{display:"flex"}}>

                            <img src={MobileSign} width="23px" height="23px" />
                            <a className="nav-link" href="tel:+1 8886763247" >+1 8886763247</a>

                        </li>
                        {/* <li className="nav-item">
                            <span className="nav-link text-light">INR</span>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link text-light"
                            ><i className="fa-solid fa-globe"></i></span>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link text-light"><i className="fa-solid fa-circle-question"></i></span>
                        </li> */}
                        {/* <div className="nav-item">
                            <button className="btn btn-outline-danger">LOGIN</button>
                        </div> */}
                    </div>
                </div>
            </nav>
        </div>
  )
}

export default Navbar