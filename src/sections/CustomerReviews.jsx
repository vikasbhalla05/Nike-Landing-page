import React from 'react'
import { reviews } from '../constants'
import ReviewCard from '../components/ReviewCard'

const CustomerReviews = () => {
  return (
    <section className='max-container'>
      <h3 className='text-center font-palanquin text-4xl font-bold'>
        What Our <span className='text-coral-red'>Customers</span> Say?
      </h3>

      <p className='info-text text-center mt-4 text-slate-gray max-w-lg m-auto'>
        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
      </p>

      <div className='flex flex-1 justify-evenly items-center max-lg:flex-col gap-24 mt-24'>
        {reviews.map((review) => (
          <ReviewCard key={review.customerName} {...review}/>
        ))}
      </div>
    </section>
  )
}

export default CustomerReviews