import { ref } from "firebase/storage";
import {storage} from "./Firebase";
const imageRef = ref(storage,"images");


/* we will try to fetch that image */
const olxImage = ref(storage,"olx_logo.png");
// console.log(olxImage.fullPath,olxImage.name,olxImage.bucket);