import React from 'react'
import { bathroom, bedroom, guest, home, location } from '../../assets'
import { destinatons } from '../../constants'
import { Link } from 'react-router-dom'
const CardDest = ({data, start, end,link}) => {
  return (
    <div class="px-3 font-poppins">
    <div class="flex flex-wrap -mx-1 lg:-mx-4">
        {data?.slice(start,end).map((i)=>{
            return (
                <div class="my-1 px-1 w-full md:w-1/2 lg:my-4
                transform hover:scale-95 transition-transform duration-300 ease-in-out
                lg:px-4 lg:w-1/3"
                key={i.id}
                >
                <article class="overflow-hidden rounded-lg shadow-lg">
                    <a href="#">
                        <img alt="Placeholder" class="block lg:h-80 xl:h-80 w-full"
                         src={i.icon} />
                    </a>
    
                    <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                        <h1 class="text-lg">
                        <Link to={link ? `/single/${i.id}` : ''}>
                            <a class="no-underline hover:underline font-semibold 
                            text-heading" href="#">
                             {i?.title}
                            </a>
                            </Link>
                        </h1>
                        
                        {i.location &&<div className="flex items-center justify-center">
                        <img src={location} alt="Location Icon" className="w-4 h-4 m-1" />
        <span className="text-gray-600 text-sm mr-2">{i.location}</span>
       
      </div> }
     
                        
                    </header>
                    {i.description && <p className='pb-5 px-2 lg:px-4
xl:px-4 md:px-4
                    
                    '>{i.description}</p>}
                    {i.details &&      
                    <div className="flex">
      <div className="w-1/4 p-4 text-center border-r">
        <div className="mb-2">
        <img src={home} alt="Icon 1" className="w-5 h-5 mx-auto" />
        </div>
        <p className='text-xs'>{i?.details?.home}Home</p>
      </div>
      <div className="w-1/4 p-4 text-center border-r">
        <div className="mb-2">
        <img src={guest} alt="Icon 1" className="w-5 h-5 mx-auto" />
        </div>
        <p className='text-xs'>{i?.details?.guest} Guests</p>
      </div>
      <div className="w-1/4 p-4 text-center border-r">
        <div className="mb-2">
        <img src={bedroom} alt="Icon 1" className="w-5 h-5 mx-auto" />
        </div>
        <p className='text-xs'>{i?.details?.bedrooms} Boudoir</p>
      </div>
      <div className="w-1/4 p-4 text-center">
        <div className="mb-2">
        <img src={bathroom} alt="Icon 1" className="w-5 h-5 mx-auto" />
        </div>
        <p className='text-xs'>{i.details.bathroom} lavatory</p>
      </div>
    </div> }
              
                   {i.price && <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                        <a class="flex items-center no-underline hover:underline text-black" href="#">
                            <p class="ml-2 text-sm">
                               ${i?.price} per night
                            </p>
                        </a>
                     
                    </footer>}
                   
    
                </article>
    
            </div>
            )
        })}
   
     
      
       
 
       

    </div>
</div>
  )
}

export default CardDest
