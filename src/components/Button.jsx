import React from 'react'

const Button = (props) => {
    const {label, iconUrl, type} = props;
    return (
        <button className={`${type==="red" ? "border-solid border-1 border-coral-red hover:border-red-500 bg-coral-red hover:bg-red-500 text-white" : "bg-white border-solid border-1 border-slate-gray hover:text-black hover:border-black text-slate-gray"} 
        py-3 px-5 rounded-full flex justify-center items-center gap-2 font-montserrat text-lg`}>
            {label}
            {iconUrl && <img src={iconUrl}/>}
        </button>
    )
}

export default Button