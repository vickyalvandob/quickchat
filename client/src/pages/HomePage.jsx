import React, {useState} from 'react'
import Sidebar from '../components/Sidebar'
import ChatContainer from '../components/ChatContainer'
import RightSidebar from '../components/RightSidebar'

const HomePage = () => {

  const [selectedUser, setSelectedUser] = React.useState(null)

  return (
     <div className="w-full h-screen">
    <div
      className={`backdrop-blur-xl overflow-hidden h-[100%] grid grid-cols-1 relative ${
        selectedUser
          ? 'md:grid-cols-[1fr_1fr_1fr] xl:grid-cols-[1fr_2fr_1fr]'
          : 'md:grid-cols-[1fr_3fr]'
      }`}
    >
      <Sidebar selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
      <ChatContainer selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
      <RightSidebar selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
    </div>
  </div>
  )
}

export default HomePage