import React from 'react';

import Addevents from '../MainComp/Addevents';
import Addeve from '../MainComp/Addeve';
import RightSidebar from '../MainComp/RightSidebar';
import EventSide from '../MainComp/EventSide';
import "./Home.css";

function Addevent(){
    return (
        <>
        <div>
        <EventSide/>
       </div>
        <div className="style"> 
         <Addeve/>
    <RightSidebar/>
    </div>
    
    </>
    );
}
export default Addevent;
