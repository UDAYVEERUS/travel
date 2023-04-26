import React from 'react'
import Navbar from './components/Navbar'
import Landingpage from './components/Landingpage'
import Seconpage from './components/Secondpage'
import Trading from './components/Trading'
import Footer from './components/Footer'
import Flights from './components/Flights'

const App = () => {
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