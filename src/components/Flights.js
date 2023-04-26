import React from 'react'
import Card5 from '../images/card5.jpg'
import Card6 from '../images/card6.jpg'
import Card7 from '../images/card7.jpg'
import Card8 from '../images/card8.jpg'

const Flights = () => {
    return (
        <div>
            <div class="container">
                <div class="row heading-row mt-3">
                    <div class="popular-heading-text">
                        <h1 class="section-heading">Best Flight Near Me</h1>
                        <p class="section-subheading">
                            Start Packing! These Countries are Open for Travel!
                        </p>
                    </div>
                </div>
                <div style={{ display: "flex", flexDirection: "row", margin: "auto", justifyContent: "center", gap: "10px", marginLeft: "40px", marginRight: "40px", overflow: "hidden" }} >
                <div>
                    <img height={200} width={250} src={Card5} alt="" />
                </div>
                <div>
                    <img height={200} width={250} src={Card6} alt="" />
                </div>
                <div>
                    <img height={200} width={250} src={Card7} alt="" />
                </div>
                <div>
                    <img height={200} width={250} src={Card8} alt="" />
                </div>
            </div>
            </div>
            
        </div>
    )
}

export default Flights