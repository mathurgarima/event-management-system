import React from 'react';

import Login from '../MainComp/Login';
import RightSidebar from '../MainComp/RightSidebar';
import RegisterSide from '../MainComp/RegisterSide';
import "./Home.css";

function Log(){
    return (
        <>
        <div>
        <RegisterSide/>
       </div>
        <div className="style">
    <Login/>
    <RightSidebar/>
    </div>
    
    </>
    );
}
export default Log;