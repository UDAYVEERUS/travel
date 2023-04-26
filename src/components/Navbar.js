import React from 'react'
import Logo from '../images/logo-bg.png'
import MobileSign from '../images/c.png'
const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg nav_section">
                <div class="container-fluid mt-3">
                    <div class="logo">
                        <img class="logo-img" src={Logo} alt="" />
                        <h2 class="logo-txt">TravelPey</h2>
                    </div>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item ">
                                <a class="nav-link" aria-current="page" href="index.html">Flights</a>
                            </li>
                            <li class="nav-item ">
                                <a class="nav-link" href="#">Hotels</a>
                            </li>

                            <li class="nav-item ">
                                <a class="nav-link" href="./tax.html">Privacy Policy</a>
                            </li>
                            <li class="nav-item ">
                                <a class="nav-link" href="./privacy.html">Terms & Conditions</a>
                            </li>

                        </ul>
                        <li class="nav-item " style={{display:"flex"}}>

                            <img src={MobileSign} width="23px" height="23px" />
                            <a class="nav-link" href="tel:+1 8886763247" >+1 8886763247</a>

                        </li>
                        {/* <li class="nav-item">
                            <span class="nav-link text-light">INR</span>
                        </li>
                        <li class="nav-item">
                            <span class="nav-link text-light"
                            ><i class="fa-solid fa-globe"></i></span>
                        </li>
                        <li class="nav-item">
                            <span class="nav-link text-light"><i class="fa-solid fa-circle-question"></i></span>
                        </li> */}
                        {/* <div class="nav-item">
                            <button class="btn btn-outline-danger">LOGIN</button>
                        </div> */}
                    </div>
                </div>
            </nav>
        </div>
  )
}

export default Navbar