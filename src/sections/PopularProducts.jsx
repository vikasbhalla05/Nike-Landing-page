import React from 'react'
import { products } from '../constants'
import PopularProductCard from '../components/PopularProductCard'

const PopularProducts = () => {
  return (
    <section className='max-container max-sm:mt-12'>
      <div className='flex flex-col justify-start items-start gap-6'>
        <h2 className='text-4xl font-palanquin'>Our <span className='text-coral-red'>Popular</span> Products</h2>
        <p className='text-slate-gray font-montserrat text-justify max-sm:w-full w-[50%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
      </div>

      <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-10'>
        {products.map((product)=>(
          <PopularProductCard id={product.name} {...product}/>
        ))}
      </div>
    </section>
  )
}

export default PopularProducts