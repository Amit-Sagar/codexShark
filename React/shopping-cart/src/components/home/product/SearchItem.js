import React from 'react'


const SearchItem = () => {
  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-black my-3 text-xl'>Search Products</h1>
      <input type="search" className='text-white bg-black/[0.5] rounded-lg py-2 px-4'
      placeholder='search...'></input>
    </div>
  )
}

export default SearchItem