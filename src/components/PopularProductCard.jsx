import React from 'react'
import {arrowRight, star} from "../assets/icons"
import Button from './Button'
import AddToCartButton from './AddToCartButton'

const PopularProductCard = ({imgURL, name, price}) => {
  return (
    <div className='flex flex-1 flex-col w-full'>
        <img src={imgURL}
            alt={name}
            className='w-[280px] h-[280px]'
        />
        <div className='mt-8 max-sm:mt-4 flex justify-start gap-2.5'>
          <img 
            src={star}
            alt="star"
            className="w-[24] h-[24]"
          />
          <p className='text-slate-gray font-montserrat text-xl leading-normal'>(4.5)</p>
        </div>
        <h3 className='text-2xl font-semibold font-palanquin mt-2'>{name}</h3>
        <p className='font-semibold font-montserrat mt-2 text-xl text-coral-red'>{price}</p>
        <AddToCartButton label="Add To Cart" iconUrl={arrowRight}/>
    </div>
  )
}

export default PopularProductCard