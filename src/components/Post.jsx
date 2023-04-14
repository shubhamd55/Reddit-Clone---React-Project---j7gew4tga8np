import React,{useRef, useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import {updatePost} from "../database";
import {ImArrowDown, ImArrowUp} from "react-icons/im"
import {IoMdArrowDropdown, IoMdArrowDropup} from "react-icons/io"
const Post = ({post,setPosts,posts,currentUser,setShowModal}) => {
  const {
    post_id,
    upvote,
    downvote,
    title,
    message,
    user_id,
    displayName,
    photoURL,
    post_image,
    timeStamp 
  } = post;
  const downVote = () => {
    if(!currentUser){
      console.log("loging to react to post")
      // alert("loging to react to post")
      setShowModal(true);
      return null;
    }
    for(let i = 0;i<posts.length;i++){
      if(posts[i].post_id === post_id){
        updatePost(post, "downvote",currentUser).then((newPostList) => {
          setPosts(newPostList)
        })
        break;
      }
    }
  }
  const upVote = () => {
    if(!currentUser){
      console.log("loging to react to post")
      // alert("loging to react to post")
      setShowModal(true);
      return null;
    }
    for(let i = 0;i<posts.length;i++){
      if(posts[i].post_id === post_id){
        updatePost(post, "upvote",currentUser).then((newPostList) => {
          setPosts(newPostList)
        })
        break;
      }
    }   
  }
  return (
    <div className="indi_post">
      <div className="grp_left">
        <div className="arrow_grp">
          <ImArrowUp onClick={upVote} className="control_arrow"/>
          <p>{upvote}</p>
          <IoMdArrowDropup className="direction_indicator up"/>
        </div>
        <div className="arrow_grp">
          <ImArrowDown onClick={downVote} className="control_arrow"/>
          <p >{downvote}</p>
          <IoMdArrowDropdown className="direction_indicator down"/>
        </div>
      </div>
      <div className="grp_right">
        <div className="user_details">
          <img src={photoURL} alt="user" />
          <p>{displayName}</p>
          <p>{timeStamp}</p>
        </div>
        <p className="post_title">{title}</p>
        {
          post_image && (
            <img src={post_image} alt="post_image" referrerPolicy="no-referrer" className="post_image" />
          )
        }
        <p className="post_body">{message}</p>
      </div>
    </div>
  )
}

export default Post