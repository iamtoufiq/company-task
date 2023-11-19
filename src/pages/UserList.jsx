import React from 'react'
import Sidebar from '../components/Sidebar'
import UserListRight from '../components/UserListRight'
import { UserTable } from '../components/UserTable'

const UserList = () => {
  return (
    <div className='flex w-full example '>
    <Sidebar />
    <UserListRight/>
   
        </div>
  )
}

export default UserList
