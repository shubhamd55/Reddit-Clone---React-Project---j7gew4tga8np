import React,{useState, useEffect} from 'react'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import {FcGoogle} from 'react-icons/fc';
import {loginWithGoogle,registerWithEmail,loginWithEmail} from "./Auth";
const AuthModal = ({setShowModal,setCurrentUser}) => {
  const [showLoginFrom, setShowLoginFrom] = useState(true)
  return (
    <div className="AuthModalContainer">
        <div className="authCard">
            <AiOutlineCloseCircle className="authModalCloseIcon" onClick={() => setShowModal(false)}/>
            <div className="form-container">
                <h3>Please Login to continue</h3>
                <LoginWithGooleAccout setShowModal={setShowModal} setCurrentUser={setCurrentUser}>Login with Google</LoginWithGooleAccout>
            </div>
        </div>
    </div>
  )
}



export function LoginWithGooleAccout ({children,setCurrentUser,setShowModal}) {
    const handleLogin = async () => {
        const user = await loginWithGoogle();
        console.log(user);
        if(!user.error){
            const {
                displayName,
                email,
                photoURL,
                uid
            } = user.user;
            setShowModal(false)
            setCurrentUser({
                displayName,
                email,
                photoURL,
                uid
            })

        }
    }
    return <button onClick={handleLogin} className="loginWithGoogle"><FcGoogle className="googleIcon"/> {children}</button>
}

export default AuthModal