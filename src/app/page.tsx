
import CategoryList from "@/components/CategoryList"
import NewProducts from "@/components/NewProducts"
import ProductList from "@/components/ProductList"
import Slider from "@/components/slider"
import { WixClientContext } from "@/context/wixClient"
import { useWixClient } from "@/hooks/useWixClient"
import { wixClientServer } from "@/lib/wixClientServer"
import { Suspense, useContext, useEffect } from "react"

const HomePage = async () => {
/*   const wixClient = useWixClient()
  useEffect(()=>{
      const getProduct = async ()=>{
      console.log(res)
    }
    getProduct()
  },[wixClient]) */
  /* const wixClient = await wixClientServer()

  const res = await wixClient.products.queryProducts().find();

  console.log(res) */
  return (
    <div className=''>
      <Slider/>
      <div className="mt-24 px-4 md:px8 lg:px-16">
        <h1 className="text-2xl">Fetured products</h1>
        <Suspense fallback={'loading'}>
          <ProductList categoryId={process.env.FEATURED_PRODUCTS_CATEGORY_ID!} limit={4}/>
        </Suspense>
      </div>
      <div className="mt-24">
        <h1 className="text-2xl px-4 md:px8 lg:px-16 mb-12">Categories</h1>
        <Suspense fallback={'loading'}>
          <CategoryList/>
        </Suspense>
      </div>
      <div className="mt-24 px-4 md:px8 lg:px-16">
        <h1 className="text-2xl">New products</h1>
        <NewProducts/>
      </div>
    </div>
  )
}

export default HomePage