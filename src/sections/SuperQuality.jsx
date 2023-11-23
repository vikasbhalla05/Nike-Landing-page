import React from 'react'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'
import { shoe8 } from '../assets/images'

const SuperQuality = () => {
  return (
    <section className='max-container flex flex-1 justify-between items-center gap-10 w-full max-lg:flex-col'>
      <div className='flex flex-1 flex-col'>

        <h2 className='text-4xl font-palanquin font-bold capitalize max-sm:leading-[82px] max-sm:text-[72px] lg:max-w-lg'>
          We Provide You <span className='text-coral-red'>Super</span>
          <br/>
          <span className='text-coral-red'>Quality</span> Shoes
        </h2>
        <p className='mt-4 info-text lg:max-w-lg'>
        Lorem ipsum is placeholder text commonly used in the graphic, print, 
        and publishing industries for previewing layouts and visual mockups.
        </p>

        <p className='mt-4 info-text lg:max-w-lg'>
          Lorem ipsum is placeholder text commonly used in the graphic, print, 
        and publishing industries for previewing layouts and visual mockups.
        </p>

        <div className='mt-11'>
          <Button label="View Details" iconUrl={arrowRight}/>
        </div>
        
      </div>

      <div className='flex flex-1 justify-center items-center'>
        <img 
          src={shoe8}
          className='object-container'
        />
      </div>
    </section>
  )
}

export default SuperQuality