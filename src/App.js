import React from 'react'
import Sidebar from './components/Sidebar'
import BannerRight from './components/BannerRight'
import ShowBanner from './pages/ShowBanner'
import CreateBanner from './pages/CreateBanner'
import { Routes, Route, useLocation } from "react-router-dom";
import User from './pages/User'
import UserList from './pages/UserList'
import DeleteDialog from './components/DeleteDialog'
const App = () => {
  return (
    <div className='h-screen overflow-y-scroll'>

{/* <ShowBanner/>
<CreateBanner/> */}
<Routes>
{/* <Route exact path="/user" element={<User />} /> */}
<Route exact path="/" element={<User />} />
          <Route exact path="/showbanner" element={<ShowBanner />} />
          {/* <Route exact path="/" element={<DeleteDialog />} />  */}
          <Route exact path="/createbanner" element={<CreateBanner />} />
         
          <Route exact path="/userlist" element={<UserList />} />
          </Routes>
    </div>
  )
}

export default App
