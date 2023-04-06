import React, {useState,useEffect} from 'react'
import Navbar from "./Navbar";
import Post from "./Post";
import NewPostModal from "./NewPostModal"
import {onAuthChange} from "./Auth.js";
const Layout = () => {
    const [posts,setPosts] = useState(null);
    const [currentUser, setCurrentUser] = useState(null);
    const [showModal, setShowModal] = useState(false);
    /* 
        [
            {
                postTitle: "",
                upVotes: 0,
                downVotes: 0,
            }
        ]
    */
  useEffect(() => {
    console.log(onAuthChange)
    onAuthChange((user) => {
        console.log("user",user)
        const {
            displayName,
            email,
            photoURL
        } = user;
        setCurrentUser({
            displayName,
            email,
            photoURL
        })
        return null;
    })
  },[])
  return (
    <>
        <Navbar {...{currentUser, setCurrentUser,setPosts,showModal, setShowModal}}/>
        <div className="posts-container">
        {
            posts && (
                posts.map(post => {
                    return <div> this is a post</div>
                })
            )
        }
        </div>
    </>
  )
}

export default Layout