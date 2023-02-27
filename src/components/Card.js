import Image from 'next/image'
import React from 'react'

const Card = ({img, title, description, me}) => {
  return (
    <div className="md:p-6 bg-[#27292d] shadow-2xl rounded-lg text-white relative pb-10">
            <Image
              className="rounded-lg hover:scale-105 cursor-pointer transition-all 2s ease-linear"
              src={img}
              width={400}
              height={400}
              alt="nft"
            />
            <h1 className="font-bold mt-2">{title}</h1>
            <h1 className="mt-2 text-gray-400 h-[130px] mb-4 overflow-auto">{description}</h1>
            <a href={me} className="absolute bottom-4 bg-purple-500 rounded-lg text-white px-4 cursor-pointer hover:bg-white hover:text-purple-500 border-2 transition-all 2s ease-linear border-purple-500 cursor-pointer">Ver colección</a>
          </div>
  )
}

export default Card