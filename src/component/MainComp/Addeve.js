import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export default class Addeve extends React.Component{
    state={
        name: '',
        startdate:'',
        enddate:'',
        organizer:'',
        description:''
       
    };

    handleChangeName = event => {
        
        this.setState({name: event.target.value});}
    handleChangeStart = event => {
        this.setState({startdate: event.target.value});}
     handleChangeEnd = event => {   
        this.setState({enddate: event.target.value});}
     handleChangeOrgan = event => {   
        this.setState({organizer: event.target.value});}
     handleChangeDes = event => {   
        this.setState({description: event.target.value});

    }
   
    handlesubmit = event => {
        var xhr = new XMLHttpRequest();
        var data= new FormData();
        data.append('name',this.state.name);
        data.append('startdate',this.state.startdate);
        data.append('enddate',this.state.enddate);
        data.append('organizer',this.state.organizer);
        data.append('description',this.state.description);

        xhr.open('POST', '/admin/add-event',true)
        xhr.onload = function () {
            // do something to response
            console.log(data);
        };
        alert("Events are added !!")
            xhr.send(data);
          
        

    };

    render(){
        return (
            <Card className="root">
            <CardActionArea>
               <form onSubmit={this.handlesubmit}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                 ADD NEW EVENT PROGRAM
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
           
                    <label>EVENT NAME
                    <br/>
                    <input type="text" name="name" onChange={this.handleChangeName}/>
                <br/>
                
                </label>
                <label>START DATE
                    <br/>
                    <input type="date" name="startdate" onChange={this.handleChangeStart}/>
                <br/>
                
                </label>
                <label>END DATE
                    <br/>
                    <input type="date" name="enddate" onChange={this.handleChangeEnd}/>
                <br/>
                
                </label>
                <label>ORGANIZER
                    <br/>
                    <input type="text" name="organizer" onChange={this.handleChangeOrgan}/>
                <br/>
                <label>DESCRIPTION
                    <br/>
                    <input type="text" name="description" onChange={this.handleChangeDes}/>
                <br/>
                
                </label>
                </label>
                
                </Typography>
        </CardContent>
     
      
      <button className="btn" href="/Event">Add</button>
        
        </form>
        </CardActionArea>
      
    </Card>
            
        );
    }
}