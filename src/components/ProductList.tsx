import { wixClientServer } from "@/lib/wixClientServer";
import { products } from "@wix/stores";
import DOMPurify from "isomorphic-dompurify";
import Image from "next/image"
import Link from "next/link"

const ProductList = async ({categoryId, limit ,searchParams}:{categoryId:string, limit?:number ,searchParams?:any}) => {
  
    const wixClient = await wixClientServer()
    const res = await wixClient.products.queryProducts().eq('collectionIds',categoryId).limit(limit || 20).find();

  return (
    <>
        <div className="mt-12 flex justify-between items-center gap-8 flex-wrap">
            {res.items.map((product:products.Product)=>(

                <Link 
                    href={'/'+product.slug} 
                    className="w-full flex flex-col justify-between sm:w-[45%] lg:w-[20%] "
                    key={product._id}>
                <div className="w-full h-80 relative">
                    <Image 
                        src={product.media?.mainMedia?.image?.url || '/product.png'} 
                        alt=""
                        fill
                        sizes="25vw"
                        className="object-cover absolute rounded-md z-10 hover:opacity-0 transition-opacity ease-in duration-500"/>
                   {product.media?.items &&( 
                        <Image 
                        src={product.media?.items[1]?.image?.url || '/product.png'}  
                        alt=""
                        fill
                        sizes="25vw"
                        className="object-cover absolute rounded-md"/>
                        )}
                </div>
                <div className="flex items-center justify-between mt-5">
                    <span className="font-bold">{product.name}</span>
                    <div className="font-bold">${product.price?.price}</div>
                </div>
                <div className="mt-5 flex justify-between items-center">
                    {product.additionalInfoSections &&(
                        <div 
                            className="text-sm text-gray-500" 
                            dangerouslySetInnerHTML={{
                            __html:DOMPurify.sanitize(
                                product.additionalInfoSections.find(
                                (section:any)=>section.title === "shortDesc")?.description || ''
                            ),
                        }}
                        ></div>
                        
                    )}
                    <button className="rounded-xl ring-1 ring-lama py-2 px-4 text-xs hover:bg-lama hover:text-white">Add to cart</button>
                </div>
            </Link>
         ))}
        </div>
    </>
  )
}

export default ProductList