import { wixClientServer } from "@/lib/wixClientServer"
import Image from "next/image"
import Link from "next/link"

const CategoryList = async () => {
   const wixClient = await wixClientServer()
   const cats = await wixClient.collections.queryCollections().find()
  return (
    <>
    <div className="px-4 overflow-x-scroll scrollbar-hide">
        <div className="flex gap-4 md:gap-8">
        {cats.items.map((item)=>(

            <Link href={`/list?cat=${item.slug}`} className="flex-shrink-0 w-full md:w-1/2 lg:w-1/5" key={item._id}>
                <div className="relative w-full h-96">
                    <Image 
                        src={item.media?.mainMedia?.image?.url || 'cat.png'} 
                        alt="" 
                        fill sizes="20vw" 
                        className="absolute object-cover"
                    />
                </div>
                <div className="mt-8 font-light text-xl tracking-wide">{item.name}</div>
            </Link>
        ))    
        }
        </div>
    </div>
    </>
  )
}

export default CategoryList