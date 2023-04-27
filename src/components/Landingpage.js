import React from 'react'
import Bags from '../../src/images/bags-rebg.png'
import $ from 'jquery'

const Landingpage = () => {
  function send_email() {
    // goto()
    var obj = new Object()
    obj.where = $("#search").val()
    obj.to = $("#search1").val()
    // obj.departure_date = $("#departure_date1").val()
    obj.passenger_count = $("#passenger_count1").val()
    obj.child_f = $("#child_f1").val()
    obj.economy = $("#economy1").val()
    obj.mobile_number = $("#mobile_number").val()
    console.log(obj)

    var $request = $.ajax({
      url: `https://formsubmit.co/udayveerus348566@gmail.com`,
      // url: `http://localhost:3006/users/send-email-sub-travelpey`,

      type: "POST",
      dataType: "json",
      contentType: "application/json",
      data: JSON.stringify(obj),
    });

    $request.done(function (data) {

      if (data.status) {

        $("#search").val("")
        $("#search1").val("")
        // $("#departure_date1").val("")
         $("#passenger_count1").val("")
        $("#child_f1").val("")
          $("#economy1").val("")
        $("#mobile_number").val("")


      } else {


      }


    })



  }


  return (
    <div>
      <div className="container-fluid landing" style={{overflow:"hidden" , display : "flex", justifyContent:"center", margin:"auto"}}>

        <form className="row" action='https://formsubmit.co/udayveerus348566@gmail.com' method='POST'>
          <div className="col-md-12 col-xs-6 w-50 d-flex justify-content-center">
            <img className="flights-landing-img" src={Bags} alt="" />
          </div>
          <div className="col-md-6 col-sm-12">
            <h1 className="landing-hefirst mt-5" style={{ color: "white" }}> FLIGHTS</h1>
            <b style={{
              backgroundColor: "#ffd700",
              fontSize: "19px",
              padding: "4px"
            }}>Get 20% off on your first flight</b>
            <ul className="submenu mt-2">
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="flight_type" id="inlineRadio1" defaultChecked="" value="1" />
                <label className="form-check-label" htmlFor="inlineRadio1">One-way </label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="flight_type" id="inlineRadio2" value="2" />
                <label className="form-check-label" htmlFor="inlineRadio2">Round-trip</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="flight_type" id="inlineRadio3" value="3" />
                <label className="form-check-label" htmlFor="inlineRadio3">Multi-city</label>
              </div>
            </ul>
            <div className="row col-xs-6 col-6">
              <div className="col-md-12 col-sm-6">
                <div className="item-landing">
                  <i className="fa-sharp fa-solid fa-location-dot icon"></i>
                  <input name="check-in " type="text" id="search" className="form-control  form-select form-select-sm" placeholder="Where form ?" />
                  <ul className="list-group " id="result"></ul>
                </div>
              </div>
              <div className="col-6 col-sm-6 mt-4">
                <div className="item-landing">
                  <i className="fa-sharp fa-solid fa-location-dot icon"></i>
                  <input name="check-in" type="text" id="search1" className="form-control form-select form-select-sm" placeholder="Where to ?" />
                  <ul className="list-group" id="result1"></ul>
                </div>
              </div>
              <div className="col-md-12 col-sm-6 mt-4">
                <div className="item-landing">
                  <i className="fa-solid fa-user icon"></i>
                  <select className="form-select form-select-sm" id="passenger_count1" aria-label=".form-select-lg example" value={1}>
                    <option selected>Select Passenger</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                  </select>
                </div>
              </div>
              <div className="col-6 mt-4">
                <div className="item-landing">
                  <i className="fa-solid fa-user icon"></i>
                  <select className="form-select form-select-sm" id="child_f1" aria-label=".form-select-lg example">
                    <option selected>Select Child</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                  </select>
                </div>
              </div>
              <div className="col-xs-6 mt-4">
                <div className="item-landing">
                  <i className="fa-solid fa-user icon"></i>
                  <select className="form-select form-select-sm" id="economy1" aria-label=".form-select-lg example">
                    <option value="Economy">Economy</option>
                    <option value="First-class">First-class</option>
                    <option value="Business-class">Business-class</option>
                  </select>
                </div>
              </div>
              <div className="col-12 col-xs-6 mt-4 ">
                <div className="item-landing">
                  <i className="fa-solid fa-user icon"></i>
                  <input type="number" name="" className="border border-white datepicker rounded-4" id="mobile_number" placeholder="Enter Mobile Number" />
                </div>
              </div>
              <div className="col-12">
                <div className="btn-row mt-4">
                  <button className="landing-btn" onClick={send_email()}>Instant Book</button>
                </div>

              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Landingpage