import React from 'react';
import Addeve from '../MainComp/Addeve';
import EventSide from '../MainComp/EventSide';
import RightSidebar from '../MainComp/RightSidebar';
import Cardz from '../MainComp/Events/Cards';

            
class EventList extends React.Component {
    constructor(props){
        super(props)
    
     this.state = {
       isLoaded : false,
      events: []
    }}
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

    componentDidMount(){
        this.getEventsData()
        console.log(this.state.events)
    }
   

    render(){
      var body;
        var dat =[];
        if (!this.state.isLoaded) {
            // yet loading
          body = <div>Loading...</div>;
        } else if (this.state.error) {
            // error
          body = <div>Error occured: { this.state.error }</div>
        } else {
            // success
           var event = this.state.events
           console.log(event)
           var res = [];
           for(var i in event)
            res.push(event[i]);
          console.log(res)
           { for(var j in res[0])
              if(res[0][j].name != null && res[0][j].name!="" &&res[0])
                dat.push(res[0][j].name)
          }
            console.log(dat)   
        }
      return (
       <div>
          <div className="head2">
      <h1>
        Events List: 
      </h1>
      </div>
           {dat.map((dat, index) => (
        <Cardz key={index}
          dat={dat} />
        
    ))}       
       </div>
      );
        
    }
    }

export default EventList;
