import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Card = ({img, title, description, me, id}) => {
  return (
    <div className="md:p-6 p-4 bg-[#27292d] shadow-lg shadow-slate-700 rounded-lg text-white relative pb-10">
           <Link href={`collection/${id}`}>
           <Image
              className="rounded-lg hover:scale-105 cursor-pointer transition duration-500"
              src={img}
              width={400}
              height={400}
              alt="nft"
              priority={true}
            />
           </Link>
           
            <h1 className="font-bold mt-2">{title}</h1>
            <h1 className="mt-2 text-gray-400 h-[130px] mb-4 overflow-auto">{description}</h1>
            <a href={me} className="absolute bottom-4 bg-purple-500 rounded-lg text-white px-4 cursor-pointer hover:bg-white hover:text-purple-500 border-2 transition duration-500 border-purple-500 cursor-pointer">Ver colección</a>
          
          </div>
  )
}

export default Card