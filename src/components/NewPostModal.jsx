import React, {useRef} from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { v4 as uuidv4 } from 'uuid';
import {creatPostInDb} from "../database";
const NewPostModal = ({setShowPostModal,setPosts,currentUser}) => {
  const titleInpRef = useRef(null);
  const messageInpRef = useRef(null);
  const imageInpRef = useRef(null);
  const handleClick = (e) => {
    e.stopPropagation();
    setShowPostModal(false)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    let image = imageInpRef.current.files[0];
    // if(image){

    // }
    const {
      uid : user_id,
      displayName,
      photoURL
    } = currentUser
    let dateString = new Date()
    const newPost = {
      post_id : uuidv4(),
      upvote : 0,
      downvote : 0,
      title : titleInpRef.current.value,
      message : messageInpRef.current.value,
      user_id : user_id,
      displayName : displayName,
      photoURL : photoURL,
      timeStamp : dateString.toDateString(),
    }
    // post_images : [image]
    console.log("look here",newPost)
    /* 
      title,
        message,
        upvote,
        downvote,
        user_id,
        photoURL,
        displayName
    */
    creatPostInDb(newPost)
    setPosts(prevPost => ([
      ...prevPost,
      newPost
    ]))
    setShowPostModal(false)
  }
  return (
    <form onSubmit={handleSubmit} className="NewPostModal">
      <AiOutlineCloseCircle className="NewPostModal_close" onClick={handleClick}/>
      <h2>Publish a post</h2>
      <input ref={titleInpRef} placeholder="Title" type="text" name="title" id="post_title" />
      <textarea ref={messageInpRef} placeholder="Post message" name="message" id="post_message" />
      <input ref={imageInpRef} type="file"
       id="post_image" name="post_image"
       accept="image/png, image/jpeg"/>
      <input type="submit" value="post" />
    </form>
  )
}

export default NewPostModal