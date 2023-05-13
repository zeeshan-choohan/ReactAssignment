import React from "react";
import {Routes , Route} from 'react-router-dom';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import Home from '../components/Home'
import Gallery from "../components/Gallery";
import ShippingServices from '../components/ShippingServices';
import ContactUs from '../components/ContactUs';
import FAQ from '../components/FAQ';
import BankDonation from '../components/BankDonation';

class Navigation extends React.Component{
    render(){
        return(
            <>
       <Routes>
        <Route path="/" element={<SignUp/>}></Route>
        <Route path="/SignIn" element={<SignIn/>} ></Route>
        <Route path="/Home" element={<Home/>} ></Route>
        <Route path="/Gallery" element={<Gallery/>} ></Route>
        <Route path="/ShippingServices" element={<ShippingServices/>} ></Route>
        <Route path="/ContactUs" element={<ContactUs/>} ></Route>
        <Route path="/FAQ" element={<FAQ/>}></Route>
        <Route path="/BankDonation" element={<BankDonation/>}></Route>
       </Routes>
            </>
        )
    }
}
export default Navigation;