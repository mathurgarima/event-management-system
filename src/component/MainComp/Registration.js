import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom' ;
import Button from '@material-ui/core/Button';

export default class AddVol extends React.Component{
    state={
        name: '',
        email:'',
        password : '',
        type: ''

      };

    handleChangeName = event => {
         this.setState({name: event.target.value});}
    handleChangeEmail = event => {
        this.setState({email: event.target.value});}
        handleChangePas = event => {
          this.setState({password: event.target.value});}
     handleChangeType = event => {
         this.setState({type: event.target.value});}
   
    
   
    handlesubmit = event => {
        var xhr = new XMLHttpRequest();
        var data= new FormData();
        data.append('name',this.state.name);
        data.append('email',this.state.email);
        data.append('password',this.state.password);
        data.append('type',this.state.type)
         alert("User registered")
        xhr.open('POST', '/register/participants',true)
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
                 REGISTER NEW MEMBER
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
           
                    <label> NAME
                    <br/>
                    <input type="text" name="name" onChange={this.handleChangeName}/>
                <br/>
                
                </label>
                <label>EMAIL
                    <br/>
                    <input type="email" name="email" onChange={this.handleChangeEmail}/>
                <br/>
                
                </label>   
                <label>PASSWORD
                    <br/>
                    <input type="password" name="password" onChange={this.handleChangePas}/>
                <br/>
                
                </label>
                <label>TYPE
                    <br/>
                    <input type="text" name="type" onChange={this.handleChangeType}/>
                <br/>
                
                </label>       
                
                </Typography>
        </CardContent>
     
      
        <Button color="primary" href="/Login">
          REGISTER
        </Button>
      <p className="forgot-password text-right">
         Already Registered ?  <Link style={{ textDecoration: 'none', color: 
           'black' }} to="/Login">
             LOGIN
              </Link>       
          </p>
        </form>
        </CardActionArea>
      
    </Card>
            
        );
    }
  }
