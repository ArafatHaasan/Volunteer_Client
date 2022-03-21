import React from 'react';

const MyEvents = (props) => {
    const { name, email, date, title } = props.events
    
    return (
        <div className='rounded-lg px-2 py-2  border text-center'>
           <h1>{name}</h1>
           <h1>{email}</h1>
           <h1>{date}</h1>
           <h1>{title}</h1>
        </div>
    );
};

export default MyEvents;