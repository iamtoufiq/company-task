import React from 'react'
import Header from './Header'
import BannerSection from './BannerSection'
import BannerTable from './BannerTable'
const BannerRight = () => {
  return (
    <div className='w-full h-screen overflow-y-scroll example'>
      
      <Header/>
      <BannerSection/>
      <BannerTable/>
    </div>
  )
}

export default BannerRight
