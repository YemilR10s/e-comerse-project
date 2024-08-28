import Image from "next/image"
import Link from "next/link"

const ProductList = () => {
  return (
    <>
        <div className="mt-12 flex justify-center items-center gap-8 flex-wrap ">
            <Link href='/' className="w-full flex flex-col justify-between sm:w-[45%] lg:w-[20%] ">
                <div className="w-full h-80 relative">
                    <Image 
                        src='https://images.pexels.com/photos/10292806/pexels-photo-10292806.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' 
                        alt=""
                        fill
                        sizes="25vw"
                        className="object-cover absolute rounded-md z-10 hover:opacity-0 transition-opacity ease-in duration-500"/>
                    <Image 
                        src='https://images.pexels.com/photos/20116408/pexels-photo-20116408/free-photo-of-hombre-oscuro-fiesta-partido.jpeg' 
                        alt=""
                        fill
                        sizes="25vw"
                        className="object-cover absolute rounded-md"/>
                </div>
                <div className="flex items-center justify-between mt-5">
                    <span className="font-bold">Headphone</span>
                    <div className="font-bold">$299</div>
                </div>
                <div className="mt-5 flex justify-between items-center">
                    <div className="text-sm text-gray-500">My Description</div>
                    <button className="rounded-xl ring-1 ring-lama py-2 px-4 text-xs hover:bg-lama hover:text-white">Add to cart</button>
                </div>
            </Link>


            <Link href='/' className="w-full flex flex-col justify-between sm:w-[45%] lg:w-[20%] ">
                <div className="w-full h-80 relative">
                    <Image 
                        src='https://images.pexels.com/photos/9130515/pexels-photo-9130515.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
                        alt=""
                        fill
                        sizes="25vw"
                        className="object-cover absolute rounded-md z-10 hover:opacity-0 transition-opacity ease-in duration-500"/>
                    <Image 
                        src='https://images.pexels.com/photos/11947674/pexels-photo-11947674.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
                        alt=""
                        fill
                        sizes="25vw"
                        className="object-cover absolute rounded-md"/>
                </div>
                <div className="flex items-center justify-between mt-5">
                    <span className="font-bold">Apple Watch</span>
                    <div className="font-bold">$499</div>
                </div>
                <div className="mt-5 flex justify-between items-center">
                    <div className="text-sm text-gray-500">My Description</div>
                    <button className="rounded-xl ring-1 ring-lama py-2 px-4 text-xs hover:bg-lama hover:text-white">Add to cart</button>
                </div>
            </Link>


            <Link href='/' className="w-full flex flex-col justify-between sm:w-[45%] lg:w-[20%] ">
                <div className="w-full h-80 relative">
                    <Image 
                        src='https://images.pexels.com/photos/12743408/pexels-photo-12743408.jpeg?auto=compress&cs=tinysrgb&w=600' 
                        alt=""
                        fill
                        sizes="25vw"
                        className="object-cover absolute rounded-md z-10 hover:opacity-0 transition-opacity ease-in duration-500"/>
                    <Image 
                        src='https://images.pexels.com/photos/6203796/pexels-photo-6203796.jpeg?auto=compress&cs=tinysrgb&w=600' 
                        alt=""
                        fill
                        sizes="25vw"
                        className="object-cover absolute rounded-md"/>
                </div>
                <div className="flex items-center justify-between mt-5">
                    <span className="font-bold">Macbook</span>
                    <div className="font-bold">$899</div>
                </div>
                <div className="mt-5 flex justify-between items-center">
                    <div className="text-sm text-gray-500">My Description</div>
                    <button className="rounded-xl ring-1 ring-lama py-2 px-4 text-xs hover:bg-lama hover:text-white">Add to cart</button>
                </div>
            </Link>

            <Link href='/' className="w-full flex flex-col justify-between sm:w-[45%] lg:w-[20%] ">
                <div className="w-full h-80 relative">
                    <Image 
                        src='https://images.pexels.com/photos/1787235/pexels-photo-1787235.jpeg?auto=compress&cs=tinysrgb&w=600' 
                        alt=""
                        fill
                        sizes="25vw"
                        className="object-cover absolute rounded-md z-10 hover:opacity-0 transition-opacity ease-in duration-500"/>
                    <Image 
                        src='https://images.pexels.com/photos/598917/pexels-photo-598917.jpeg?auto=compress&cs=tinysrgb&w=600' 
                        alt=""
                        fill
                        sizes="25vw"
                        className="object-cover absolute rounded-md"/>
                </div>
                <div className="flex items-center justify-between mt-5">
                    <span className="font-bold">Camera</span>
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

export default ProductList