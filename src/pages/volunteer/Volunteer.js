import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Topic from './Topic';

const Volunteer = () => {
    const [data, setData] = useState([])
   
    useEffect(() => {
   
        axios.get("https://arcane-inlet-93515.herokuapp.com/Events")
        .then(res => { 
            //  console.log(res.data)
             setData(res.data)  } )
        // fetch("/data.json")
        //  .then(res => res.json())
        //  .then(data => setData(data))
    },[])
     
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 container mx-auto -mt-32'>
            {
                data.map(item =>  <Topic key={item._id} items={item}></Topic>  )
            }
        </div>
    );
};

export default Volunteer;