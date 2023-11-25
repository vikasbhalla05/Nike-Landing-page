import React from 'react'
import Button from "../components/Button"

const Subscribe = () => {
  return (
    <section className='max-container my-10 flex justify-between gap-10 items-center max-lg:flex-col' id='contact-us'>
      <h3 className='text-center font-palanquin text-4xl font-bold'>
        Sign Up for <span className='text-coral-red'>Updates</span> & Newsletter
      </h3>

      <div className='flex border-solid border-2 border-slate-gray p-2 rounded-full max-lg:w-[80%] w-[40%]'>
        <input type='email'
          placeholder='subscribe@nike.com'
          className='input bg-transparent'
        />
        <div>
          <Button label="Sign Up" type="red"/>
        </div>
      </div>
    </section>
  )
}

export default Subscribe