import React from 'react'
import { star } from '../assets/icons'

const ReviewCard = (props) => {

    const {imgURL, customerName, rating, feedback} = props

  return (
    <div className='flex flex-1 flex-col items-center gap-2'>
        <img src={imgURL} alt={customerName} className='w-[25%] h-auto rounded-full object-cover'/>

        <p className='info-text text-center mt-4 text-slate-gray max-w-lg m-auto'>
            {feedback}
        </p>
        
        <div className='flex flex-1 gap-2 item'>
            <img 
            src={star}
            alt="star"
            className="w-[24] h-[24]"
          />
          <p className='info-text lg:max-w-lg'> ({rating})</p>
        </div>
        
        <h3 className='text-2xl font-semibold font-palanquin mt-2'>{customerName}</h3>   
    </div>
  )
}

export default ReviewCard