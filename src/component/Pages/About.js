import React, { useState } from 'react';
import './Home.css';

import RightSidebar from '../MainComp/RightSidebar';
import Leftbar from '../MainComp/Leftbar';
import EventImage from '../MainComp/EventImage';

function About(){
    const [click]=useState(false);
    return(
        <>
        <EventImage/>
    <div className="head">
      <div className="logo">
       <ul className={click ? "nav-options active" : "nav-options"}>
          <li className="option">
            About Events
          </li>
        </ul>
      </div>
      <ul className="signin-up">
        <li>
          Attraction
        </li>
      </ul>
      </div>
      <div className="style">
          <Leftbar/>
    <RightSidebar/>
    </div>
    </>
  );
};
export default About;