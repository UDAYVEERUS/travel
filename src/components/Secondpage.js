import React from 'react'

// import Slider from "react-slick";


import Card4 from '../images/card4.jpg'
import Card5 from '../images/card5.jpg'
import Card6 from '../images/card6.jpg'
import Card7 from '../images/card7.jpg'

const Seconpage = () => {

    return (
        <div style={{ width: "full" }}>
            <div>
                <div class="container">
                    <div class="row heading-row mt-5">
                        <div class="popular-heading-text">
                            <h1 class="section-heading">Popular Flights Near You</h1>
                            <p class="section-subheading">
                                Find dashing deals on domestic and international flights!
                            </p>
                        </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row", margin: "auto", justifyContent: "center", gap: "10px", marginLeft: "40px", marginRight: "40px", overflow: "hidden" }} >
                        <div>
                            <img height={200} width={250} src={Card4} alt="" />
                        </div>
                        <div>
                            <img height={200} width={250} src={Card5} alt="" />
                        </div>
                        <div>
                            <img height={200} width={250} src={Card6} alt="" />
                        </div>
                        <div>
                            <img height={200} width={250} src={Card7} alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Seconpage