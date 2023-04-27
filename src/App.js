import React from 'react'
import Navbar from './components/Navbar'
import Landingpage from './components/Landingpage'
import Seconpage from './components/Secondpage'
import Trading from './components/Trading'
import Footer from './components/Footer'
import Flights from './components/Flights'
import Mobile from './components/Mobile'

import $ from 'jquery'

const App = () => {
  function goto(){
    if(Screen.width < 786)
    {

    }
    else
    {  
        $('#loadcontent').modal('show');
        $('#ifmReport').css({'min-height':'600px'});
        $('#ifmReport').attr('src', './components/Mobile.js');

    }

    }
  return (
    <div className='App'>
        <Navbar />
        <Landingpage />
        <Seconpage />
        <Flights />
        <Trading />
        <Footer />
    </div>
  )
}

export default App