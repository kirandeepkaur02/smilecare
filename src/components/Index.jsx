import React from 'react'
import Navbar from './Navbar'
import Herosection from './Herosection'
import Smilesimulater from './Smilesimulater'
import HealthScore from './HealthScore'

const index = () => {
  return (
    <div className="">
        <Navbar />
        <Herosection />
        <Smilesimulater />
        <HealthScore />
    </div>
  )
}
export default index