import ProductList from "@/components/ProductList"
import Slider from "@/components/slider"

const HomePage = () => {
  return (
    <div className=''>
      <Slider/>
      <div className="mt-24 px-4 md:px8 lg:px-16">
        <h1 className="text-2xl">Fetured products</h1>
        <ProductList/>
      </div>
      <div className="mt-24 px-4 md:px8 lg:px-16">
        <h1 className="text-2xl">Categories</h1>
      </div>
      <div className="mt-24 px-4 md:px8 lg:px-16">
        <h1 className="text-2xl">New products</h1>
      </div>
    </div>
  )
}

export default HomePage