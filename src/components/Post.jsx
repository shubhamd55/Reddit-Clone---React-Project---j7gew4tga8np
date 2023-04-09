import React,{useRef, useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import {updatePost} from "../database";
import {ImArrowDown, ImArrowUp} from "react-icons/im"
import {IoMdArrowDropdown, IoMdArrowDropup} from "react-icons/io"
const Post = ({post,setPosts,posts}) => {
  const {
    post_id,
    upvote,
    downvote,
    title,
    message,
    user_id,
    displayName,
    photoURL,
    timeStamp 
  } = post;
  const downVote = () => {
    const newPostList = posts.map(post => {
      if(post.post_id === post_id){
        updatePost(post, "downvote");
        post.downvote = +post.downvote + 1;
      }
      return post;
    });
    setPosts(prevPosts => (newPostList))
  }
  const upVote = () => {
    const newPostList = posts.map(post => {
      if(post.post_id === post_id){
        updatePost(post, "upvote");
        post.upvote = +post.upvote + 1;
      }
      return post
    });   
    setPosts(prevPosts => newPostList)
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
        <p className="post_body">{message}</p>
      </div>
    </div>
  )
}

export default Post