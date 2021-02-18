import React, { Component } from 'react';
import Cards from '../MainComp/Events/Card';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



class ListApp extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    };
    getEventsData(){
      var xhr = new XMLHttpRequest();
     xhr.addEventListener("readystatechange", () => {
         if (xhr.readyState === 4) {
             if (xhr.status === 200) {
                 var response = xhr.responseText,
                  json = JSON.parse(response)
                  this.setState({
                   isLoaded : true ,
                  events : json
                });  
              
                console.log(this.state.events)  

             } else {
                 // error
               this.setState({
                 isLoaded : true,
                 error: xhr.responseText
               });
             }
         }
     }); 
     xhr.open("GET", "/admin/events", true);
     xhr.send();
     
     
 }
 useStyles = makeStyles({
  root: {
    maxWidth: 450,
    height : 250
  },
  media: {
    height: 200,
  },
});

 componentDidMount(){
     this.getEventsData()
 }


    render() {
      var body;
    var dat = [] ;
    var des = [];
    var eve = [[2]];
    var event = this.state.events;
    if (!this.state.isLoaded) {
        // yet loading
      body = <div>Loading...</div>;
    } else if (this.state.error) {
        // error
      body = <div>Error occured: { this.state.error }</div>
    } else {
        // success
       
       console.log(event)
       var res = [];
       for(var i in event)
        res.push(event[i]);
      console.log(res)
       { for(var j in res[0])
          if(res[0][j].name != null && res[0][j]!=" " && res[0])
            dat.push(res[0][j].name)
      }
        console.log(dat)   
        { for(var j in res[0])
          if(res[0][j].description != null && res[0])
            des.push(res[0][j].description)
      }
      console.log(des)
    }
   
  return (
    <>
    <div className="head2">
      <h1>
        Events
      </h1>
      </div>
      <div>
   {dat.map ((item,index) =>
    <Cards dat= {item}
       des={des[index]}
       key={index}
    />  
   )}        
  </div>
  </>
   );
          }
}

export default ListApp;