import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import './App.css';
import AuthProvider from "./context/AuthProvider";
import Footer from "./pages/common/Footer";
import AddEvent from "./pages/Dashbord/AddEvent";
import Dashbord from "./pages/Dashbord/Dashbord";
import Event from "./pages/Dashbord/Event";
import VolunteerList from "./pages/Dashbord/VolunteerList";
import Home from "./pages/Home/Home";
import Login from "./pages/Regester/Login";
import RegesterasVolunteer from "./pages/Regester/RegesterasVolunteer";
import SingUP from "./pages/Regester/SignUp";
import ManuItem from "./pages/share/Header/ManuItem";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
function App() {
  return (
    <div>
        <AuthProvider> 
         <BrowserRouter>
         <ManuItem></ManuItem>
          <Routes>

         
        <Route path="/" element={<Home/>}></Route>
        <Route path="home" element={<Home/>}></Route>
        <Route path="dashbord" element={<Dashbord></Dashbord>}>
            <Route path="/dashbord" element={<AddEvent/>}/>
            <Route path= "VolunterList" element={<VolunteerList/>} />
        </Route> 
        <Route path="events" element={<Event/>}></Route>
        <Route path="regester" element={<SingUP/> }></Route>
        <Route path="Login" element={<Login/> }></Route>
         <Route path=":id" element={<PrivateRoute> <RegesterasVolunteer/> </PrivateRoute> } />
             
          </Routes>
          <Footer></Footer>
        </BrowserRouter>  </AuthProvider>
        
       
         {/* <Volunteer></Volunteer>
       <RegesterasVolunteer></RegesterasVolunteer>
     <Login></Login>
       <SignUs></SignUs>
         */}
    </div>
  );
}

export default App;
