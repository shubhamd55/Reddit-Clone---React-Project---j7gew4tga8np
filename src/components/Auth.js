import {app} from "../Firebase";
import { getAuth,signOut ,GoogleAuthProvider,signInWithPopup , createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged  } from "firebase/auth";
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
// provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

export const registerWithEmail = async (email,password) => {
    try{
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log(userCredential, userCredential.user);
        return {user : userCredential, error: null};
    }catch(error){
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode,errorMessage);
        return {user: null, error: "failed to create account"}
    }
}

export const loginWithEmail = async (email,password) => {
    try{
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log(userCredential, userCredential.user);
        return {user : userCredential, error: null};
    }catch(error){
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode,errorMessage);
        return {user: null, error: "Wrong email or password"}
    }
}

export const onAuthChange = async (cbAuth) => {
    try{
        // onAuthStateChanged(auth, (user) => {
        //     console.log(auth.currentUser)
        //     return null;
        // });
        onAuthStateChanged(auth, (user) => cbAuth(user));
    }catch(error){
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode,errorMessage);
        return {user: null, error: "failed to Login"}
    }
}

export const loginWithGoogle = async () => {
  try{
    let result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    return {user : user, error: null};
}catch(error){
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
    return {user : null, error: "login with google failed"};
  }
} 

export const logoutUser = async () => {
    try{
        const result = await signOut(auth);
        console.log("log out successfull");
    }catch(error){
        console.log("log out failed");
    }
}