import React from 'react';
import NavBar from './NavBr';
import Footer from './Footer';

class BankDonation extends React.Component{
    render(){
        return(
            <>
<NavBar/>
            <h1 style={{color:'GrayText', textAlign: 'center'}}>Give a Little Bit, <br />Help a Lot</h1>

<Footer/>
            </>
        )
    }
}
export default BankDonation;