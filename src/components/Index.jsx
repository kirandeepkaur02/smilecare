import React from 'react'
import Navbar from './Navbar'
import Herosection from './Herosection'
import Smilesimulater from './Smilesimulater'
import HealthScore from './HealthScore'
import Service from './Service'
import TreatmentExplore from './TreatmentExplore'
import Costestimater from './Costestimater'
import Smilesstories from './Smilesstories'
import Virtualtour  from './Virtualtour'
import Doctors from "./Doctors"


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
        <Smilesstories />
        <Virtualtour />
        <Doctors />
    </div>
  )
}
export default index