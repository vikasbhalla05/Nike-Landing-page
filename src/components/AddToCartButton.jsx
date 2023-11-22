import React from 'react'

const AddToCartButton = (props) => {
    const {label, iconUrl} = props;

    return (
        <button className='bg-coral-red hover:bg-red-500 text-white py-3 px-5 
        rounded-full flex justify-center items-center gap-2 font-montserrat text-lg mt-4 max-w-[70%] max-lg:max-w-[90%] max-sm:max-w-[280px]'>
            {label}
            <img src={iconUrl}/>
        </button>
    )
}

export default AddToCartButton