import React from 'react';
import "../../styles/Style.css";

const Navbar = () => {
    return (
         <header>
                <div className='container mx-auto py-4'>  
                 <div className=''>
                    <h1 className='font-bold mb-4 text-4xl text-center py-3'>I GROW BY HELPING PEOPLE IN NEED.</h1>
                     <div className='border  font-bold rounded w-11/12 flex justify-between sm:w-9/12 md:w-4/12 mx-auto'>
                         <input  className='py-2 pl-2 w-11/12 outline-0 ' type="text "  placeholder='Search...'/>
                          <input className='bg-blue-500 text-white px-4  rounded ' type="submit" value="Search" />
                     </div>
                </div> 
                   </div> 
             </header>
            
    

        
    );
};

export default Navbar;