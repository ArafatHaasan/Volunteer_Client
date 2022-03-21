import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import logo from "../assets/logos/Group 1329.png";
const Dashbord = () => {
    return (
        <div className='flex  '>
            <div className='w-2/12 px-8'>
               <div className=''>
                 <img style={{width:"100%"}} src={logo} alt="" />
               </div>
                 <ul className='text-center my-4'>
                      <Link className='text-lg font-bold  inline-block my-3' to={"/dashbord"}>Add Events</Link> <br />
                       <Link className='text-lg font-bold block' to={"VolunterList"}>Volunteer List </Link> 
                 </ul>
            </div>
            <div className='grow '>
                <Outlet/>
            </div>
            
        </div>
    );
};

export default Dashbord;