import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';


function Header(){
    return(
      <div>
        <AppBar colour="transparent" position="static">
          <Toolbar>
            <h1>
            College Event Management System
          </h1>
          </Toolbar>
        </AppBar>
      </div> 
    );
}

export default Header;