import React from 'react';
import { Link } from 'react-router-dom';
import UseAuth from '../../../context/UseAuth';
import logo from "../../assets/logos/Group 1329.png";
import "../../styles/Style.css";

const ManuItem = () => {
const {user , Logout, } = UseAuth()
    return (
          <div className='footer'>
              <div className='container mx-auto'>
            <nav className='  sm:flex sm:flex-col sm:justify-center sm:items-center md:flex md:justify-between md:flex-row md:items-center  lg:flex lg:justify-between lg:items-center lg:flex-row'>
                    <div className=' hidden sm:block py-2 w-2/5  sm:w-2/6 md:w-1/6 lg:w-1/5'>
                         <img style={{width:"100%"}} src={logo} alt="logo" />
                    </div>
                    <div className='py-2 w-3/5 block mx-auto  sm:hidden '>
                         <img style={{width:"100%"}} src={logo} alt="logo" />
                    </div>
                     <div className='  flex flex-col space-y-4 sm:space-y-0 md:space-0 lg:space-y-0 text-center sm:flex-row md:flex-row lg:flex-row '>
                         <Link  className='mx-6 font-bold ' to={"/"}> Home </Link>
                         <Link  className='mx-6 font-bold' to={"Events"}> Events </Link>
                          <Link className='mx-6 font-bold' to={'dashbord'}> Dashbord </Link>
                           
                           {
                             user.email ?
                           <button onClick={Logout}  className='px-6 py-1 rounded text-white bg-slate-900 ml-2'>Logout</button>

                           
                            :  
                               <Link to={'regester'} >
                           <button className='px-6 py-1 rounded text-white bg-blue-500 mr-2'>Regester</button>
                             </Link> 
                         
                           }
                            
                        <button  className='px-6 py-1 rounded text-white bg-slate-900 ml-2'>Admin</button>
                     </div>

                 
                </nav>  
         </div> 
          </div>
        
       
    );
};

export default ManuItem;