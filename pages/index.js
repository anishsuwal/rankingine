

import Navbar from '../components/common/navbar'
import Hero from '../components/common/hero'
import Whywe from '../components/common/whywe'

import Products from '../components/common/products'


export default function Home() {
  return (
    <>
    <div className='ml-6 xl:pl-20 xl:pr-20'>
    <Navbar/>
    <Hero/>
    <Whywe/>
    <Products/>

    </div>
    </>
  )
}
