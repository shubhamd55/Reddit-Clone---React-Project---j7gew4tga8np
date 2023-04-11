import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {storage } from "./Firebase";
const imageRef = ref(storage,"images");


export const UploaImage = async (file) => {
    try{

        console.log("working")
        console.log(file);
        
        // Upload file and metadata to the object 'images/mountains.jpg'
        const storageRef = ref(storage, 'images/' + file.name);
        const uploadTask = uploadBytesResumable(storageRef, file);
        // const snapshot = await uploadTask;
        // const url = await snapshot.ref.getDownloadURL()
        // console.log(url);
        

        // Listen for state changes, errors, and completion of the upload.
const result = await uploadTask;
uploadTask.on('state_changed',
(snapshot) => {
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
        case 'paused':
            console.log('Upload is paused');
            break;
      case 'running':
        console.log('Upload is running');
        break;
    }
}, 
(error) => {
    // A full list of error codes is available at
    // https://firebase.google.com/docs/storage/web/handle-errors
    switch (error.code) {
        case 'storage/unauthorized':
            // User doesn't have permission to access the object
            break;
            case 'storage/canceled':
                // User canceled the upload
                break;
                
                // ...
                
                case 'storage/unknown':
                    // Unknown error occurred, inspect error.serverResponse
                    break;
                }
            }, 
            () => {
                // Upload completed successfully, now we can get the download URL
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      console.log('File available at', downloadURL);
    });
  }
  )
  const afterTask = await uploadTask;
  const downloadUrl = await getDownloadURL(afterTask.ref);
  console.log("geet it?",downloadUrl);
  return downloadUrl;
}catch(error) {
    console.log("error while uploading data",error);
    return null;
}
}
