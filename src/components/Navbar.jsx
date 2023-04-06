import React from 'react'
import Profile from "./Profile";
import {createPortal} from "react-dom";
import logo from "../assets/reddit_logo.png"
import AuthModal from "./AuthModal";
const Navbar = ({currentUser, setCurrentUser,setPosts,showModal, setShowModal}) => {
  return (
    <nav className="navbar">
        <img id="logo" src={logo} alt="logo"/>
        {
            currentUser ? <Profile setCurrentUser={setCurrentUser} currentUser={currentUser}/> : <LoginSignUpBtn setShowModal={setShowModal}/>
        }
        {
            showModal && createPortal(<AuthModal setCurrentUser={setCurrentUser} setShowModal={setShowModal}/>, document.getElementById("portalRoot"))
        }
    </nav>
  )
}

function LoginSignUpBtn ({setShowModal}){
    const handleAuth = () => {
        return setShowModal(true);
    }
    return <button className="loginSignupBtn" onClick={handleAuth}>Login/Signup</button>
}

export default Navbar;