import React,{useState} from 'react';
import "../Pages/Home.css";

function AddSide(){
    const [click]=useState(false);

    return(
        <>
        <div className="head1">
      <div className="logo">
       <ul className={click ? "nav-options active" : "nav-options"}>
          <li className="option">
            ADD VOLUNTEERS TO THE FEST
          </li>
        </ul>
      </div>
      <ul className="signin-up">
        <li>
          Attraction
        </li>
      </ul>
      </div>
       
       </>
    );
}

export default AddSide;