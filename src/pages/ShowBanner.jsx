import React from 'react'
import Sidebar from '../components/Sidebar'
import BannerRight from '../components/BannerRight'
import { useGlobalHook } from '../Context/Contexts';

const ShowBanner = () => {

  return (
    <div className='flex w-full  '>
    <Sidebar />
    <BannerRight/>

    </div>
  )
}

export default ShowBanner
