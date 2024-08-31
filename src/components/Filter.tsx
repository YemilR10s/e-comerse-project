import React from 'react'

const Filter = () => {
  return (
    <div className='mt-12 flex justify-between flex-wrap gap-8'>
      <div className="flex gap-6 flex-wrap">
        <select name="type" id="" className='py-2 px-4 rounded-2xl text-xs font-medium bg-gray-100'>
          <option>Type</option>
          <option value='Physical'>Physical</option>
          <option value='Digital'>Digital</option>
        </select>

        <input type="text" name='min' placeholder='Min Price' className='text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400'/>

        <input type="text" name='max' placeholder='Max Price' className='text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400'/>


        <select name="type" id="" className='py-2 px-4 rounded-2xl text-xs font-medium bg-gray-100'>
          <option>Size</option>
          <option value='Physical'>Size</option>
        </select>

        <select name="type" id="" className='py-2 px-4 rounded-2xl text-xs font-medium bg-gray-100'>
          <option value=''>Color</option>
          <option value=''>Test</option>
        </select>

        <select name="type" id="" className='py-2 px-4 rounded-2xl text-xs font-medium bg-gray-100'>
          <option>category</option>
          <option value=''>New Arrival</option>
          <option value=''>Popular</option>
        </select>
      </div>
      <div className="">
        <select id="" className='py-2 px-4 rounded-2xl text-xs font-medium bg-white ring-1 ring-gray-400 cursor-pointer'>
          <option>Sort By</option>
          <option value="">Price (how to hight)</option>
          <option value="">Price (how to slow)</option>
          <option value="">Newest</option>
          <option value="">Oldest</option>
        </select>
      </div>
    </div>
  )
}

export default Filter