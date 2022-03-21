import axios from 'axios';
import React, { useState } from 'react';

const AddEvent = () => {
    const [title, setTitle] = useState("")
    const [image, setImage ] = useState(null)
    const [message, setMessage] = useState(null)
    // console.log(image)
    const addEvents = (e) => {
         e.preventDefault()
     
         const formData = new FormData()
         formData.append("title", title)
         formData.append("img", image)
        //  console.log(formData)
          axios.post("https://arcane-inlet-93515.herokuapp.com/Events" ,
          formData)
          .then(res => {
              if(res.data.insertedId){
                setMessage("new Events added")
                
              
              }
          })


    }

    return (
        <div className='bg-slate-50'>
            <h1 className='bg-white font-bold text-2xl pl-10 py-4'> Add Event</h1>
             <div className=''>
                <form onSubmit={addEvents}  className='container mx-auto'>
                    <div className='bg-white rounded-lg m-4 p-8'>

                       
                        <div className='my-3'>
                         <label className='font-bold inline-block py-1 text-lg' htmlFor="text">
                                Event Title  
                          </label> <br />
                          <input  onBlur={(e) => setTitle(e.target.value) } className='border px-3 w-6/12 py-2 rounded' placeholder='Enter title' type="text" />
                       </div>
                         
                        <div className='my-3'>
                            <label className='font-bold inline-block py-1 text-lg' htmlFor="Banner">
                                Banner
                            </label> <br />
                             <input   accept='image/*' onChange={(e) => setImage(e.target.files[0])} className='border px-3 py-2 rounded w-6/12'  type="file" />
                        </div>
                         <p className='text-green-500 text-bold'> {message}</p>
                        <input   className='bg-blue-500 text-white font-bold my-2 mx-auto border rounded px-12 py-2 ' type="submit" value="Submit" />
                    </div>
                    
                   
                </form>
             </div>
        </div>
    );
};

export default AddEvent;