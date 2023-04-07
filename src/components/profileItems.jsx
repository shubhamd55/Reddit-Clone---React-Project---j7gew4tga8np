import React from 'react'
import { BiAddToQueue } from 'react-icons/bi';
import { FiLogOut } from 'react-icons/fi';
import {logoutUser} from "./Auth";
import { createPortal } from 'react-dom';
const ProfileItems = ({showPostModal, setShowPostModal,setShowProfileModal,currentUser,position,setCurrentUser}) => {
  console.log(position);
  const style = {
    position : "fixed",
    left: `${position.x}px`,
    top: `${position.bottom + 5}px`,
    boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px",
    width : `${position.right - position.x}px`,
    borderRadius : "5px",
    padding : "5px"
  }
  const addPost = (e) => {
    e.stopPropagation()
    setShowProfileModal(false)
    setShowPostModal(true)
    console.log("running")
  }
  const handleLogout = () => {
    logoutUser();
    setCurrentUser(null);
  }

  return (
    <>
    <div style={style} >
      <ul className="dropDown">
        <li onClick={addPost}><BiAddToQueue/>add post</li>
        <li onClick={handleLogout}><FiLogOut/> logout</li>
      </ul>
    </div>
    </>
  )
}

export default ProfileItems