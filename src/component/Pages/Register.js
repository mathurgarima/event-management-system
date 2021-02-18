import React from 'react';

import Registration from '../MainComp/Registration';
import RightSidebar from '../MainComp/RightSidebar';
import RegisterSide from '../MainComp/RegisterSide';
import "./Home.css";

function Register(){
    return (
        <>
        <div>
        <RegisterSide/>
       </div>
        <div className="style">
    <Registration/>
    <RightSidebar/>
    </div>
    
    </>
    );
}
export default Register;
