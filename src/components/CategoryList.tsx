import Image from "next/image"
import Link from "next/link"

const CategoryList = () => {
  return (
    <>
    <div className="px-4 overflow-x-scroll scrollbar-hide">
        <div className="flex gap-4 md:gap-8">
            <Link href='/test' className="flex-shrink-0 w-full md:w-1/2 lg:w-1/5">
                <div className="relative w-full h-96">
                    <Image src='https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=600' alt="" fill sizes="20vw" className="absolute object-cover"/>
                </div>
                <div className="mt-8 font-light text-xl tracking-wide">Category Name</div>
            </Link>

            <Link href='/test' className="flex-shrink-0 w-full md:w-1/2 lg:w-1/5">
                <div className="relative w-full h-96">
                    <Image src='https://images.pexels.com/photos/3756879/pexels-photo-3756879.jpeg?auto=compress&cs=tinysrgb&w=600' alt="" fill sizes="20vw" className="absolute object-cover"/>
                </div>
                <div className="mt-8 font-light text-xl tracking-wide">Category Name</div>
            </Link>

            <Link href='/test' className="flex-shrink-0 w-full md:w-1/2 lg:w-1/5">
                <div className="relative w-full h-96">
                    <Image src='https://images.pexels.com/photos/3345882/pexels-photo-3345882.jpeg?auto=compress&cs=tinysrgb&w=600' alt="" fill sizes="20vw" className="absolute object-cover"/>
                </div>
                <div className="mt-8 font-light text-xl tracking-wide">Category Name</div>
            </Link>

            <Link href='/test' className="flex-shrink-0 w-full md:w-1/2 lg:w-1/5">
                <div className="relative w-full h-96">
                    <Image src='https://images.pexels.com/photos/1970139/pexels-photo-1970139.jpeg?auto=compress&cs=tinysrgb&w=600' alt="" fill sizes="20vw" className="absolute object-cover"/>
                </div>
                <div className="mt-8 font-light text-xl tracking-wide">Category Name</div>
            </Link>

            <Link href='/test' className="flex-shrink-0 w-full md:w-1/2 lg:w-1/5">
                <div className="relative w-full h-96">
                    <Image src='https://images.pexels.com/photos/3747139/pexels-photo-3747139.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt="" fill sizes="20vw" className="absolute object-cover"/>
                </div>
                <div className="mt-8 font-light text-xl tracking-wide">Category Name</div>
            </Link>

            <Link href='/test' className="flex-shrink-0 w-full md:w-1/2 lg:w-1/5">
                <div className="relative w-full h-96">
                    <Image src='https://images.pexels.com/photos/6214461/pexels-photo-6214461.jpeg?auto=compress&cs=tinysrgb&w=600' alt="" fill sizes="20vw" className="absolute object-cover"/>
                </div>
                <div className="mt-8 font-light text-xl tracking-wide">Category Name</div>
            </Link>


            <Link href='/test' className="flex-shrink-0 w-full md:w-1/2 lg:w-1/5">
                <div className="relative w-full h-96">
                    <Image src='https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=600' alt="" fill sizes="20vw" className="absolute object-cover"/>
                </div>
                <div className="mt-8 font-light text-xl tracking-wide">Category Name</div>
            </Link>

            <Link href='/test' className="flex-shrink-0 w-full md:w-1/2 lg:w-1/5">
                <div className="relative w-full h-96">
                    <Image src='https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=600' alt="" fill sizes="20vw" className="absolute object-cover"/>
                </div>
                <div className="mt-8 font-light text-xl tracking-wide">Category Name</div>
            </Link>
        </div>
    </div>
    </>
  )
}

export default CategoryList