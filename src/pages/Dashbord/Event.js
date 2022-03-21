import axios from 'axios';
import React, { useEffect, useState } from 'react';
import UseAuth from '../../context/UseAuth';
import MyEvents from './MyEvents';

const Event = () => {
    const [events, setEvents] = useState([])
   const {user} = UseAuth()
    useEffect(() => {
         axios.get(`https://arcane-inlet-93515.herokuapp.com/users?email=${user.email}`)
         .then(res =>  { 
            setEvents(res.data)
             
         } )
    }, [user])
    return (
        <div >
            <div className='container mx-auto text-center py-4 my-4 bg-black text-white'>
            <h1 className='font-bold text-2xl'>Your Events</h1>

            </div>

      
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-4 container mx-auto'>
           
            {
                events.map((events, index) => <MyEvents key={index} events={events}></MyEvents> )
            }

        </div>
        </div>
    );
};

export default Event; 