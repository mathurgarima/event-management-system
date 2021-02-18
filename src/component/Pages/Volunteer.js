import React from 'react';

import AddVol from '../MainComp/AddVol';
import RightSidebar from '../MainComp/RightSidebar';
import AddSide from '../MainComp/AddSide';
import "./Home.css";

function Volunteer(){
    return (
        <>
        <div>
        <AddSide/>
       </div>
        <div className="style">
    <AddVol/>
    <RightSidebar/>
    </div>
    
    </>
    );
}
export default Volunteer;
