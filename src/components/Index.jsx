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
import Testimonial from './Testimonial'
import Kidszone from './Kidszone'
import Bookappointment from './Bookappointment'
import Blogs from './Blogs'
import Footer from './Footer'


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
        <Testimonial />
        <Kidszone />
        <Bookappointment />
        <Blogs />
        <Footer />
    </div>
  )
}
export default index