import React from 'react'
import Header from './Header'
import UserLIstanner from './UserLIstanner'
import { UserTable } from './UserTable'

const UserListRight = () => {
  return (
    <div className='w-full h-screen overflow-y-scroll example'>
      <Header/>
    <UserLIstanner/>
    <UserTable/>
    </div>
  )
}

export default UserListRight
