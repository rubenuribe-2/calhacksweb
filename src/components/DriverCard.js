import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import axios from 'axios';

export default class DriverCard extends Component{
  constructor(props){
    super(props);
    this.onClick=this.onClick.bind(this);
    this.updateData=this.updateData.bind(this);
    this.state={
      speed:this.props.speed,
      distance:this.props.distance,
      time:this.props.time,
      moving:this.props.speed>=1
    }
  }
  updateData(){
    //Query the api
    axios.get(`https://calhackssix.firebaseio.com/${this.props.name}.json`)
    .then(res=>{
      console.log(res);
    });



    //update the state
    // this.setState({speed:0,distance:0,time:0});
    setTimeout(this.updateData, 5000);
  }
  componentDidMount(){
    this.updateData();
  }
  onClick(){
    //handle the click event
    console.log(this.state.moving);
    console.log(this.props.name);
    this.setState({speed:0,distance:0,time:0});
    document.getElementById(this.props.name+"name").classList.remove('green');
  }
  

  
  render(){
    return(
      <div className={(this.props.speed>=1) ? 'App green' : 'App white'} id={this.props.name+"name"}>
        <div className="Driver">
          <h1>{this.props.name}</h1>
          <br></br>
          <h3>current speed: {this.state.speed} mph</h3>
          <h3>distance travled: {this.state.distance} miles</h3>
          <h3>Time driving: {this.state.time} minutes</h3>
          <br></br>
          <Button disabled={this.state.moving} onClick={this.onClick} id={this.props.name} variant="dark" size="lg" style={{minWidth:"30%"}}>Reset</Button>
        </div>
      </div>
    );
  }
}





/*
function DriverCard(props) {

  
    return (
      <div className="Driver">
        <h1>{props.name}</h1>
        <br></br>
        <h3>average speed: {props.speed} mph</h3>
        <h3>distance travled: {props.distance} miles</h3>
        <h3>Time driving: {props.time} minutes</h3>
        <br></br>
        <Button onClick={{onClick}} variant="dark" size="lg" style={{minWidth:"30%"}}>Reset</Button>
      </div>
    );
  }
  
  export default DriverCard;*/

