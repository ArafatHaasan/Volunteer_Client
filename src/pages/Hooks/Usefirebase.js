import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import InitalizedApp from "../firebasee/Firebase.Init";
InitalizedApp()
const Usefirebase =  () => {
 
    const [user, setUser] = useState({})
    const [error, setError] = useState('');
     const [isloading, setisloading] = useState(true);
    const auth = getAuth();
    const GoogleProvider = new GoogleAuthProvider();
   
    const GoogleSigIn = () => {
         setisloading(true)
        return  signInWithPopup(auth, GoogleProvider)
  
    }
     
    const NewUser  = (name, email, password) => {
      setisloading(true)
       console.log(isloading)
       
       return  createUserWithEmailAndPassword(auth, email, password)
    }

     const OldUser = (email, pass) => {
      setisloading(true)
        return signInWithEmailAndPassword(auth, email, pass)
        
     }
 
     const userProfile = (name) => {
      setisloading(true)
    
        updateProfile(auth.currentUser, {
            displayName: name,
          }).then(() => {
          setUser(auth.currentUser)
              
          }).catch((error) => {
             setError(error.message)
          })
          .finally(
            setisloading(false)
          )
     }
      
     const Logout = () => {

       setisloading(true)
        signOut(auth).then(() => {
            setUser({})
          }).catch((error) => {
            setError(error.message)
          })
          .finally( 
            setisloading(false)
          )
     }
    
    //  observer 
     useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
              setUser({})
            }
      setisloading(false)

          })
     },[auth])

    return{
         error, setError, user, setUser, GoogleSigIn , isloading, Logout, OldUser,NewUser, userProfile, setisloading
    }

}

export default Usefirebase;