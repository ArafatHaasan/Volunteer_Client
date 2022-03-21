import axios from 'axios';
import React from 'react';
import trash from "../assets/logos/trash-2 9.png";

const RegesterList = (props) => {
   
    const {_id, name, email, date, title} = props.users

    const DeleteVolunteer = (id) => {
       
          axios.delete(`https://arcane-inlet-93515.herokuapp.com/Events/${id}`)
          .then(res =>  {
              if(res.data.deletedCount){
                window.location.reload(false);
              }
          })
        
        
    }

    return (
        <tr >  

      
        <td className='whitespace-nowrap ' >{name}</td>
        <td className='whitespace-nowrap ' >{email}</td>
        <td className='whitespace-nowrap ' >{date}</td>
        <td className='whitespace-nowrap ' >{title}</td>
        <td className='whitespace-nowrap ' ><button onClick={() => DeleteVolunteer(_id)} className='border-0 rounded-lg bg-red-500   py-1'><img src={trash} style={{width: "40%", margin: "auto"}} alt="trash" /></button> </td>
       </tr>
    );
};

export default RegesterList;