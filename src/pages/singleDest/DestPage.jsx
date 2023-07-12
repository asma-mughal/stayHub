import React from 'react'
import { mainDest, star1, home, guest, bedroom, bathroom } from '../../assets'
import { aminities, destinatons } from '../../constants'
import { useParams } from 'react-router-dom'

const DestPage = () => {
  const { id } = useParams()
  console.log(id)
  const record = destinatons.find((i)=> i.id === id);
  console.log(record)
  const starImagePath = "star.png";

  const stars = [];
  for (let i = 0; i < record.review; i++) {
    stars.push(<img src={starImagePath} alt="Star" />);
  }
  return (
   <>
    <div class="w-full h-auto font-poppins">
  <img class="object-cover w-full h-full" src={record.icon} alt="Image" />
</div>
<div class="flex flex-row items-center my-5 ">
  {
    Array.from({ length: record.review }, (_, index) => (
      <img key={index} src={star1}
      className='w-3 h-3 m-1'
      alt="Star" />
    ))
  }
   <span className={`text-sm 
   text-justify text-gray-500 ml-2
   `}>
{record?.review} reviews</span>  
    </div>
    <div className='flex-col flex'>
    <h1 className={`text-[24px] font-poppins mb-2 font-bold text-heading leading-[30.8px]`}>
      {record?.title}{' '}|{' '}{record?.location}
    </h1>
    <h1 class=" font-semibold text-heading font-poppins mb-2">The Space</h1>
<p className={`text-xs 
    text-justify text-gray-500 font-poppins
    my-2 xs:text-xs sm:text-base md:text-sm lg:text-base xl:text-xl
    `}>
 Welcome to our popular destinations section, where we unveil a curated collection of captivating
  locations that are beloved by travelers worldwide. 
  Whether you seek the tranquility of 
  a beachside retreat, the vibrant energy of a bustling city, or the charm of a historic town, 
  our selection of popular destinations offers something for every wanderlust-filled soul. 
  Prepare to embark on an unforgettable journey as we highlight the unique experiences and 
  hidden gems that await you.</p> 
  <h1 class=" font-semibold text-heading mb-2 font-poppins">Description</h1>
<p className={`text-xs 
    text-justify text-gray-500 font-poppins
    my-2 xs:text-xs sm:text-base md:text-sm lg:text-base xl:text-xl
    `}>
 Welcome to our popular destinations section, where we unveil a curated collection of captivating
  locations that are beloved by travelers worldwide. 
  Whether you seek the tranquility of 
  a beachside retreat, the vibrant energy of a bustling city, or the charm of a historic town, 
  our selection of popular destinations offers something for every wanderlust-filled soul. 
  Prepare to embark on an unforgettable journey as we highlight the unique experiences and 
  hidden gems that await you.</p> 
  <h1 class=" font-semibold text-heading mb-2">Property Features</h1>
  <div class="container my-2">
  <div class="w-full lg:w-1/2 xl:w-1/2 ">
    <div class="flex flex-wrap items-start  justify-between">
        
                <div class="w-2/6 mb-3 lg:mt-0  md:w-2/5 lg:w-1/6" >
                <div class="flex flex-col pr-4 items-center justify-start">
                  <img src={home} className="h-6 w-6 mb-3" />
                  <p className='text-xs'>{record.details.home}Home</p>
                </div>
                
              </div>
              <div class="w-2/6 mb-3 lg:mt-0  md:w-2/5 lg:w-1/6" >
                <div class="flex flex-col pr-4 items-center justify-start">
                  <img src={bedroom} className="h-6 w-6 mb-3" />
                  <p className='text-xs'>{record.details.bedrooms} Bedroom</p>
                </div>
                
              </div>
              <div class="w-2/6 mb-3 lg:mt-0  md:w-2/5 lg:w-1/6" >
                <div class="flex flex-col  items-center justify-start">
                  <img src={bedroom} className="h-6 w-6 mb-3" />
                  <p className='text-xs'>{record.details.guest} Guest</p>
                </div>
                
              </div>
              <div class="w-2/6 mb-3 lg:mt-0  md:w-2/5 lg:w-1/6" >
                <div class="flex flex-col pr-4 items-center justify-start">
                  <img src={bedroom} className="h-6 w-6 mb-3" />
                  <p className='text-xs'>{record.details.bathroom} Bathroom</p>
                </div>
                
              </div>
    </div>
  </div>
</div>
    <h1 class=" font-semibold text-heading mb-2">Aminities</h1>
    <div class="container my-2">
  <div class="w-full lg:w-1/2 xl:w-1/2 ">
    <div class="flex flex-wrap items-start  justify-between">
        {aminities?.map((i)=>{
            return (
                <div class="w-2/6 mb-3 lg:mt-0  md:w-2/5 lg:w-1/6"
                key={i?.id}
                >
                <div class="flex flex-col pr-4 items-center justify-start">
                  <img src={i.icon} className="h-6 w-6 mb-3" />
                  <p className='text-xs'>{i?.title}</p>
                </div>
              </div>
            )
        })}
    
    </div>
  </div>
</div>




  </div>
   </>
  )
}

export default DestPage
