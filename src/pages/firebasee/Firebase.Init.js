import { initializeApp } from "firebase/app";
import firebaseConfig from "./FirebaseConfig";
const InitalizedApp = () => {
 initializeApp(firebaseConfig)
};

export default InitalizedApp;