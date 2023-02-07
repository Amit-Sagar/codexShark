import React from 'react'


const SearchItem = () => {
  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-white my-3'>Search Products</h1>
      <input type="search" className='text-black rounded-lg py-2 px-4'
      placeholder='search...'></input>
    </div>
  )
}

export default SearchItem