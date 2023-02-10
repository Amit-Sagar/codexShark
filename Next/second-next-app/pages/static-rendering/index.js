import StaticRenderData from '@/components/static-render'
import React from 'react'

const StaticRendering = (props) => {
  return (
    <StaticRenderData staticData = {props.result}/>
  )
}

export async function getStaticProps() {
  const response = await fetch(`https://fakestoreapi.com/users`)
  const result = await response.json()

  return{
    props: {result}
  }
}

export default StaticRendering