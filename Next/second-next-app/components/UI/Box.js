import React from 'react'

const Box = (props) => {
  return (
    <div className={`w-[90%] mx-auto rounded-md shadow-md ${props.className}`}>
      {props.children}
    </div>
  )
}

export default Box