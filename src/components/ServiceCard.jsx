import React from 'react'

const ServiceCard = ({imgURL,label,subtext}) => {
    console.log(imgURL)
  return (
    <div className='rounded-md shadow-3xl ring-1 ring-gray-100 shadow-gray-200 px-10 py-16 w-full sm:max-w-md'>
        <div className='bg-coral-red p-2 rounded-full w-11 h-11'>
            <img src={imgURL} alt={label} className='w-full h-auto'/>
        </div>
        <h3 className='text-2xl font-semibold font-palanquin mt-2'>{label}</h3>
        <p className='mt-4 info-text lg:max-w-lg'>{subtext}</p>
    </div>
  )
}

export default ServiceCard