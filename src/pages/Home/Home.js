import React from 'react';
import Navbar from '../share/Header/Navbar';
import Volunteer from '../volunteer/Volunteer';
// const Volunteer = React.lazy(() => import ("../volunteer/Volunteer"))
const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
         
              <Volunteer></Volunteer>
          
        </div>
    );
};

export default Home;