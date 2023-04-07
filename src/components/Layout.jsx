import React, {useState,useEffect} from 'react'
import Navbar from "./Navbar";
import Post from "./Post";
import NewPostModal from "./NewPostModal";
import {onAuthChange} from "./Auth.js";
import { v4 as uuidv4 } from 'uuid';

const Layout = () => {
    const [posts,setPosts] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [showPostModal, setShowPostModal] = useState(false)
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
        <Navbar {...{currentUser, setCurrentUser,setPosts,showModal, setShowModal,showPostModal, setShowPostModal}}/>
        <div className="posts-container">
        {
            posts && (
                posts.map(post => {
                    return <Post post={post} key={uuidv4()} />
                })
            )
        }
        </div>
    </>
  )
}

export default Layout