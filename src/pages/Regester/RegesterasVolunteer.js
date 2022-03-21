import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import UseAuth from '../../context/UseAuth';
import logo from "../assets/logos/Group 1329.png";

const RegesterasVolunteer = () => {
     
    const date = useRef(null)
    const name = useRef(null)
    const title = useRef(null)
    const email = useRef(null)
    const [message, setMessage] = useState('');

    const [events , setEvents] = useState({})
    const {user} = UseAuth()
    // console.log(user)
    const {id} = useParams();
   useEffect(() => {
       axios.get(`https://arcane-inlet-93515.herokuapp.com/Events/${id}`)
       .then(res =>  { 
        setEvents(res.data)
        })
   },[id])
   
   const RegesterAsVolunteer = (e) => {

       e.preventDefault()
       const userName = name.current.value;
       const userEmail = email.current.value;
       const sellectDate = date.current.value;
       const EventsTitle = title.current.value;
       const RegesterEvents = {
            
            name : userName,
            email : userEmail,
            date : sellectDate,
            title : EventsTitle,
           
       }
      
      axios.post("https://arcane-inlet-93515.herokuapp.com/regesterEvent" , RegesterEvents)
      .then(res =>  { 
        res.data.acknowledged && setMessage("congratulation. you are become a Volunteer.")
        
      } )
     

   }
    
    return (
        <div className='container mx-auto '>
        <div className=' md:mb-24'>
            <img className='w-4/12 md:w-5/12 my-4 mx-auto' src={logo} alt="logo" />
        </div>
         <div className='border w-11/12 sm:w-6/12 md:w-6/12 p-3 sm:p-5 lg:p-24 mx-auto'>
              
             <h1 className='py-4 text-xl font-medium '>Regester as Volunteer</h1>
             <form onSubmit={RegesterAsVolunteer} className=' w-11/12 sm:w-7/12 md:w-9/12  '>
                   <input ref={name} className='border-b-2 w-full py-2 mb-2 outline-0 ' type="text" value={user.displayName || ""} placeholder='Name' /> <br />
                   <input ref={email} className='border-b-2 w-full py-2 mb-2 outline-0' type="email" value={user.email || ""} placeholder='Email' /> <br />
                   <input className='border-b-2 w-full py-2  mb-2 outline-0'  ref={date} type="date"  required /> <br />
                   <input ref={title} className='border-b-2 w-full py-2 mb-2 outline-0' type="text" value={events.title || ""} placeholder='Service Type'  /> <br />
                 <input className='border px-8 py-1 w-full  my-2 bg-blue-700 text-white ' type="submit" value="Regester a volunteer" />
              </form>
              <p className='text-green-500' >{message}</p>
               
         </div>
    </div>
    );
};

export default RegesterasVolunteer;