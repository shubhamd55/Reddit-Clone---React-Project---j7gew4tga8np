import React from 'react'
import Profile from "./Profile"
const Navbar = ({currentUser, setCurrentUser,users,setUsers,setPosts}) => {
  return (
    <nav className="navbar">
        <img src="" alt="logo"/>
        {
            currentUser ? <Profile currentUser={currentUser}/> : <LoginSignUpBtn/>
        }
    </nav>
  )
}

function LoginSignUpBtn (){
    const handleAuth = () => {
        return null;
    }
    return <button onClick={handleAuth}>Login/Signup</button>
}

export default Navbar;