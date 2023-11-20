import React from 'react'

const Button = (props) => {
    const {label, iconUrl} = props;
    return (
        <button className='bg-coral-red hover:bg-red-500 text-white py-3 px-5 
        rounded-full flex justify-center items-center gap-2 font-montserrat text-lg'>
            {label}
            <img src={iconUrl}/>
        </button>
    )
}

export default Button