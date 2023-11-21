import React from 'react'

const ShoeCard = ({imgUrl,setBigShoeImg,bigShoeImg}) => {

    const handleThumbClick = () => {
        console.log(bigShoeImg)
        if(bigShoeImg !==imgUrl.bigShoe) setBigShoeImg(prev => imgUrl.bigShoe)
    }

  return (
    <div 
        className={`border-2 rounded-xl 
            ${bigShoeImg===imgUrl.bigShoe ? 'border-coral-red' : 'border-transparent'}
            cursor-pointer max-sm:flex-1
        `}

        onClick={handleThumbClick}
    >
    <div className='flex justify-center items-center bg-card bg-center bg-cover
    sm:w-40 sm:h-40 rounded-xl max-sm:p-4'>
      <img src={imgUrl.thumbnail}
      alt='shoe'
      className='object-container'
      width={126}
      height={100}
     />
    </div>
     
    </div>
  )
}

export default ShoeCard