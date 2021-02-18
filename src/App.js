import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './component/Pages/Home';
import Header from './component/MainComp/Header';
import Navbar from './component/MainComp/Navbar';
import Footer from './component/MainComp/Footer';
import About from './component/Pages/About';
import Register from './component/Pages/Register';
import Log from './component/Pages/Log';
import Event from './component/Pages/Event';
import Dashboard from './component/Pages/Dashboard';
import Addeve from './component/MainComp/Addeve';
import AddVolunteer from './component/Pages/Volunteer';
import EventList from './component/Pages/EventList';
import Addevents from './component/MainComp/Addevents';
import Addevent from './component/Pages/Addevent';
import VolunteerList from './component/Pages/VolunteerList';

function App() {
  return (
   <>
      <Router>
        <Header/>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/About' component={About}/>
          <Route path='/Register' component={Register}/>
          <Route path='/Login' component={Log}/>
          <Route path='/Event' component={Event}/>
          <Route path='/Dashboard' component={Dashboard}/>
          <Route path='/Addevent' component={Addevent}/>
          <Route path='/AddVolunteer' component={AddVolunteer}/>
          <Route path='/EventList' component={EventList}/>
          <Route path='/VolunteerList' component={VolunteerList}/>
        </Switch>
        <Footer/>
      </Router>
    </>
  );
}

export default App;