import React, { Suspense } from 'react';
import Navbar from '../share/Header/Navbar';
// import Volunteer from '../volunteer/Volunteer';
const Volunteer = React.lazy(() => import ("../volunteer/Volunteer"))
const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Suspense fallback={<div>Loading...</div>}>
              <Volunteer></Volunteer>
              </Suspense>
        </div>
    );
};

export default Home;