import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero';
import styles from '../style';
import Destination from './Destinations/Destination';
import Modern from './Modern/Modern';
import MemStay from './Memorable/MemStay';
import Gallery from './Gallery/Gallery';
import Footer from './Footer/Footer';
const Dashboard = () => {
  return (
    <div className=" w-full overflow-hidden">
    

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero heading={false}
        name="/Image.png"
        />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.marginY}  ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
       <Destination  />
       <Modern />
       <MemStay />
       <Gallery />
     
      </div>
    </div>
    <Footer news={true}/>
  </div>
  )
}

export default Dashboard
