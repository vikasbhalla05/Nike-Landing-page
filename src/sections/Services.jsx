import React from 'react'
import { services } from '../constants'
import ServiceCard from '../components/ServiceCard'

const Services = () => {
  return (
    <section className='flex flex-wrap justify-center items-center max-container gap-10'>
      {
        services.map((service)=> (
          <ServiceCard key={service.label} {...service}/>
        ))
      }
    </section>
  )
}

export default Services