import React from 'react';
import Addeve from '../MainComp/Addeve';
import EventSide from '../MainComp/EventSide';
import RightSidebar from '../MainComp/RightSidebar';
import Cardz from '../MainComp/Events/Cards';

            
class VolunteerList extends React.Component {
    constructor(props){
       super(props); 
     this.state = {
      isLoaded: false,
      error: null,
      volunteer: []
    };}
    componentDidMount(){
         var xhr = new XMLHttpRequest();
        xhr.addEventListener("readystatechange", () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    var response = xhr.responseText,
                     json = JSON.parse(response)
                     this.setState({
                         isLoaded:true,
                     volunteer : json
                   }); 
                   console.log(this.state.volunteer)
                } else {
                    // error
                  this.setState({
                      isLoaded:true,
                    error: xhr.responseText
                  });
                }
            }
        }); 
        xhr.open("GET", "/admin/volunteers", true);
        xhr.send();
       
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
           var events = this.state.volunteer
           console.log(events)
           var res = [];
           for(var i in events)
            res.push(events[i]);
          console.log(res)
           { for(var j in res[0])
               dat.push(res[0][j].name)
          }
            console.log(dat)   
        }
      return (
        <>
        <div className="head2">
          <h1>
            Volunteer List:
          </h1>
          </div>
          <div>
       {dat.map ((item,index) =>
        <Cardz dat= {item}
           key={index}
        />  
       )}        
      </div>
      </>);}
}
export default VolunteerList;
