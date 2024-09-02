'use client'

import Image from 'next/image'
import React, { useState } from 'react'

const ProductImages = () => {

    const Images = [
        {
            id: 1,
            image:'https://images.pexels.com/photos/14935011/pexels-photo-14935011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

        },
        {
            id: 2,
            image:'https://images.pexels.com/photos/7418485/pexels-photo-7418485.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'

        },
        {
            id: 3,
            image:'https://images.pexels.com/photos/18441498/pexels-photo-18441498/free-photo-of-tecnologia-negro-auriculares-naturaleza-muerta.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
        }
        ,
        {
            id: 4,
            image:'https://images.pexels.com/photos/11794181/pexels-photo-11794181.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
        }
        ,
        {
            id: 5,
            image:'https://images.pexels.com/photos/15394136/pexels-photo-15394136/free-photo-of-auriculares-inalambrico-de-cerca.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
        }
    ]

    const [index, setIndex]= useState(0)

  return (
    <div className='mt-12'>
        <div className="h-[500px] relative">
            <Image src={Images[index].image} alt='' fill sizes='50vw' className='object-cover rounded-md'/>
        </div>
        <div className="flex gap-4">
           {Images.map((image, i)=>(
             <div key={image.id} className="w-1/4 h-32 relative gap-4 mt-8">
                <Image src={image.image} alt='' fill sizes='30vw' className='object-cover rounded-md cursor-pointer' 
                onClick={()=>setIndex(i)}/>
             </div>
           ))}
        </div>
    </div>
  )
}

export default ProductImages