import React from 'react'
import Navbar from './Navbar'
import Herosection from './Herosection'
import Smilesimulater from './Smilesimulater'
import HealthScore from './HealthScore'
import Service from './Service'
import TreatmentExplore from './TreatmentExplore'
import Costestimater from './Costestimater'

const index = () => {
  return (
    <div className="">
        <Navbar />
        <Herosection />
        <Smilesimulater />
        <HealthScore />
        <TreatmentExplore />
        <Service />
        <Costestimater />
    </div>
  )
}
export default index