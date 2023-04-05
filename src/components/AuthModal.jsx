import React,{useState, useEffect} from 'react'
import {AiOutlineCloseCircle} from 'react-icons/ai'
const AuthModal = ({setShowModal}) => {
  const [showLoginFrom, setShowLoginFrom] = useState(true)
  return (
    <div className="AuthModalContainer">
        <div className="authCard">
            <AiOutlineCloseCircle className="authModalCloseIcon" onClick={() => setShowModal(false)}/>
            <div className="form-container">
                <div className="buttons">
                    <span onClick={() => setShowLoginFrom(true)} className={showLoginFrom ? "active showLoginBtn": "showLoginBtn"}>
                        Login
                    </span>
                    <span onClick={() => setShowLoginFrom(false)} className={!showLoginFrom ? "active showSingupBtn": "showSingupBtn"}>
                        Signup
                    </span>
                </div>
                {
                    showLoginFrom ? <LoginFrom/> : <SignupFrom/>
                }
            </div>
        </div>
    </div>
  )
}

function LoginFrom () {
    const [formData, setFromData] = useState({
        email : "",
        password: ""
    })
    const handleLogin =() => {
        return null;
    }
    return (
        <>
            <h2>Login form</h2>
            <form onSubmit={handleLogin}>
            <label htmlFor="email">email</label>
                <input value={formData.email} onChange={(e) => setFromData(state => ({...state,email: e.target.value}))} id="email" type="email" name="email"/>
                <label htmlFor="password">password</label>
                <input value={formData.password} onChange={(e) => setFromData(state => ({...state,password: e.target.value}))} id="password" type="password" name="password"/>
                <input type="submit" value="Login" />
            </form>
        </>
    )
}
function SignupFrom () {
    const [formData, setFromData] = useState({
        email : "",
        password: ""
    })
    const handleSingup =() => {
        return null;
    }
    return (
        <>
            <h2>Signup form</h2>
            <form onSubmit={handleSingup}>
                <label htmlFor="email">email</label>
                <input value={formData.email} onChange={(e) => setFromData(state => ({...state,email: e.target.value}))} id="email" type="email" name="email"/>
                <label htmlFor="password">password</label>
                <input value={formData.password} onChange={(e) => setFromData(state => ({...state,password: e.target.value}))} id="password" type="password" name="password"/>
                <input type="submit" value="Sign Up" />
            </form>
        </>
    )
}

export default AuthModal