import React, { useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import UseAuth from '../../context/UseAuth';
import GoogleLogo from "../assets/logos/google.png";
import logo from "../assets/logos/Group 1329.png";

const Login = () => {
    let navigate = useNavigate();
  const location = useLocation()
  const formLocation = location.state.form 
  console.log(formLocation)
  console.log(location)
    const email = useRef()
     const pass = useRef()

    const {error, setError,  setUser, GoogleSigIn, OldUser , setisloading} = UseAuth()
    
    const SignWithGoogle = () => {
        GoogleSigIn()
        .then((result) => {
            const user = result.user;
            setUser(user); 
            navigate(formLocation)
            setError("")
         })
         .catch((error) => {
           const errorMessage = error.message;
           setError(errorMessage)
         })
         .finally(
             setisloading(false)
         )
     }

     const formSubmit = (e) => {
         e.preventDefault()
       const userEmail = email.current.value;
       const userPass = pass.current.value;
        OldUser(userEmail, userPass)
        .then((result) => {
            const user = result.user;
            setUser(user); 
            navigate(formLocation)
            console.log(user)
         })
         .catch((error) => {
           const errorMessage = error.message;
           setError(errorMessage)
         })
         .finally(
             setisloading(false)
         )
        // console.log(userEmail, userPass)
         

        // clear input 
        email.current.value = ""
        pass.current.value = ""
     }

    return (
        <div className='container mx-auto'>
            <div className=' md:mb-24'>
                <img className='w-4/12 md:w-5/12 my-4 mx-auto' src={logo} alt="logo" />
            </div>
             <div className='border w-11/12 sm:w-6/12 md:w-6/12 p-3 sm:p-5 lg:p-24 mx-auto'>
                  
                 <h1 className='py-4 text-xl font-medium'>Login With</h1>
                 <form  onSubmit={formSubmit} className=' w-11/12 sm:w-7/12 md:w-9/12 '>
                       <input  ref={email}  className='border-b-2 outline-0 w-full py-2 mb-2 ' type="email" placeholder='Email' /> <br />
                       <input  ref={pass} className='border-b-2 outline-0 w-full py-2 mb-2' type="pass" placeholder='Password' /> <br />
                        <input className='border px-8 py-1 rounded-full my-2 bg-blue-700 text-white ' type="submit" value="Login" />
                  </form>
                   <h1 className='text-center'>or</h1>
                  <div onClick={SignWithGoogle} className='border my-3 sm:w-12/12 md:w-9/12  rounded-full flex  aling-center px-1 py-1'>
                       
                      <img className='mr-5' style={{width:"7%"}} src={GoogleLogo} alt="logo" />
                       <button  className='text-center w-9/12'>Continue with Google</button>
                  </div>
                   <div>
                        <p className='text-red-500 font-bold text-2xl text-center'>{error}</p>
                       <p>Don't have an account? <Link className='text-blue-500 font-bold' to={"/regester"}>Create an Account </Link> </p>
                   </div>
             </div>
        </div>
    );
};

export default Login;