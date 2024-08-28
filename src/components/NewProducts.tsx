import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NewProducts = () => {
  return (
    <>
        <div className="mt-12 flex justify-center items-center gap-8 flex-wrap ">
            <Link href='/' className="w-full flex flex-col justify-between sm:w-[45%] lg:w-[20%] ">
                <div className="w-full h-80 relative">
                    <Image 
                        src='https://images.pexels.com/photos/4793169/pexels-photo-4793169.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
                        alt=""
                        fill
                        sizes="25vw"
                        className="object-cover absolute rounded-md z-10 hover:scale-105 transition-opacity ease-in duration-500"/>
                </div>
                <div className="flex items-center justify-between mt-5">
                    <span className="font-bold">Tripode</span>
                    <div className="font-bold">$199</div>
                </div>
                <div className="mt-5 flex justify-between items-center">
                    <div className="text-sm text-gray-500">My Description</div>
                    <button className="rounded-xl ring-1 ring-lama py-2 px-4 text-xs hover:bg-lama hover:text-white">Add to cart</button>
                </div>
            </Link>


            <Link href='/' className="w-full flex flex-col justify-between sm:w-[45%] lg:w-[20%] ">
                <div className="w-full h-80 relative">
                    <Image 
                        src='https://images.pexels.com/photos/4476638/pexels-photo-4476638.jpeg?auto=compress&cs=tinysrgb&w=600' 
                        alt=""
                        fill
                        sizes="25vw"
                        className="object-cover absolute rounded-md z-10 hover:scale-105 transition-opacity ease-in duration-500"/>
                </div>
                <div className="flex items-center justify-between mt-5">
                    <span className="font-bold">Mouse</span>
                    <div className="font-bold">$149</div>
                </div>
                <div className="mt-5 flex justify-between items-center">
                    <div className="text-sm text-gray-500">My Description</div>
                    <button className="rounded-xl ring-1 ring-lama py-2 px-4 text-xs hover:bg-lama hover:text-white">Add to cart</button>
                </div>
            </Link>


            <Link href='/' className="w-full flex flex-col justify-between sm:w-[45%] lg:w-[20%] ">
                <div className="w-full h-80 relative">
                    <Image 
                        src='https://images.pexels.com/photos/5208819/pexels-photo-5208819.jpeg?auto=compress&cs=tinysrgb&w=600' 
                        alt=""
                        fill
                        sizes="25vw"
                        className="object-cover absolute rounded-md z-10 hover:scale-105 transition-opacity ease-in duration-500"/>
                </div>
                <div className="flex items-center justify-between mt-5">
                    <span className="font-bold">Charger</span>
                    <div className="font-bold">$309</div>
                </div>
                <div className="mt-5 flex justify-between items-center">
                    <div className="text-sm text-gray-500">My Description</div>
                    <button className="rounded-xl ring-1 ring-lama py-2 px-4 text-xs hover:bg-lama hover:text-white">Add to cart</button>
                </div>
            </Link>

            <Link href='/' className="w-full flex flex-col justify-between sm:w-[45%] lg:w-[20%] ">
                <div className="w-full h-80 relative">
                    <Image 
                        src='https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=600' 
                        alt=""
                        fill
                        sizes="25vw"
                        className="object-cover absolute rounded-md z-10 hover:scale-105 transition-opacity ease-in duration-500"/>
                </div>
                <div className="flex items-center justify-between mt-5">
                    <span className="font-bold">Teclado</span>
                    <div className="font-bold">$699</div>
                </div>
                <div className="mt-5 flex justify-between items-center">
                    <div className="text-sm text-gray-500">My Description</div>
                    <button className="rounded-xl ring-1 ring-lama py-2 px-4 text-xs hover:bg-lama hover:text-white">Add to cart</button>
                </div>
            </Link>
        </div>
    </>
  )
}

export default NewProducts