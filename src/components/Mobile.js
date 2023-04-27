import React from 'react'

const Mobile = () => {
  return (
    <div id='MobileView' style={{display:"none"}} >
    <a href="tel:+1 8886763247" className=" anchor-call2">
        <div className="container call-screen bg-theme">
                <span className="fs-3 text-nowrap d-block" style={{color: "rgb(38, 38, 38)"}}>Call for reservation</span>
                <span className="text-center" style={{fontSize: "16px", fontWeight:"600",color: "rgb(38, 38, 38)"}}>Bookings, Cancellations, Changes and Inquiry</span>
                <span className="mobile-no text-nowrap" href="tel:+1 8886763247" style={{color: "rgb(38, 38, 38)"}}> +1 8886763247</span>
                <span className="fs-1 text-nowrap" style={{color: "rgb(38, 38, 38)"}}>Click To Call :</span>      
        </div>
        </a>
        <a href="tel:+1 8886763247">
        <div className="bottom-no bg-yellow">
             <i className="fa-solid fa-phone"></i>
             <span className=" text-nowrap" href="tel:+1 8886763247" style={{color:"rgb(38, 38, 38)",fontWeight: "500"}}> +1 8886763247</span>
        </div>
        </a>
</div>
  )
}

export default Mobile