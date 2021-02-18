import React, { useState } from 'react';
import './Home.css';
import Button from '@material-ui/core/Button';

import LeftSidebar from '../MainComp/LeftSidebar';
import RegisterSide from '../MainComp/RegisterSide';
import RightSidebar from '../MainComp/RightSidebar';
import Dashboard1 from './Dashboard1';


function Dashboard(){
    const [click]=useState(false);
    return(
        <>
      <div className="head2">
      <div className="logo">
       <ul className={click ? "nav-options active" : "nav-options"}>
          <li> 
             Admin Dashboard Panel
          </li>
        </ul>
      </div>
      </div>
      <div className="style">
        <Dashboard1/>
        <RightSidebar/>
      </div>
     
    </>
  );
};
export default Dashboard;