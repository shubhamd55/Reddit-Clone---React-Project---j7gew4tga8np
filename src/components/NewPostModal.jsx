import React, {useRef} from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { v4 as uuidv4 } from 'uuid';

const NewPostModal = ({setShowPostModal,setPosts}) => {
  const titleInpRef = useRef(null);
  const messageInpRef = useRef(null);
  const handleClick = (e) => {
    e.stopPropagation();
    setShowPostModal(false)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setPosts(prevPost => ([
      ...prevPost,
      {
        id : uuidv4(),
        upvote : 0,
        downvote : 0,
        title : titleInpRef.current.value,
        message : messageInpRef.current.value
      }
    ]))
    setShowPostModal(false)
  }
  return (
    <form onSubmit={handleSubmit} className="NewPostModal">
      <AiOutlineCloseCircle className="NewPostModal_close" onClick={handleClick}/>
      <h2>Publish a post</h2>
      <input ref={titleInpRef} placeholder="Title" type="text" name="title" id="post_title" />
      <textarea ref={messageInpRef} placeholder="Post message" name="message" id="post_message" />
      <input type="submit" value="post" />
    </form>
  )
}

export default NewPostModal