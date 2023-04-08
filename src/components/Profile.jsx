import React, {useRef,useState} from 'react'
import ProfileItems from "./profileItems";
import {createPortal} from "react-dom";
import NewPostModal from './NewPostModal';
const Profile = ({showPostModal,setPosts, setShowPostModal ,setCurrentUser, currentUser}) => {
  const [showProfileModal,setShowProfileModal] = useState(false);
  const [position, setPosition] = useState(null)
  const {
      displayName,
      email,
      photoURL
  } = currentUser;
  const profileRef = useRef(null);
  const showModal = () => {
    const position = profileRef.current.getBoundingClientRect();
    // const {x : right,bottom} = position;
    // console.log(position);
    setPosition(position)
    setShowProfileModal(state => !state);
    return null;
  }
  return (
    <>
      <div onClick={showModal} ref={profileRef} className="profileDropdom">
        <img src={photoURL} alt="profile" referrerPolicy="no-referrer"/>
        <p>{displayName}</p>
      </div>
      { showProfileModal && createPortal(<ProfileItems {...{showPostModal, setShowPostModal,setShowProfileModal,setCurrentUser, currentUser, position}}/>, document.getElementById("portalRoot"))}
      {showPostModal && createPortal(<NewPostModal currentUser={currentUser} setPosts={setPosts} setShowPostModal={setShowPostModal}/>,document.getElementById("portalRoot")) }
    </>
  )
}

export default Profile