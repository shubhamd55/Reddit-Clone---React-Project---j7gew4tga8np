import React, {useRef,useState} from 'react'
import ProfileItems from "./profileItems";
import {createPortal} from "react-dom";
const Profile = ({currentUser, setCurrentUser}) => {
  const [showProfileModal,setShowProfileModal] = useState(false);
  const [position, setPosition] = useState({
    right : "0",
    bottom : "0"
  })
  const {
      displayName,
      email,
      photoURL
  } = currentUser;
  const profileRef = useRef(null);
  const showModal = () => {
    const position = profileRef.current.getBoundingClientRect();
    const {x : right,bottom} = position;
    console.log(right,bottom);
    setPosition({right,bottom})
    setShowProfileModal(state => !state);
    return null;
  }
  return (
    <>
      <div onClick={showModal} ref={profileRef} className="profileDropdom">
        <img src={photoURL} alt="profile" referrerPolicy="no-referrer"/>
        <p>{displayName}</p>
      </div>
      { showProfileModal && createPortal(<ProfileItems setCurrentUser={setCurrentUser} user={currentUser} position={position}/>, document.getElementById("portalRoot"))}
    </>
  )
}

export default Profile