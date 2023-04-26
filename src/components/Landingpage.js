import React from 'react'
import Bags from '../../src/images/bags-rebg.png'

const Landingpage = () => {
  return (
    <div>
      <div class="container-fluid landing">

        <div class="row ">
          <div class="col-4 w-50 d-flex justify-content-center">
            <img class="flights-landing-img" src={Bags} alt="" />
          </div>
          <div class="col-6 ">
            <h1 class="landing-hefirst mt-5" style={{ color: "white" }}> FLIGHTS</h1>
            <b style={{
              backgroundColor: "#ffd700",
              fontSize: "19px",
              padding: "4px"
            }}>Get 20% off on your first flight</b>
            <ul class="submenu mt-2">

              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="flight_type" id="inlineRadio1" checked="" value="1" />
                <label class="form-check-label" for="inlineRadio1">One-way </label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="flight_type" id="inlineRadio2" value="2" />
                <label class="form-check-label" for="inlineRadio2">Round-trip</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="flight_type" id="inlineRadio3" value="3" />
                <label class="form-check-label" for="inlineRadio3">Multi-city</label>
              </div>
            </ul>
            <div class="row">
              <div class="col-6">
                <div class="item-landing">
                  <i class="fa-sharp fa-solid fa-location-dot icon"></i>
                  <input name="check-in " type="text" id="search" class="form-control  form-select form-select-sm" placeholder="Where form ?" />

                  <ul class="list-group " id="result"></ul>
                </div>

              </div>
              <div class="col-6">
                <div class="item-landing ">
                  <i class="fa-sharp fa-solid fa-location-dot icon"></i>
                  <input name="check-in" type="text" id="search1" class="form-control form-select form-select-sm" placeholder="Where to ?" />
                  <ul class="list-group" id="result1"></ul>
                </div>

              </div>
              {/* <div class="col-6 mt-4">
                <div class="item-landing" style={{position: "relative"}}>
                  <i class="fa-solid fa-calendar icon"></i>
                  <input type="text" name="" class="datepicker" id="departure_date1" placeholder="Departure Date" />
                  <div class="qs-datepicker qs-hidden">
                    <div class="qs-controls">
                      <div class="qs-arrow qs-left"></div>
                      <div class="qs-month-year">
                        <span class="qs-month">April</span>
                        <span class="qs-year">2023</span>
                      </div>
                      <div class="qs-arrow qs-right"></div>
                    </div>
                    <div class="qs-squares">
                      <div class="qs-square qs-day">Sun</div>
                      <div class="qs-square qs-day">Mon</div>
                      <div class="qs-square qs-day">Tue</div>
                      <div class="qs-square qs-day">Wed</div>
                      <div class="qs-square qs-day">Thu</div>
                      <div class="qs-square qs-day">Fri</div>
                      <div class="qs-square qs-day">Sat</div>
                      <div class="qs-square qs-num Sun qs-empty"></div>
                      <div class="qs-square qs-num Mon qs-empty"></div>
                      <div class="qs-square qs-num Tue qs-empty"></div>
                      <div class="qs-square qs-num Wed qs-empty"></div>
                      <div class="qs-square qs-num Thu qs-empty"></div>
                      <div class="qs-square qs-num Fri qs-empty"></div>
                      <div class="qs-square qs-num Sat "><span class="qs-num">1</span></div><div class="qs-square qs-num Sun "><span class="qs-num">2</span></div><div class="qs-square qs-num Mon "><span class="qs-num">3</span></div><div class="qs-square qs-num Tue "><span class="qs-num">4</span></div><div class="qs-square qs-num Wed "><span class="qs-num">5</span></div><div class="qs-square qs-num Thu "><span class="qs-num">6</span></div><div class="qs-square qs-num Fri "><span class="qs-num">7</span></div><div class="qs-square qs-num Sat "><span class="qs-num">8</span></div><div class="qs-square qs-num Sun "><span class="qs-num">9</span></div><div class="qs-square qs-num Mon "><span class="qs-num">10</span></div><div class="qs-square qs-num Tue "><span class="qs-num">11</span></div><div class="qs-square qs-num Wed "><span class="qs-num">12</span></div><div class="qs-square qs-num Thu "><span class="qs-num">13</span></div><div class="qs-square qs-num Fri "><span class="qs-num">14</span></div><div class="qs-square qs-num Sat "><span class="qs-num">15</span></div><div class="qs-square qs-num Sun "><span class="qs-num">16</span></div><div class="qs-square qs-num Mon "><span class="qs-num">17</span></div><div class="qs-square qs-num Tue "><span class="qs-num">18</span></div><div class="qs-square qs-num Wed "><span class="qs-num">19</span></div><div class="qs-square qs-num Thu "><span class="qs-num">20</span></div><div class="qs-square qs-num Fri "><span class="qs-num">21</span></div><div class="qs-square qs-num Sat "><span class="qs-num">22</span></div><div class="qs-square qs-num Sun "><span class="qs-num">23</span></div><div class="qs-square qs-num Mon "><span class="qs-num">24</span></div><div class="qs-square qs-num Tue "><span class="qs-num">25</span></div><div class="qs-square qs-num Wed qs-current"><span class="qs-num">26</span></div><div class="qs-square qs-num Thu "><span class="qs-num">27</span></div><div class="qs-square qs-num Fri "><span class="qs-num">28</span></div><div class="qs-square qs-num Sat "><span class="qs-num">29</span></div><div class="qs-square qs-num Sun "><span class="qs-num">30</span></div><div class="qs-square qs-num Mon qs-empty"></div><div class="qs-square qs-num Tue qs-empty"></div><div class="qs-square qs-num Wed qs-empty"></div><div class="qs-square qs-num Thu qs-empty"></div><div class="qs-square qs-num Fri qs-empty"></div><div class="qs-square qs-num Sat qs-empty"></div></div>
                    <div class="qs-overlay qs-hidden">
                      <div class="qs-close">✕</div>
                      <input type="number" class="qs-overlay-year" placeholder="4-digit year" />
                      <div class="qs-submit qs-disabled">Submit</div>
                    </div>
                  </div></div>

              </div> */}
              <div class="col-6 mt-4">
                <div class="item-landing">
                  <i class="fa-solid fa-user icon"></i>
                  <select class="form-select form-select-sm" id="passenger_count1" aria-label=".form-select-lg example">
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
              <div class="col-6 mt-4">
                <div class="item-landing">
                  <i class="fa-solid fa-user icon"></i>
                  <select class="form-select form-select-sm" id="child_f1" aria-label=".form-select-lg example">
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
              <div class="col-6 mt-4">
                <div class="item-landing">
                  <i class="fa-solid fa-user icon"></i>
                  <select class="form-select form-select-sm" id="economy1" aria-label=".form-select-lg example">
                    <option value="Economy">Economy</option>
                    <option value="First-class">First-class</option>
                    <option value="Business-class">Business-class</option>
                  </select>
                </div>

              </div>
              <div class="col-12 mt-4">
                <div class="item-landing">
                  <i class="fa-solid fa-user icon"></i>
                  <input type="number" name="" class="datepicker" id="mobile_number" placeholder="Enter Mobile Number" />
                </div>

              </div>

              <div class="col-12">
                <div class="btn-row mt-4">
                  <button class="landing-btn" onclick="send_email();">Instant Book</button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landingpage