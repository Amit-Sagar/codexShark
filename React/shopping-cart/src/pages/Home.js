import React from 'react'
import Main from '../components/home/product/Main'
import SearchItem from '../components/home/product/SearchItem'

const Home = () => {
  return (

    <main>
      <section className='bg-slate-700'>
        <SearchItem/>
        <Main/>
      </section>
      
      </main>
  )
}

export default Home