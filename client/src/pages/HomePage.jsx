import React, {useContext, useState} from 'react'
import Sidebar from '../components/Sidebar'
import ChatContainer from '../components/ChatContainer'
import RightSidebar from '../components/RightSidebar'
import { ChatContext } from '../../context/ChatContext'

const HomePage = () => {

  const {selectedUser} = useContext(ChatContext);

  return (
     <div className="w-full h-screen">
    <div
      className={`backdrop-blur-xl overflow-hidden h-[100%] grid grid-cols-1 relative ${
        selectedUser
          ? 'md:grid-cols-[1fr_1fr_1fr] xl:grid-cols-[1fr_2fr_1fr]'
          : 'md:grid-cols-[1fr_3fr]'
      }`}
    >
      <Sidebar />
      <ChatContainer />
      <RightSidebar />
    </div>
  </div>
  )
}

export default HomePage