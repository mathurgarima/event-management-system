import React, { useState } from 'react';
import './Home.css';

import RightSidebar from '../MainComp/RightSidebar';
import LeftSidebar from '../MainComp/LeftSidebar';
import EventImage from '../MainComp/EventImage';

function Home(){
    const [click]=useState(false);
    return(
        <>
         <EventImage/>
    <div className="head">
      <div className="logo">
       <ul className={click ? "nav-options active" : "nav-options"}>
          <li className="option">
            About College Event
          </li>
        </ul>
      </div>
      <ul className="signin-up">
        <li>
          Features
        </li>
      </ul>
      </div>
      <div className="style">
    <LeftSidebar/>
    <RightSidebar/>
    </div>
    </>
  );
};
export default Home;