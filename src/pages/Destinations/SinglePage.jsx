import React from 'react'
import CardDest from '../../components/Destinations/CardDest';
import { destinatons } from '../../constants';
import Footer from '../../components/Footer/Footer';

const SinglePage = () => {
  return (
    <>
     <div className="flex flex-col md:flex-row font-poppins">
    <div className="md:w-1/2 p-4  ">
    <h1 className={`text-[24px] font-poppins font-bold text-heading leading-[30.8px]`}>Stay Hub</h1>
   
    <p className={`text-xs 
    text-justify text-gray-500
    my-2 xs:text-xs sm:text-base md:text-sm lg:text-base xl:text-xl
    `}>
 Welcome to our popular destinations section, where we unveil a curated collection of captivating
  locations that are beloved by travelers worldwide. 
  Whether you seek the tranquility of 
  a beachside retreat, the vibrant energy of a bustling city, or the charm of a historic town, 
  our selection of popular destinations offers something for every wanderlust-filled soul. 
  Prepare to embark on an unforgettable journey as we highlight the unique experiences and 
  hidden gems that await you.</p>  
   
    </div>
  
   
  </div>
  <div className="md:w-1/2 p-4">
    <h1 className={`text-[24px] font-poppins font-bold text-heading leading-[30.8px]`}>Popular Destinations</h1>
    <p className={`text-xs my-2 xs:text-xs sm:text-base md:text-sm lg:text-base xl:text-xl
    text-justify font-poppins text-gray-500
    `}>From pristine beaches with crystal-clear waters to majestic mountains with panoramic views, breathtaking beauty at every turn.</p>  
    </div>
  <CardDest data ={destinatons}
   start={0}
   end={6}
   link={true}
  />

    </>

  )
}

export default SinglePage
