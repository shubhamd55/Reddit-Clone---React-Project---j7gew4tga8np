import React, {useState,useEffect} from 'react'
import Navbar from "./Navbar";
import Post from "./Post";
import NewPostModal from "./NewPostModal";
import {onAuthChange} from "./Auth.js";
import { v4 as uuidv4 } from 'uuid';
import {getPostsFromDb,sortPostArray} from "../database";
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
            photoURL,
            uid,
        } = user;
        setCurrentUser({
            displayName,
            email,
            photoURL,
            uid
        })
        return null;
    })
    getPostsFromDb().then(result => {
        let sortedResult = sortPostArray(result)
        console.log(sortedResult);
        setPosts(sortedResult);
    })
  },[])
  return (
    <>
        <Navbar {...{currentUser, setCurrentUser,setPosts,showModal, setShowModal,showPostModal, setShowPostModal}}/>
        <div className="posts-container">
        {
            posts && (
                posts.map(post => {
                    return <Post setShowModal={setShowModal} currentUser={currentUser} posts={posts} setPosts={setPosts} post={post} key={uuidv4()} />
                })
            )
        }
        </div>
    </>
  )
}

export default Layout