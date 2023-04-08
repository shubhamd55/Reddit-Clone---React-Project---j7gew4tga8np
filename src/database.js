import {app} from "./Firebase";
import { getFirestore } from "firebase/firestore";
// const database = getDatabase(app);
const db = getFirestore(app);

import { collection, addDoc,setDoc,doc,getDocs } from "firebase/firestore"; 


// write data to firestore collection

export const creatPostInDb = async (post, user) => {
    const {
        id : post_id,
        title,
        message,
        upvote,
        downvote
    } = post;
    const {
        uid : user_id,
        displayName,
        photoURL
    } = user;
    try {
      const postsRef = collection(db, "posts");
      const docRef = await setDoc(doc(postsRef, post_id), {
        title,
        message,
        upvote,
        downvote,
        user_id,
        photoURL,
        displayName
      });
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


// export const modifyPost = async  (post) => {

// }


// read data from collection
// import { doc, getDoc } from "firebase/firestore";

// const docRef = doc(db, "cities", "SF");
// const docSnap = await getDoc(docRef);

// if (docSnap.exists()) {
//   console.log("Document data:", docSnap.data());
// } else {
//   // docSnap.data() will be undefined in this case
//   console.log("No such document!");
// }

// get multiple data from collection

/* 

import { collection, query, where, getDocs } from "firebase/firestore";

const q = query(collection(db, "cities"), where("capital", "==", true));

const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
});
*/

// get all document from collection 

/* 

import { collection, getDocs } from "firebase/firestore";

const querySnapshot = await getDocs(collection(db, "cities"));
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
});
*/


// transaction update

/* 
import { runTransaction } from "firebase/firestore";

try {
  await runTransaction(db, async (transaction) => {
    const sfDoc = await transaction.get(sfDocRef);
    if (!sfDoc.exists()) {
      throw "Document does not exist!";
    }

    const newPopulation = sfDoc.data().population + 1;
    transaction.update(sfDocRef, { population: newPopulation });
  });
  console.log("Transaction successfully committed!");
} catch (e) {
  console.log("Transaction failed: ", e);
}
*/


/* update a doc with update doc */


/* 
import { doc, updateDoc } from "firebase/firestore";

const washingtonRef = doc(db, "cities", "DC");

// Set the "capital" field of the city 'DC'
await updateDoc(washingtonRef, {
  capital: true
});

*/