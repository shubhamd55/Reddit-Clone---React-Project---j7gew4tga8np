import {app} from "./Firebase";
import { getFirestore } from "firebase/firestore";

// const database = getDatabase(app);
const db = getFirestore(app);

import { collection, addDoc,setDoc,doc,getDocs, updateDoc,getDoc } from "firebase/firestore"; 


// write data to firestore collection

export const creatPostInDb = async (post) => {
    // const {
    //     post_id,
    //     upvote,
    //     downvote,
    //     title,
    //     message,
    //     user_id,
    //     displayName,
    //     photoURL,
    //     post_image,
    //     timeStamp,
    // } = post;
    const completePostData = {
      ...post,
      userUpvoted : [],
      userDownvoted : [],
    }
    try {
      const postsRef = collection(db, "posts");
      const docRef = await setDoc(doc(postsRef, post.post_id), completePostData);
      console.log("Document written with ID: ", docRef);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
}

export const getPostsFromDb = async () => {
    // const postsRef = collection(db, "posts");
    const querySnapshot = await getDocs(collection(db, "posts"));
    const returnData=[];
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        returnData.push(doc.data());
    });
    return new Promise((resolve,reject) => resolve(returnData));
}


export const updatePost = async (post,action,user) => {
  const userId = user.uid;
  const docRef = doc(db, "posts", post.post_id);
  const docSnap = await getDoc(docRef);
  const postData = docSnap.data();
  // console.log(post.post_id,docSnap, docSnap.data())
  console.log(postData, "look here")
  try{
    if(action === "upvote"){
      let [upvoteUser] = postData.userUpvoted.filter(user => {
        if(user === userId) return true;
        return false;
      }) 
      let restOfUsers = postData.userUpvoted.filter(user => {
        if(user !== userId) return true;
        return false;
      }) 
      if(upvoteUser){
        let result = await updateDoc(docRef, {
          upvote: postData.upvote - 1,
          userUpvoted: [ ...restOfUsers]
        });
        return getPostsFromDb();
      }else{
        let result = await updateDoc(docRef, {
          upvote: postData.upvote + 1,
          userUpvoted: [ ...postData.userUpvoted,userId]
        });
        return getPostsFromDb();
      }
    }else{
      let [downvotedUser] = postData.userDownvoted.filter(user => {
        if(user === userId) return true;
        return false;
      }) 
      let restOfUsers = postData.userDownvoted.filter(user => {
        if(user !== userId) return true;
        return false;
      }) 
      if(downvotedUser){
        let result = await updateDoc(docRef, {
          downvote: postData.downvote - 1,
          userDownvoted: [ ...restOfUsers]
        });
        return getPostsFromDb();
      }else{
        let result = await updateDoc(docRef, {
          downvote: postData.downvote + 1,
          userDownvoted: [ ...postData.userUpvoted,userId]
        });
        return getPostsFromDb();
      }
    }
  }catch(error){
    console.log(error);
  }
}


