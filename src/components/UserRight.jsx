import React from 'react'
import Header from './Header'
import BannerSection from './BannerSection'
import UserBanner from './UserBanner'
import UserBox from './UserBox'
import UserInfoBottom from './UserInfoBottom'

const UserRight = () => {
  return (
    <div className='w-full h-screen overflow-y-scroll example'>
       <Header/>
      <UserBanner/>
      <UserBox/>
      <UserInfoBottom/>
    </div>
  )
}

export default UserRight
