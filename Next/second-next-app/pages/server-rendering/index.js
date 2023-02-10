import ServerRenderingData from '@/components/server-render'
import React from 'react'

const ServerRendering = ({data}) => {
  return (
      <ServerRenderingData data={data}/>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`https://fakestoreapi.com/products`)
  const data = await res.json()

  return{
    props: {data}
  }
}

export default ServerRendering