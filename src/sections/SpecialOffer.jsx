import React from 'react'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'
import { offer, shoe8 } from '../assets/images'

const SpecialOffer = () => {
  return (
    <section className='max-container flex justify-between items-center gap-10 w-full max-xl:flex-col-reverse'>
      
      <div className='flex flex-1 justify-center items-center'>
        <img 
          src={offer}
          className='object-contain w-full'
        />
      </div>

      <div className='flex flex-1 flex-col'>

        <h2 className='text-4xl font-palanquin font-bold capitalize max-sm:leading-[82px] max-sm:text-[72px] lg:max-w-lg'>
          <span className='text-coral-red'>Special</span> Offer
        </h2>
        <p className='mt-4 info-text lg:max-w-lg'>
        Lorem ipsum is placeholder text commonly used in the graphic, print, 
        and publishing industries for previewing layouts and visual mockups.
        </p>

        <p className='mt-4 info-text lg:max-w-lg'>
          Lorem ipsum is placeholder text commonly used in the graphic, print, 
        and publishing industries for previewing layouts and visual mockups.
        </p>

        <div className='mt-11 flex flex-row gap-5'>
          <Button label="View Details" iconUrl={arrowRight} type="red"/>
          <Button label="View Details" type="gray"/>
        </div>
        
      </div>

    </section>
  )
}

export default SpecialOffer