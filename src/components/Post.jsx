import React,{useRef, useState} from 'react'
import { v4 as uuidv4 } from 'uuid';

import {ImArrowDown, ImArrowUp} from "react-icons/im"
import {IoMdArrowDropdown, IoMdArrowDropup} from "react-icons/io"
const Post = ({post,setPosts,posts}) => {
  const {
    id,
    upvote,
    downvote,
    title,
    message 
  } = post;
  const downVote = () => {
    const newPostList = posts.map(post => {
      if(post.id === id){
        post.downvote = +post.downvote + 1;
      }
      return post;
    });
    setPosts(prevPosts => (newPostList))
  }
  const upVote = () => {
    const newPostList = posts.map(post => {
      if(post.id === id){
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
        <p className="post_title">{title}</p>
        <p className="post_body">{message}</p>
      </div>
    </div>
  )
}

export default Post