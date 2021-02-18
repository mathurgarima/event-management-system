import React, { useState } from 'react';
import './Home.css';
import Button from '@material-ui/core/Button';




function Dashboard1(){
    const [click]=useState(false);
    return(
      <>
        <div className="style1">
      <li>
      <Button color="primary" href="/Addevent">
          ADD NEW EVENTS 
        </Button>
        </li>
        <li>
      <Button color="primary" href="/EventList">
          EVENTS LIST
        </Button>
        </li>
        <li>
      <Button color="primary" href="/AddVolunteer">
          ADD NEW VOLUNTEERS
        </Button>
        </li>
        <li>
      <Button color="primary" href="/VolunteerList">
          VOLUNTEERS LIST
        </Button>
        </li>
        <li>
      <Button color="primary" href="/Register">
          ADD NEW STUDENTS
        </Button>
        </li>
        <li>
      <Button color="primary" href="/StudentList">
          STUDENTS LIST
        </Button>
        </li>
        <li>
        <Button color="primary" href="/VolunteerList">
          EVENT REPORT
        </Button>
        </li>
        <li>
      <Button color="primary" href="/Register">
          ADD SCHEDULE
        </Button>
        </li>
        <li>
      <Button color="primary" href="/StudentList">
          ADD THEME
        </Button>
        </li>
        
    </div>
    </>
  );
};
export default Dashboard1;