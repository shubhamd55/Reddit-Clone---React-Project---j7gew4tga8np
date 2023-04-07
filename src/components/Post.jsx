import React,{useRef, useState} from 'react'
import { v4 as uuidv4 } from 'uuid';

const Post = ({post}) => {
  const {
    id,
    upvote,
    downvote,
    title,
    message 
  } = post;
  return (
    <div className="indi_post">
      <div className="grp_left">
        <p>{upvote}</p>
        <p>{downvote}</p>
      </div>
      <div className="grp_right">
        <p>{title}</p>
        <p>{message}</p>
      </div>
    </div>
  )
}

export default Post