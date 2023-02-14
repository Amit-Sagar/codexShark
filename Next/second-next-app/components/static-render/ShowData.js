import React from 'react'

const ShowData = ({userInfo, userDetails, children, className}) => {
  return (
    <div className='grid grid-cols-2'>
      <p className='font-semibold ml-10'>{userInfo}</p>
      <p className='mr-10 capitalize'>{userDetails}</p>
    </div>
  )
}

export default ShowData