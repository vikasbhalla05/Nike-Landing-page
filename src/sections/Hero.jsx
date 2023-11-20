import React from 'react'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'
import { statistics } from '../constants'
import { bigShoe1 } from '../assets/images'

const Hero = () => {
  return (
    <section className='max-container min-h-screen flex flex-col lg:flex-row gap-10 w-full justify-center'>
      <div className='relative xl:w-2/5 flex flex-col items-start justify-center w-full pt-28 max-lg:padding-x'>

        <p className='text-lg font-montserrat text-coral-red'>Our Summer Collection</p>

        <h1 className='mt-10 text-8xl font-palanquin font-bold max-sm:leading-[82px] max-sm:text-[72px]'>
          <span className='xl:bg-white xl:whitespace-nowrap relative pr-10 z-10'>The New Arrivals</span>
          <br/>
          <span className='text-coral-red inline-block mt-3'>Nike</span> Shoes
        </h1>
        <p className=' text-lg font-montserrat text-slate-gray leading-8 mt-6 mb-14 sm:max-w-sm'>
        Discover stylish Nike arrivals, quality comfort, and innovation for your active life.
        </p>

        <Button label="New Arrivals" iconUrl={arrowRight}/>

        {/* stats */}
        <div className='flex items-start justify-start flex-wrap w-full mt-20 gap-16'>
          {statistics.map((stat, idx) => 
            (
              <div key={stat.label}>
                <p className='text-4xl font-bold font-palanquin'>{stat.value}</p>
                <p className='font-montserrat leading-7 text-slate-gray'>{stat.label}</p>
              </div>
            )
          )}
        </div>
      </div>

      <div className='relative flex-1 flex justify-center items-center bg-primary bg-hero bg-center bg-cover xl:min-h-screen mx-xl:py-40'>
        <img 
          src={bigShoe1}
          className='w-auto h-[50%] object-contain relative z-10'
          alt='shoe collections'
        />
      </div>
    </section>
  )
}

export default Hero