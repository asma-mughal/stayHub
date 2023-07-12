import React from 'react'
import Hero from '../../components/Hero';
import Footer from '../../components/Footer/Footer';
import Contact from '../../components/Contact';
import styles from '../../style';
import Navbar from '../../components/Navbar';
import DestPage from './DestPage';
const SingleDest = () => {
  return (
    <div className="w-full overflow-hidden">
    

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar 
        background={true}
        />
      </div>
    </div>
    <div className={`bg-primary ${styles.paddingX} ${styles.marginY}  ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <DestPage />
        <Contact />
        </div>
        </div>
        <Footer 
 news={false}
  />
  </div>
  )
}

export default SingleDest
