import React from 'react'
import { BiAddToQueue } from 'react-icons/bi';
import { FiLogOut } from 'react-icons/fi';
import {logoutUser} from "./Auth";
const ProfileItems = ({user,position,setCurrentUser}) => {
  const style = {
    position : "fixed",
    left: `${position.right}px`,
    top: `${position.bottom + 5}px`,
    boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px",
    width : "160px",
    borderRadius : "5px",
    padding : "5px"
  }
  const handleLogout = () => {
    logoutUser();
    setCurrentUser(null);
  }
  return (
    <div style={style} >
      <ul className="dropDown">
        <li><BiAddToQueue/>add post</li>
        <li onClick={handleLogout}><FiLogOut/> logout</li>
      </ul>
    </div>
  )
}

export default ProfileItems