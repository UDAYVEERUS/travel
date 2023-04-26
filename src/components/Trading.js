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
        <div class="container mt-3">
            <div class="row heading-row">
              <div class="popular-heading-text">
                <h1 class="section-heading">Trending Activities</h1>
                <p class="section-subheading">
                  Top 3 offers for you in this month! Grab these amazing offers using
                  the coupon codes.
                </p>
              </div>
               <p class="seeall">See All</p> 
            </div>
            <div class="trending-text row mt-3">
              <img src={Tranding} alt="" />
            </div>
          </div>
    </div>
    <div class="container">
            <div class="row mt-5 heading-row">
              <div class="popular-heading-text">
                <h1 class="section-heading">What do people feel...</h1>
              </div>
            </div>
            <div class="row mt-2 w-100 d-flex justify-content-around ">
              <div class="testimonial-card col-sm ">
                <img src={user1} alt="" />
                <img class="quote" src={Quote} alt="" />
                <div class="testi-card-text testimonial-text">
                  <h2>RICHARD</h2>
                  <p>
                    Great experience buying tickets from you,I will buy it again for my next trip 
                  </p>
                </div>
              </div>
              <div class="testimonial-card col-sm">
                <img src={user2} alt="" />
                <img class="quote" src={Quote} alt="" />
                <div class="testi-card-text testimonial-text">
                  <h2>THOMAS</h2>
                  <p>
                    I find TravelPey quick &amp; easy,the pricing is great.thank you SAM.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* city image footer */}
          <div class="mahel container d-flex justify-content-center">
            <img src={City} alt="" />
          </div>
    </>
  )
}

export default Trading