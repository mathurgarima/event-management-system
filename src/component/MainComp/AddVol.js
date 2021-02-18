import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export default class AddVol extends React.Component{
    state={
        name: '',
        email:'',
        events : '',
      };

    handleChangeName = event => {
         this.setState({name: event.target.value});}
    handleChangeEmail = event => {
        this.setState({email: event.target.value});}
   
    
   
    handlesubmit = event => {
        var xhr = new XMLHttpRequest();
        var data= new FormData();
        data.append('name',this.state.name);
        data.append('email',this.state.email);
        data.append('events',this.state.events);

        xhr.open('POST', '/admin/add-volunteer',true)
        xhr.onload = function () {
            // do something to response
            console.log(data);
        };
            xhr.send(data);
          
        

    };

    render(){
        return (
            <Card className="root">
            <CardActionArea>
               <form onSubmit={this.handlesubmit}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                 ADD NEW VOLUNTEER 
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
           
                    <label>VOLUNTEER NAME
                    <br/>
                    <input type="text" name="name" onChange={this.handleChangeName}/>
                <br/>
                
                </label>
                <label>VOLUNTEER EMAIL
                    <br/>
                    <input type="email" name="email" onChange={this.handleChangeEmail}/>
                <br/>
                
                </label>            
                
                </Typography>
        </CardContent>
     
      
      <button className="btn" href="/Addevent">Add</button>
        
        </form>
        </CardActionArea>
      
    </Card>
            
        );
    }
  }
