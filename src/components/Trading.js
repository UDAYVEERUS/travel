import React from 'react'
import Tranding from '../images/tranding.png'
import user1 from '../images/user1.png'
import Quote from '../images/quote.png'
import user2 from '../images/user2.png'
import City from '../images/mahel2.png'

const Trading = () => {
  return (
    <>
    <div>
        <div className="container mt-3">
            <div className="row heading-row">
              <div className="popular-heading-text">
                <h1 className="section-heading">Trending Activities</h1>
                <p className="section-subheading">
                  Top 3 offers for you in this month! Grab these amazing offers using
                  the coupon codes.
                </p>
              </div>
               <p className="seeall">See All</p> 
            </div>
            <div className="trending-text row mt-3">
              <img src={Tranding} alt="" />
            </div>
          </div>
    </div>
    <div className="container">
            <div className="row mt-5 heading-row">
              <div className="popular-heading-text">
                <h1 className="section-heading">What do people feel...</h1>
              </div>
            </div>
            <div className="row mt-2 w-100 d-flex justify-content-around ">
              <div className="testimonial-card col-sm ">
                <img src={user1} alt="" />
                <img className="quote" src={Quote} alt="" />
                <div className="testi-card-text testimonial-text">
                  <h2>RICHARD</h2>
                  <p>
                    Great experience buying tickets from you,I will buy it again for my next trip 
                  </p>
                </div>
              </div>
              <div className="testimonial-card col-sm">
                <img src={user2} alt="" />
                <img className="quote" src={Quote} alt="" />
                <div className="testi-card-text testimonial-text">
                  <h2>THOMAS</h2>
                  <p>
                    I find TravelPey quick &amp; easy,the pricing is great.thank you SAM.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* city image footer */}
          <div className="mahel container d-flex justify-content-center">
            <img style={{height:"fit-content", width:"initial"}} src={City} alt="" />
          </div>
    </>
  )
}

export default Trading