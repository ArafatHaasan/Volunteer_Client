import React from 'react';
import { Link } from 'react-router-dom';

const Topic = (props) => {
    const {_id, title, img} = props.items
    return (
        <> 
        <div  className='bg-white rounded-full '>
            <img className='' src={`data:image/jpeg;base64,${img}`} alt="img" />  
             <Link to={`${_id}`}> 
      <h1  className='bg-blue-500 rounded-full  my-2 text-white text-center  py-4 font-bold text-xl'>{title}</h1>         

             </Link>
        </div>
       </> 
    );
};

export default Topic;