import Filter from "@/components/Filter"
import ProductList from "@/components/ProductList"
import Image from "next/image"

const ListPage = () => {
  return (
      /* Container */
    <div className="px-4 md:px-8 lg:flex flex-col lg:px-16 xl:px-32 2xl:px-64 ">
        {/* content */}
      <div className="hidden lg:flex h-64 px-4 justify-between  bg-pink-50">
        {/* Text */}
        <div className="w-2/3 flex flex-col justify-center items-center gap-4">
          <h1 className="text-4xl font-semibold">Grap ip to 50% off on <br /> Selected Products</h1>
          <button className="rounded-3xl bg-lama text-white text-sm py-3 px-4">Shop Now</button>
        </div>
        {/* Image */}
        <div className="w-1/3 relative">
          <Image src='/woman.png' alt="" fill className="object-contain"/>
        </div>
      </div>
        {/* Filter */}
      <Filter/>
      {/* Product List */}
      <h1 className="mt-12 text-2xl font-semibold">All Products For you</h1>
      <ProductList/>
    </div>
  )
}

export default ListPage