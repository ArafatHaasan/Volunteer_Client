import React, { useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import UseAuth from '../../context/UseAuth';
import logo from "../assets/logos/Group 1329.png";




const SignUs = () => {

  
    const name = useRef(null)
    const email = useRef(null)
    const pass = useRef(null)
    let navigate = useNavigate();
  const location = useLocation()
  const formLocation = location?.state?.from?.pathname || "/";

  console.log(formLocation)


    const {error, setError,  setUser, NewUser , setisloading , userProfile  } = UseAuth()
     

  
    const submitForm =  (e) => {
      e.preventDefault()
        const userName = name.current.value;
        const userEmail = email.current.value;
        const userPass = pass.current.value;
     NewUser(userName, userEmail, userPass) 
     .then((result) => {
        const user = result.user;
        //    setisloading(false)
        setUser(user); 
        userProfile(userName)
        navigate(formLocation)

     })
     .catch((error) => {
       const errorMessage = error.message;
       setError(errorMessage)
     })
     .finally(
       console.log("kiss"),
       setisloading(false)
     
     
     )
       
     
    // clear input 
    name.current.value = ""
    email.current.value = ""
    pass.current.value = ""
     
    }

    return (
        <div className='container mx-auto'>
            <div className=' md:mb-24'>
                <img className='w-4/12 md:w-5/12 my-4 mx-auto' src={logo} alt="logo" />
            </div>
             <div className='border w-11/12 sm:w-6/12 md:w-6/12 p-3 sm:p-5 lg:p-24 mx-auto'>
                  
                 <h1 className='py-4 text-xl font-medium'>Regester</h1>
                 <form onSubmit={submitForm}  className=' w-11/12 sm:w-7/12 md:w-9/12 '>
                       <input ref={name} className='border-b-2 w-full py-2 mb-2 outline-0 ' type="text" placeholder='Name' /> <br />
                       <input ref={email} className='border-b-2 w-full py-2 mb-2  outline-0' type="email" placeholder='Email' /> <br />
                       <input ref={pass} className='border-b-2 w-full py-2 mb-2 outline-0' type="pass" placeholder='Password' /> <br />
                        <input className='border px-8 py-1 rounded-full my-2 bg-blue-700 text-white ' type="submit" value="Sign up" />
                  </form>
                  
                   <div>
                        <p>{error}</p>
                       <p>Already have an account? <Link className='text-blue-500 font-bold' to={'/Login'}> Login </Link></p>
                   </div>
             </div>
        </div>
    );
};

export default SignUs;