import React from 'react'

const Input = ({children, className, label, placeholder}) => {
  return (
    <div className='flex flex-col mt-6'>
      <label htmlFor="" className='text-black text-sm font-medium'>{label}</label>
      <input type="text" placeholder={placeholder} className={`rounded-md p-2 focus:border-white focus:ring-0 focus:outline-none ${className}`}/>
    </div>
  )
}

export default Input