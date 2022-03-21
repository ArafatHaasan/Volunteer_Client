import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "../styles/Style.css";
import RegesterList from './RegesterList';

const VolunteerList = () => {

   const [regUser, setRegUser] = useState([])
    useEffect(() => {
       axios.get("https://arcane-inlet-93515.herokuapp.com/regesterEvent")
       .then(res =>  {
         setRegUser(res.data)
    
       }  )
    },[])


    return (
        <div className='bg-slate-50 '>
        <h1 className='bg-white font-bold text-2xl pl-10 py-4'> Volunteer Regester list </h1>
     
     <div className='  rounded m-8  border bg-white p-6'>
       <div className='overflow-x-auto'>
         <table className="w-full text-left">
    
          <thead className='bg-gray-100 px-2'>
    <tr  >
      <th>Name</th>
      <th>Email Id</th>
      <th>Regester date</th>
      <th>Volunteer List</th>
      <th>Action</th>
    </tr>
  </thead>  
  <tbody>
      {
        regUser.map(user =>  <RegesterList key={user._id} users={user}></RegesterList>)
      }
    
     
  </tbody>
</table> 
       </div>
   
     </div>
      
         

    </div>
    );
};

export default VolunteerList;