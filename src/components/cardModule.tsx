import Image from 'next/image'
import React from 'react'
const cartItems = true
const CardModule = () => {
  return (
    <div className='w-max absolute top-12 right-7 shadow p-4 rounded-md bg-white flex flex-col gap-6 z-10'>
        {!cartItems ? (
            <div>Cart is Empty</div>
        ):(
             <>
                <h2 className='text-xl font-semibold'>Shopping Cart</h2>
                {/* list */}
            <div className="flex flex-col justify-between gap-8">
                {/* items */}
            <div className="flex gap-4">
                <Image 
                src='https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg' 
                alt='' 
                width={72} 
                height={72} 
                className='object-cover rounded-md'/>
                <div className="flex gap-8 flex-col justify-between w-full">
                    {/* top */}
                    <div className="">
                        {/* title */}
                        <div className="flex items-center justify-between gap-8">
                            <h3 className='font-semibold'>Product Name</h3>
                            <div className="p-1 bg-gray-50 rounded-sm">$49</div>
                        </div>
                        {/* desc */}
                        <div className="text-sm text-gray-500">
                            available
                        </div>
                    </div>
                    {/* button */}
                    <div className="flex justify-between text-sm">
                        <span className='text-gray-500'>Qty. 2</span>
                        <span className='text-blue-400'>Remove</span>
                    </div>
                </div>
            </div>


                {/* list 2 */}
            <div className="flex gap-4">
                <Image 
                src='https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg' 
                alt='' 
                width={72} 
                height={72} 
                className='object-cover rounded-md'/>
                <div className="flex gap-8 flex-col justify-between w-full">
                    {/* top */}
                    <div className="">
                        {/* title */}
                        <div className="flex items-center justify-between gap-8">
                            <h3 className='font-semibold'>Product Name</h3>
                            <div className="p-1 bg-gray-50 rounded-sm">$49</div>
                        </div>
                        {/* desc */}
                        <div className="text-sm text-gray-500">
                            available
                        </div>
                    </div>
                    {/* button */}
                    <div className="flex justify-between text-sm">
                        <span className='text-gray-500'>Qty. 2</span>
                        <span className='text-blue-400'>Remove</span>
                    </div>
                </div>
            </div>

            </div>


            {/* subtotal */}
            <div className="">
                <div className="flex items-center justify-between font-semibold">
                <div className="">Subtotal</div>
                <div className="">$49</div>
                </div>
                <p className='text-gray-500 mt-2 mb-2 text-sm'>Lorem ipsum dolor sit amet consectetur.</p>
                {/* buttons */}
                <div className="flex justify-between text-sm">
                    <button className='rounded-md py-3 px-4 ring-1 ring-gray-500'>View Cart</button>
                    <button className='rounded-md py-3 px-4 bg-black text-white'>Checkout</button>
                </div>
            </div>
            </>
        )}
    </div>
  )
}

export default CardModule