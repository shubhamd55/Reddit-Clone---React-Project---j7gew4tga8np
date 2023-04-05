import React, {useState,useEffect} from 'react'
import Navbar from "./Navbar";
import Post from "./Post";
import NewPostModal from "./NewPostModal"
const Layout = () => {
    const [posts,setPosts] = useState(null);
    const [users,setUsers] = useState([]);
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
    let loginStatus = window.localStorage.getItem("loginStatus");
    if(loginStatus){ // loginStatus === null : false
        let currentLoggedInUser = window.localStorage.getItem("currentUser");
        if(currentLoggedInUser){
            let user = JSON.parse(currentLoggedInUser);
            setCurrentUser(user);
        }
    }else{
        window.localStorage.setItem("loginStatus",false);
        window.localStorage.setItem("currentUser",null);
    }
    let users = window.localStorage.getItem("users");
    if(!users){
        window.localStorage.setItem("users","[]");
    }else{
        setUsers(JSON.parse(users));
    }
  },[])
  return (
    <>
        <Navbar {...{currentUser, setCurrentUser,users,setUsers,setPosts,showModal, setShowModal}}/>
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